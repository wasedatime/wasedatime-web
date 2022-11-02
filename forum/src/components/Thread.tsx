import React from "react";
import { useParams } from "react-router-dom";
import Block from "./Block";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";

const Thread = () => {
  const { threadId } = useParams();

  const thread: any = {
  univId: '12345',
  boardId: 'postid123',
  userId: 'userid123',
  threadId: threadId,
threadAuthor: 'Waseda Taro',
  threadTitle: 'Hello world',
  threadBody:'This is the dummy post data in WasedaTime Forum. Please leave your comment.',
  createdAt: 'October 1, 2022',
  updatedAt: 'October 2, 2022',
  };

  const comments: any[] = [
    {
    threadId: threadId,
    commentId: '',
    commentBody: 'This is the first comment in WasedaTime Forum. Leave your comment here freely!',
    commentAuthor: 'Waseda Taro',
    userId: 'userid123',
    createdAt: 'October 1, 2022',
    updatedAt: 'October 2, 2022',
    },
    {
      threadId: threadId,
      commentId: '',
      commentBody: 'This is the second comment in WasedaTime Forum. Leave your comment here freely!',
      commentAuthor: 'Waseda Taro',
      userId: 'userid123',
      createdAt: 'October 3, 2022',
      updatedAt: 'October 4, 2022',
      },

  ];

  return (
    <div className='border-2 mt-12 mx-16 rounded-xl shadow-lg pb-6 h-fit px-4'>
      <ThreadBlock isPreview={false} thread={thread} />
      <CommentForm />
      {
        comments.map(comment => <Comment comment={comment} />)
      }
    </div>
  )
}

export default Thread;
