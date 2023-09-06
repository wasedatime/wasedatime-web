import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";
import { API } from "@aws-amplify/api";
import { getUserAttr, getIdToken } from "wasedatime-ui";

const Thread = () => {
  const [userToken, setUserToken] = useState("");
  const { boardSlug, threadUuid } = useParams();
  const [thread, setThread] = useState<any>({});
  const [comments, setComments] = useState<any[]>([]);

  const fetchIdToken = async () => {
    if (userToken?.length <= 0) {
      const idToken = await getIdToken();
      const userAttr = await getUserAttr();
      if (userAttr?.id > 0) {
        console.log("could not find user Id");
      } else {
        let userId = userAttr.id;
        setUserToken(userId);
        fetchData(userId);
      }
    }
  };

  const fetchData = async (token: string) => {
    try {
      const threadRes = await API.get(
        "wasedatime-dev",
        `/forum/${boardSlug}/${threadUuid}?uid=${token}`,
        {
          headers: {
            "x-api-key": "0PaO2fHuJR9jlLLdXEDOyUgFXthoEXv8Sp0oNsb8",
            "Content-Type": "application/json",
          },
          response: true,
        }
      );

      setThread(threadRes.data.data);
      console.log(threadRes.data.data);

      const commentsRes = await API.get(
        "wasedatime-dev",
        `/forum-comment/${threadUuid}?uid=${token}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          response: true,
        }
      );

      setComments(commentsRes.data.data);

      console.log(commentsRes.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchIdToken();
  }, [threadUuid]);

  return (
    <div className="border-2 mt-12 mx-16 rounded-xl shadow-lg pb-6 h-fit px-4">
      {/* <CreateThread /> */}
      <ThreadBlock isPreview={false} thread={thread} />
      <CommentForm />
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Thread;
