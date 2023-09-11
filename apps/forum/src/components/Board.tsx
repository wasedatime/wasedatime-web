import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
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

const Board = ({ triggerRefresh, setBoard }: any) => {
  const { boardSlug } = useParams();
  setBoard(boardSlug);

  const [currentTags, setCurrentTags] = useRecoilState(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);

  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || ""
  );

  const [boardThreads, setBoardThreads] = useState<Thread[]>([]);
  const [userToken, setUserToken] = useState("");
  const [index, setIndex] = useState(0);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [tags, setTags] = useState([]);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState(null);

  const scrollableElementRef = useRef(null);
  const indexRef = useRef(index);
  const currentSchoolsRef = useRef(currentSchools);

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
          getThreads(boardId, selectedSchools, tags);
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

  // useEffect #2 to fetch data only when user is moving around forums
  // useEffect(() => {
  //   if (boardId) {
  //     var currentBoardId =
  //       boards.find((board) => board.slug === boardSlug)?.slug || "";
  //     setBoardThreads([]);
  //     setBoardId(currentBoardId);
  //     getThreads(currentBoardId, 0, 10, currentSchools, tags);
  //   }
  // }, [boardSlug, tags]);

  //useEffect #3 to fetch and filter results by school
  useEffect(() => {
    var currentBoardId =
      boards.find((board) => board.slug === boardSlug)?.slug || "";
    setBoardThreads([]); // Clear the existing threads
    setLastEvaluatedKey(null); // Reset LastEvaluatedKey
    setBoardId(currentBoardId); // Update boardId
    getThreads(currentBoardId, currentSchools, tags); // Fetch threads without index and threadCount
    currentSchoolsRef.current = currentSchools; // Update the currentSchoolsRef
    setHasMoreItems(true); // Reset pagination flag
  }, [boardSlug, currentSchools, triggerRefresh, tags]);

  useEffect(() => {
    setCurrentTags([]);
  }, [boardSlug]);

  // useEffect(() => {
  //   // Check if boardSlug or tags have changed
  //   if (boardSlug !== prevBoardSlug.current || tags !== prevTags.current) {
  //     console.log("Condition 1 triggered!");
  //     var currentBoardId =
  //       boards.find((board) => board.slug === boardSlug)?.slug || "";
  //     setBoardThreads([]);
  //     setBoardId(currentBoardId);
  //     getThreads(currentBoardId, 0, 10, currentSchools, tags);
  //   }

  //   // Check if currentSchools or triggerRefresh have changed
  //   if (
  //     currentSchools !== prevCurrentSchools.current ||
  //     (triggerRefresh !== prevTriggerRefresh.current && triggerRefresh === true)
  //   ) {
  //     console.log("condition 2 triggered!");
  //     setTags((tags) => (tags = []));
  //     setBoardThreads([]);
  //     indexRef.current = 0;
  //     getThreads(boardSlug, 0, 10, currentSchools, []);
  //     currentSchoolsRef.current = currentSchools;
  //   }

  //   // Update the previous values for the next run
  //   prevBoardSlug.current = boardSlug;
  //   prevTags.current = tags;
  //   prevCurrentSchools.current = currentSchools;
  //   prevTriggerRefresh.current = triggerRefresh;
  // }, [
  //   boardSlug,
  //   tags,
  //   currentSchools,
  //   triggerRefresh,
  //   boards,
  //   // currentSchoolsRef,
  //   indexRef,
  // ]);

  useEffect(() => {
    if (tags.length > 0 || currentTags.length > 0) setTags(currentTags);
  }, [currentTags]);

  const getThreads = async (
    boardId: string | "",
    // index: number,
    // threadCount: number,
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

    // const apiPath = boardId
    //   ? `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}&board_id=${boardId}`
    //   : `/forum?uid=${userId}&index=${index}&num=${threadCount}&school=${school}&tags=${tags}`;

    let apiPath = `/forum?uid=${userId}&school=${school}&tags=${tags}`;

    if (boardId) {
      apiPath += `&board_id=${boardId}`;
    }
    if (lastEvaluatedKey) {
      apiPath += `&last_evaluated_key=${encodeURIComponent(
        JSON.stringify(lastEvaluatedKey)
      )}`;
    }

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

        const newLastEvaluatedKey = res.data.message;
        setLastEvaluatedKey(newLastEvaluatedKey);

        if (!newLastEvaluatedKey) {
          setHasMoreItems(false);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
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
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
