import React from "react";
import { useParams } from "react-router-dom";
import ThreadBlock from "./ThreadBlock";

const Board = () => {
  const { boardId } = useParams();

  const threads: any[] = [
    {}
  ];

  return (
    <div>
      {
        threads.map(thread => <ThreadBlock isPreview={true} thread={thread} />)
      }
    </div>
  )
}

export default Board;
