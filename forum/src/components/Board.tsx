import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import Pagination from "./Pagination";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/dummy/boards.json";
import threads from "@app/constants/dummy/threads.json";

const Board = () => {
  const { boardSlug } = useParams();
  const [boardId, setBoardId] = useState(0);
  const [countFilteredThreads, setCountFilteredThreads] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const numOfThreadsPerPage = 10;


  const indexOfLastThread = currentPage * numOfThreadsPerPage
  const indexOfFirstThread = indexOfLastThread - numOfThreadsPerPage
  const currentThreads = threads.filter((thread) => thread.boardId === boardId).slice(indexOfFirstThread, indexOfLastThread)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    setBoardId(boards.find((board) => board.slug === boardSlug)?.id || 0);
  }, [boardSlug]);

  useEffect(() => {
    setCountFilteredThreads(threads.filter((thread) => thread.boardId === boardId).length)
    setCurrentPage(1)
    console.log('currentThreads', currentThreads)
  }, [boardId])

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      {currentThreads
        .map((thread, i) => (
          <ThreadBlock key={i} isPreview={true} thread={thread} />
        ))}
      <Pagination threadCount={countFilteredThreads} numOfThreadsPerPage={numOfThreadsPerPage} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default Board;
