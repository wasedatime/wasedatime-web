import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import { currentSchoolState, currentTagsState } from "@app/recoil/atoms";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";
import { getUserAttr } from "wasedatime-ui";
import ThreadType from "@app/types/thread";

const Board = ({ triggerRefresh, setBoard }: any) => {
  const [currentTags, setCurrentTags] = useRecoilState(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);
  const [boardThreads, setBoardThreads] = useState<ThreadType[]>([]);
  const [userToken, setUserToken] = useState("");
  const [index, setIndex] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [tags, setTags] = useState<string[]>([]);

  const scrollableElementRef = useRef(null);
  const indexRef = useRef(index);
  const currentSchoolsRef = useRef(currentSchools);
  const { boardSlug } = useParams();
  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || ""
  );

  useEffect(() => {
    setBoard(boardSlug);
  }, [boardSlug]);

  // useEffect #1 to initially fetch data when user first comes into forums
  useEffect(() => {
    const handleScroll = () => {
      // mountedRef.current = true;
      const element = scrollableElementRef.current;
      const currentIdx = indexRef.current;
      const selectedSchools = currentSchoolsRef.current;

      if (element) {
        const scrollHeight = (element as HTMLElement).scrollHeight;
        const scrollTop = (element as HTMLElement).scrollTop;
        const clientHeight = (element as HTMLElement).clientHeight;

        // Reached the bottom of the scrollable element
        if (
          scrollTop > 0 &&
          scrollHeight - scrollTop === clientHeight &&
          hasMoreItems
        ) {
          getThreads(boardId, currentIdx, 10, selectedSchools, tags);
        }
      }
    };

    const element = scrollableElementRef.current;
    if (element) {
      (element as HTMLElement).addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (element) {
        (element as HTMLElement).removeEventListener("scroll", handleScroll);
      }
    };
  }, [boardId, tags]);

  //useEffect #3 to fetch and filter results by school
  useEffect(() => {
    var currentBoardId =
      boards.find((board) => board.slug === boardSlug)?.slug || "";
    setBoardThreads([]);
    indexRef.current = 0;
    setBoardId(currentBoardId);
    getThreads(currentBoardId, 0, 10, currentSchools, tags);
    currentSchoolsRef.current = currentSchools;
    setHasMoreItems(true);
  }, [boardSlug, currentSchools, triggerRefresh, tags]);

  useEffect(() => {
    setCurrentTags([]);
  }, [boardSlug]);

  useEffect(() => {
    if (tags.length > 0 || currentTags.length > 0) setTags(currentTags);
  }, [currentTags]);

  const getThreads = async (
    boardId: string | "",
    index: number,
    threadCount: number,
    school: string[],
    tags: string[]
  ) => {
    let userId = userToken;
    if (userId.length == 0) {
      const userAttr = await getUserAttr();
      if (userAttr) {
        userId = userAttr.id;
        setUserToken(userId);
      } else {
        userId = "";
        setUserToken(userId);
      }
    }

    const apiPath = boardId
      ? `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}&board_id=${boardId}`
      : `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}`;

    API.get("wasedatime-dev", apiPath, {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    })
      .then((res) => {
        var threads = boardId
          ? res.data.data.filter(
              (thread: Thread) => thread.board_id === boardId
            )
          : res.data.data;
        setBoardThreads((prevBoardThreads) => [
          ...prevBoardThreads,
          ...threads,
        ]);

        const endIndex: number = res.data.message;

        if (threads.length < threadCount || threads.length === 0) {
          setHasMoreItems(false);
        }

        const newIndex = endIndex;
        indexRef.current = newIndex;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleNewThread = (newThread: ThreadType) => {
    setBoardThreads((prevBoardThreads) => [newThread, ...prevBoardThreads]);
  };

  const handleDeleteThread = (threadId: ThreadType["thread_id"]) => {
    const updatedThreads = boardThreads.filter(
      (thread) => thread.thread_id !== threadId
    );
    setBoardThreads(updatedThreads);
  };

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread onNewThread={handleNewThread} />
      <div
        className="overflow-auto h-[calc(100%-44px)] mt-5"
        id="scrollableDiv"
        ref={scrollableElementRef}
      >
        {boardThreads.map((thread, i) => (
          <ThreadBlock
            key={i}
            isPreview={true}
            thread={thread}
            fromRoot={boardId === ""}
            onDelete={handleDeleteThread}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
