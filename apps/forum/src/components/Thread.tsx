import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";
import threads from "@app/constants/dummy/threads.json";
import dummyComments from "@app/constants/dummy/comments.json";

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
