import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";
import boards from "@app/constants/dummy/boards.json";
import threads from "@app/constants/dummy/threads.json";

const Board = () => {
  const { boardSlug } = useParams();
  const [boardId, setBoardId] = useState(0);

  useEffect(() => {
    setBoardId(boards.find((board) => board.slug === boardSlug)?.id || 0);
  }, [boardSlug]);

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      {threads
        .filter((thread) => thread.boardId === boardId)
        .map((thread, i) => (
          <ThreadBlock key={i} isPreview={true} thread={thread} />
        ))}
    </div>
  );
};

export default Board;
