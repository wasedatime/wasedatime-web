import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import ThreadBlock from "./ThreadBlock";
import { API } from "@aws-amplify/api";
import { getUserAttr, getIdToken } from "wasedatime-ui";
import ThreadType from "@app/types/thread";
import CommentType from "@app/types/comment";

const Thread = () => {
  const [userToken, setUserToken] = useState("");
  const { boardSlug, threadUuid } = useParams();
  const [thread, setThread] = useState<any>({});
  const [comments, setComments] = useState<CommentType[]>([]);

  const fetchData = async () => {
    let userId = userToken;
    if (userId.length === 0) {
      const userAttr = await getUserAttr();
      userId = userAttr ? userAttr.id : "";
      setUserToken(userId);
    }

    // let idToken = "";
    // if (idToken?.length <= 0) {
    //   idToken = await getIdToken();
    //   if (idToken?.length <= 0) return;
    // }

    // Wait for the state to update, then proceed with fetching
    // Fetch Threads
    await API.get(
      "wasedatime-dev",
      `/forum/${boardSlug}/${threadUuid}?uid=${userId}`,
      {
        headers: {
          "x-api-key": "0PaO2fHuJR9jlLLdXEDOyUgFXthoEXv8Sp0oNsb8",
          "Content-Type": "application/json",
        },
        response: true,
      }
    )
      .then((res) => {
        var threadRes = res.data.data;
        setThread(threadRes);
      })
      .catch((e) => {
        console.error(e);
      });
    // Fetch comments
    await API.get(
      "wasedatime-dev",
      `/forum-comment/${threadUuid}?uid=${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        response: true,
      }
    )
      .then((res) => {
        var commentRes = res.data.data;
        setComments(commentRes);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, [threadUuid, boardSlug]);

  const handleNewComment = (newComment: CommentType) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="border-2 w-full md:w-5/6 mx-auto rounded-xl shadow-lg py-6 px-4 standard-style max-w-[390px] sm:max-w-[900px] overflow-y-auto h-fit">
      {/* <CreateThread /> */}

      <ThreadBlock isPreview={false} thread={thread} />
      <CommentForm
        onNewComment={handleNewComment}
        thread={thread}
        setThread={setThread}
      />
      {comments.map((comment, i) => (
        <Comment
          key={i}
          comment={comment}
          thread={thread}
          setComments={setComments}
          setThread={setThread}
        />
      ))}
    </div>
  );
};

export default Thread;
