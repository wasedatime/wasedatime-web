import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import localForage from "localforage";
import { currentGroupsState, currentTagsState } from "@app/recoil/atoms";
import { filterThreadsByTags, filterThreadsByGroups } from "@app/utils/filter";
import { API } from "@aws-amplify/api";
import Thread from "@app/types/thread";

const Board = () => {
  const { boardSlug } = useParams();

  const currentTags = useRecoilValue(currentTagsState);
  const currentGroups = useRecoilValue(currentGroupsState);

  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.slug || "academic"
  );

  const [boardThreads, setBoardThreads] = useState([]);
  const [filteredThreads, setFilteredThreads] = useState<Thread[]>([]);

  const boardStorage = localForage.createInstance({
    name: "BoardData",
  });

  const uid = "uid";

  // fetching the board data
  useEffect(() => {
    var currentBoardId =
      boards.find((board) => board.slug === boardSlug)?.slug || "academic";
    setBoardId(currentBoardId);

    API.get("wasedatime-dev", `/forum/${currentBoardId}?uid=${uid}`, {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    })
      .then((res) => {
        console.log(res.data.data);
        var threads = res.data.data.filter(
          (thread: Thread) => thread.board_id === currentBoardId
        );

        threads = filterThreadsByTags(threads, currentTags);
        threads = filterThreadsByGroups(threads, currentGroups);
        setFilteredThreads(threads);
        setBoardThreads(threads);

        boardStorage.setItem(currentBoardId, threads);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [boardSlug]);

  // when currentTags change, filter the threads
  useEffect(() => {
    var threads = filterThreadsByTags(boardThreads, currentTags);
    setFilteredThreads(threads);
  }, [currentTags, boardThreads]);

  // when currentGroups change, filter the threads
  useEffect(() => {
    var threads = filterThreadsByGroups(boardThreads, currentGroups);
    setFilteredThreads(threads);
  }, [currentGroups, boardThreads]);

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      {filteredThreads.map((thread, i) => (
        <ThreadBlock key={i} isPreview={true} thread={thread} />
      ))}
    </div>
  );
};

export default Board;
