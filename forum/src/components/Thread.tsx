import React from "react";
import { useParams } from "react-router-dom";
import Block from "./Block";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";

const Thread = () => {
  const { threadId } = useParams();

  const thread: any = {};
  const comments: any[] = [
    {}
  ];

  return (
    <div>
      <ThreadBlock isPreview={false} thread={thread} />
      <CommentForm />
      {
        comments.map(comment => <Comment comment={comment} />)
      }
    </div>
  )
}

export default Thread;
