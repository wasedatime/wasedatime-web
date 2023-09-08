import React, { useEffect, useState } from "react";
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

const threadCountPerPage = 3; // 10

const Board = () => {
  const { boardSlug } = useParams();

  const currentTags = useRecoilValue(currentTagsState);
  const currentSchools = useRecoilValue(currentSchoolState);

  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || "academic"
  );

  const [boardThreads, setBoardThreads] = useState<Thread[]>([]);
  const [filteredThreads, setFilteredThreads] = useState<Thread[]>([]);
  const [userToken, setUserToken] = useState("");
  const [page, setPage] = useState(1);

  const boardStorage = localForage.createInstance({
    name: "BoardData",
  });

  // fetching the board data
  useEffect(() => {
    var currentBoardId =
      boards.find((board) => board.slug === boardSlug)?.slug || "academic";
    setBoardId(currentBoardId);
    getThreads(currentBoardId);
  }, [boardSlug]);

  const getThreads = async (boardId: string) => {
    let userId = userToken;
    if (userId.length == 0) {
      const userAttr = await getUserAttr();
      if (userAttr) {
        userId = userAttr.id;
        setUserToken(userId);
      }
    }

    API.get("wasedatime-dev", `/forum/${boardId}?uid=${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    })
      .then((res) => {
        var threads = res.data.data.filter(
          (thread: Thread) => thread.board_id === boardId
        );
        setBoardThreads(threads);

        var filteredThreads = filterThreadsByTags(threads, currentTags);
        filteredThreads = filterThreadsBySchool(
          filteredThreads,
          currentSchools
        );
        if (filteredThreads.length > threadCountPerPage * page)
          filteredThreads = filteredThreads.slice(0, threadCountPerPage * page);
        setFilteredThreads(filteredThreads);

        boardStorage.setItem(boardId, threads);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // when currentTags or currentSchools change, filter the threads
  useEffect(() => {
    var filteredThreads = filterThreadsByTags(boardThreads, currentTags);
    filteredThreads = filterThreadsBySchool(filteredThreads, currentSchools);
    if (filteredThreads.length > threadCountPerPage * page)
      filteredThreads = filteredThreads.slice(0, threadCountPerPage * page);
    setFilteredThreads(filteredThreads);
  }, [currentTags, currentSchools]);

  const displayMoreThread = () => {
    setTimeout(() => {
      if (boardThreads.length < threadCountPerPage * page) return;
      const nextPage = page + 1;
      setPage(nextPage);
      var threads = filterThreadsByTags(boardThreads, currentTags);
      threads = filterThreadsBySchool(threads, currentSchools);
      threads = threads.slice(0, threadCountPerPage * nextPage);
      setFilteredThreads(threads);
    }, 1000);
  };

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      <div className="overflow-auto h-[calc(100%-44px)]" id="scrollableDiv">
        <InfiniteScroll
          dataLength={filteredThreads.length}
          next={displayMoreThread}
          hasMore={true}
          scrollableTarget="scrollableDiv"
          loader={<h4>Loading...</h4>}
          style={{ overflowY: "hidden" }}
        >
          {/* {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))} */}
          {filteredThreads.map((thread, i) => (
            <ThreadBlock key={i} isPreview={true} thread={thread} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Board;
