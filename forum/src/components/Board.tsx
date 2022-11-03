import React from "react";
import { useParams } from "react-router-dom";
import ThreadBlock from "./ThreadBlock";

const Board = () => {
  const { boardId } = useParams();

  const threads: any[] = [
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: boardId,
      userId: 'userid123',
      // threadId: threadId,
      threadTitle: 'Hello world',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: boardId,
      userId: 'userid123',
      // threadId: threadId,
      threadTitle: 'Hello world',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: boardId,
      userId: 'userid123',
      // threadId: threadId,
      threadTitle: 'Hello world',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    }
  ];

  return (
    <div className="flex flex-row w-full">
      <div className="w-64 text-center">
        <h1>Home ---- Group</h1>
        <h1 className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2">Select the School</h1>
        <h1>Undergrad, Grad</h1>
        <div className="border px-4 py-2 rounded-xl">
          <h1>Spring Semester</h1>
        </div>
        <h1>Languages</h1>
        <div className="border px-4 py-2 rounded-xl">
          <h1>English</h1>
        </div>
      </div>
      
      <div className="w-full">
        {
          threads.map(thread => <ThreadBlock isPreview={true} thread={thread} />)
        }
      </div>
    </div>
  )
}

export default Board;
