import React from "react";
import { Link, useParams } from "react-router-dom";
import ThreadBlock from "./ThreadBlock";



const Board = () => {


  const { boardId } = useParams();

  const threads: any[] = [
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: 'Free Chat',
      userId: 'userid123',
      threadId: '12345',
      threadTitle: 'Hello world',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: 'Courses',
      userId: 'userid123',
      threadId: '12346',
      threadTitle: 'Hello world (Courses)',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    },
    {
      // univId: '12345' -> Future feature for different universities (According to Trello)
      boardId: 'Research',
      userId: 'userid123',
      threadId: '12346',
      threadTitle: 'Hello world (Research)',
      threadAuthor: 'Waseda Taro',
      threadBody:'This is the body located in the Board component.',
      createdAt: 'October 1, 2022',
      updatedAt: 'October 2, 2022',
    }
  ];

  return (
    <div className="max-w-3/5 w-3/5 mx-auto">
      {
        threads.map(thread => <ThreadBlock isPreview={true} thread={thread}/>)
      }
    </div>
  );
};

export default Board;
