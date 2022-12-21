import React from "react";
import { Link, useParams } from "react-router-dom";
import CreateThread from "./CreateThread";
import ThreadBlock from "./ThreadBlock";

const Board = () => {
  const { boardId } = useParams();

  const threads: any[] = [
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: "freechat",
      userId: "userid123",
      threadId: "12345",
      threadTitle: "Hello world (Free Chat)",
      threadAuthor: "Waseda Taro",
      threadBody: "This is the body located in the Board component.",
      createdAt: "October 1, 2022",
      updatedAt: "October 2, 2022",
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: "courses",
      userId: "userid123",
      threadId: "12346",
      threadTitle: "Hello world (Courses)",
      threadAuthor: "Waseda Taro",
      threadBody: "This is the body located in the Board component.",
      createdAt: "October 1, 2022",
      updatedAt: "October 2, 2022",
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: "life",
      userId: "userid123",
      threadId: "12346",
      threadTitle: "Hello world (Life)",
      threadAuthor: "Waseda Taro",
      threadBody: "This is the body located in the Board component.",
      createdAt: "October 1, 2022",
      updatedAt: "October 2, 2022",
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: "jobhunting",
      userId: "userid123",
      threadId: "12345",
      threadTitle: "Hello world (Job Hunting)",
      threadAuthor: "Waseda Taro",
      threadBody: "This is the body located in the Board component.",
      createdAt: "October 1, 2022",
      updatedAt: "October 2, 2022",
    },
  ];

  return (
    <div className="max-w-2/5 w-5/6 mx-auto h-full">
      <CreateThread />
      {threads
        .filter((thread) => thread.boardId === boardId)
        .map((thread) => (
          <ThreadBlock isPreview={true} thread={thread} />
        ))}
    </div>
  );
};

export default Board;
