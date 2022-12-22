import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";
import threads from "@app/constants/dummy/threads.json";
import dummyComments from "@app/constants/dummy/comments.json";

// TODO: add a 'back' button to navigate to the last page (board page) while remaining the page number
// Consider (1) using global state or (2) add a query on the route (sth like this: http://localhost:9000/forum/academic/1?page=2)

const Thread = () => {
  const { threadUuid } = useParams();
  const [thread, setThread] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    var currentThread = threads.find((t) => t.uuid === threadUuid);
    var filteredComments = dummyComments.filter(
      (c) => c.threadId === threadUuid
    );
    setThread(currentThread);
    setComments(filteredComments);
  }, [threadUuid]);

  return (
    <div className="border-2 mt-12 mx-16 rounded-xl shadow-lg pb-6 h-fit px-4">
      <ThreadBlock isPreview={false} thread={thread} />
      <CommentForm />
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Thread;
