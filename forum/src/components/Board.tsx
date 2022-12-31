import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/boards.json";
import dummyThreads from "@app/constants/dummy/threads.json";
import { currentGroupsState, currentTagsState } from "@app/recoil/atoms";
import { filterThreadsByTags, filterThreadsByGroups } from "@app/utils/filter";

const Board = () => {
  const { boardSlug } = useParams();

  const currentTags = useRecoilValue(currentTagsState);
  const currentGroups = useRecoilValue(currentGroupsState);

  const [boardId, setBoardId] = useState(
    boards.find((board) => board.slug === boardSlug)?.id || 0
  );
  const [boardThreads, setBoardThreads] = useState(
    dummyThreads.filter((thread) => thread.boardId === boardId)
  );
  const [filteredThreads, setFilteredThreads] = useState(
    filterThreadsByTags(filterThreadsByGroups(boardThreads, currentGroups), currentTags)
  );

  useEffect(() => {
    var currentBoardId = boards.find((board) => board.slug === boardSlug)?.id || 0;
    setBoardId(currentBoardId);

    var threads = dummyThreads.filter((thread) => thread.boardId === boardId)
    setBoardThreads(threads);

    threads = filterThreadsByTags(threads, currentTags);
    threads = filterThreadsByGroups(threads, currentGroups);
    setFilteredThreads(threads);
  }, [boardSlug]);

  useEffect(() => {
    var threads = dummyThreads.filter((thread) => thread.boardId === boardId)
    setBoardThreads(threads);

    threads = filterThreadsByTags(threads, currentTags);
    threads = filterThreadsByGroups(threads, currentGroups);
    setFilteredThreads(threads);
  }, [boardId])

  useEffect(() => {
    var threads = filterThreadsByTags(boardThreads, currentTags);
    setFilteredThreads(threads);
  }, [currentTags]);

  useEffect(() => {
    var threads = filterThreadsByGroups(boardThreads, currentGroups);
    setFilteredThreads(threads);
  }, [currentGroups]);

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      {filteredThreads
        .map((thread, i) => (
          <ThreadBlock key={i} isPreview={true} thread={thread} />
        ))}
    </div>
  );
};

export default Board;
