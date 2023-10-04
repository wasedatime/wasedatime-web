import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import { currentSchoolState, currentTagsState } from "@app/recoil/atoms";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";
import { getUserAttr, getIdToken } from "wasedatime-ui";
import ThreadType from "@app/types/thread";
import InfiniteScroll from "react-infinite-scroll-component";

const Board = ({ triggerRefresh, setBoard }: any) => {
  const [currentTags, setCurrentTags] = useRecoilState(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);
  const [boardThreads, setBoardThreads] = useState<ThreadType[]>([]);
  const [userToken, setUserToken] = useState("");
  const [index, setIndex] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const indexRef = useRef(index);
  const currentSchoolsRef = useRef(currentSchools);
  const { boardSlug } = useParams();
  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || ""
  );

  // Use Effect to set the board state in the parent component for tag filtering
  useEffect(() => {
    setBoard(boardSlug);
  }, [boardSlug]);

  // Use Effect for initial fetch
  useEffect(() => {
    var currentBoardId =
      boards.find((board) => board.slug === boardSlug)?.slug || "";
    setBoardThreads([]);
    indexRef.current = 0;
    setBoardId(currentBoardId);
    getThreads(currentBoardId, 0, 10, currentSchools, currentTags);
    currentSchoolsRef.current = currentSchools;
    setHasMoreItems(true);
  }, [boardSlug, currentSchools, triggerRefresh]);

  // UseEffect to reset selected tags when board changes or user triggers a refresh
  useEffect(() => {
    setCurrentTags([]);
  }, [boardSlug, triggerRefresh]);

  // UseEffect to set tags when global recoil state current tags changes. may need optimization.
  // As of Sept 13th, 2023, tag search is disabled
  // useEffect(() => {
  //   if (tags.length > 0 || currentTags.length > 0) setTags(currentTags);
  // }, [currentTags]);

  // function to fetch threads
  const getThreads = async (
    boardId: string | "",
    index: number,
    threadCount: number,
    school: string[],
    tags: string[]
  ) => {
    setIsLoading(true); // Set loading to true at the beginning of your fetch operation
    let userId = userToken;

    try {
      if (userId.length === 0) {
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
        ? // if board id exists, the db query has better efficiency
          `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}&board_id=${boardId}`
        : // else, the db will not query but scan which has bad efficiency
          `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}`;

      const res = await API.get("wasedatime-dev", apiPath, {
        headers: {
          "Content-Type": "application/json",
        },
        response: true,
      });

      var threads =
        res.data.data && boardId
          ? res.data.data.filter(
              (thread: Thread) => thread.board_id === boardId
            )
          : res.data.data;

      setBoardThreads((prevBoardThreads = []) => [
        ...prevBoardThreads,
        ...(Array.isArray(threads) ? threads : []),
      ]);

      // the last index of the array is the index of the last item in the db
      const endIndex: number = res.data.message;

      if (threads && (threads.length < threadCount || threads.length === 0)) {
        setHasMoreItems(false);
      }

      const newIndex = endIndex;
      indexRef.current = newIndex;
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false); // Set loading to false at the end of your fetch operation, regardless of its outcome
    }
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
    // <div className="max-w-2/5 w-5/6 mx-auto h-full">
    <div className="mx-auto px-2 h-full lg:w-5/6 max-w-[5/6] standard-style">
      <CreateThread onNewThread={handleNewThread} />
      <div
        className="overflow-auto h-[calc(100%-24px)] mt-4 md:mt-8 lg:mt-12"
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={boardThreads.length}
          next={() => {
            if (!isLoading && hasMoreItems) {
              getThreads(
                boardId,
                indexRef.current,
                10,
                currentSchoolsRef.current,
                tags
              );
            }
          }}
          hasMore={hasMoreItems}
          scrollableTarget="scrollableDiv"
          loader={<h4>Loading...</h4>}
          style={{ overflowY: "hidden" }}
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Board;
