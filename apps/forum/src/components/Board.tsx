import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import localForage from "localforage";
import { currentSchoolState, currentTagsState } from "@app/recoil/atoms";
import { filterThreadsByTags, filterThreadsBySchool } from "@app/utils/filter";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";
import { getUserAttr } from "wasedatime-ui";
import InfiniteScroll from "react-infinite-scroll-component";

const Board = () => {
  const { boardSlug } = useParams();

  const currentTags = useRecoilValue(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);

  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || ""
  );

  const [boardThreads, setBoardThreads] = useState<Thread[]>([]);
  const [userToken, setUserToken] = useState("");
  const [index, setIndex] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const scrollableElementRef = useRef(null);
  const indexRef = useRef(index);
  const currentSchoolsRef = useRef(currentSchools);
  const mountedRef = useRef(false);

  // useEffect #1 to initially fetch data when user first comes into forums
  useEffect(() => {
    getThreads("", 0, 10, []);
    const handleScroll = () => {
      mountedRef.current = true;
      const element = scrollableElementRef.current;
      const currentIdx = indexRef.current;
      const selectedSchools = currentSchoolsRef.current;
      console.log("current index : ", currentIdx);

      if (element) {
        const scrollHeight = element.scrollHeight;
        const scrollTop = element.scrollTop;
        const clientHeight = element.clientHeight;

        if (scrollHeight - scrollTop === clientHeight) {
          // Reached the bottom of the scrollable element
          if (hasMoreItems) {
            getThreads("", currentIdx, 10, selectedSchools);
          }
        }
      }
    };

    const element = scrollableElementRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // useEffect #2 to fetch data only when user is moving around forums
  useEffect(() => {
    if (mountedRef.current) {
      if (boardSlug) {
        var currentBoardId =
          boards.find((board) => board.slug === boardSlug)?.slug || "";
        setBoardThreads([]);
        setBoardId(currentBoardId);
        getThreads(currentBoardId, 0, 10, currentSchools);
      } else {
        // This block will only run if boardSlug is undefined
        setBoardThreads([]);
        getThreads("", index, 10, currentSchools);
        console.log("Triggered on first useEffect when boardSlug is undefined");
      }
    }
  }, [boardSlug]);

  useEffect(() => {
    if (mountedRef.current) {
      setBoardThreads([]);
      indexRef.current = 0;
      getThreads("", 0, 10, currentSchools);
      console.log("Triggered on third UseEffect");
      currentSchoolsRef.current = currentSchools;
    } else {
      mountedRef.current = true;
    }
  }, [currentSchools]);

  const getThreads = async (
    boardId: string,
    index: number,
    threadCount: number,
    school: string[]
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
      ? `/forum/${boardId}?uid=${userId}&index=${index}&num=${threadCount}&school=${school}`
      : `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}`;

    // const apiPath = `/forum?uid=${userId}&index=0&num=10`;

    console.log(apiPath);

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

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      <div
        className="overflow-auto h-[calc(100%-44px)]"
        id="scrollableDiv"
        ref={scrollableElementRef}
      >
        {boardThreads.map((thread, i) => (
          <ThreadBlock
            key={i}
            isPreview={true}
            thread={thread}
            fromRoot={boardId === ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
