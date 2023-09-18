import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { SendIcon } from "./icons/SendIcon";
import { useTranslation } from "react-i18next";
import CommentType from "@app/types/comment";
import ThreadType from "@app/types/thread";

interface CommentFormProps {
  onNewComment: (newComment: CommentType) => void;
  thread: ThreadType;
  setThread: React.Dispatch<React.SetStateAction<ThreadType>>;
}

const CommentForm: React.FC<CommentFormProps> = ({
  onNewComment,
  thread,
  setThread,
}) => {
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const { boardSlug, threadUuid } = useParams();
  const { t } = useTranslation();

  const handleFocusForm = async () => {
    if (userToken?.length <= 0) {
      const idToken = await getIdToken();
      if (idToken?.length > 0) {
        setUserToken(idToken);
      } else {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        setSignInModalOpen(true);
      }
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (comment.length <= 0 || comment.length > 200) return;

    let idToken = userToken;
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }

    // Wrap the API call with a try-catch block
    try {
      const response = await API.post(
        "wasedatime-dev",
        `/forum-comment/${threadUuid}`,
        {
          body: { data: { body: comment } },
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );

      const newComment: CommentType = response.data;
      onNewComment(newComment);
      setComment("");

      const action = "update_incr";
      const patchCount = await API.patch(
        "wasedatime-dev",
        `/forum/${boardSlug}/${threadUuid}`,
        {
          body: {
            data: {
              tag_id: "NA",
              group_id: boardSlug,
              title: threadUuid,
              body: "NA",
            },
            action,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );

      console.log(patchCount);

      if (patchCount.success === true) {
        console.log("patch success!");
        setThread((prevThread) => {
          return {
            ...prevThread,
            comment_count: prevThread.comment_count
              ? prevThread.comment_count + 1
              : 1,
          };
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
    }
  };

  return (
    <div className="flex justify-between">
      <input
        className="text-2xl text-light-text3 dark:text-dark-text1 w-full focus:text-light-text1 focus:ring border-2 mt-4 mb-2 rounded-lg px-4 py-2 standard-style"
        placeholder="Write your comment here (no more than 200 character)"
        value={comment}
        onChange={handleTextChange}
        onFocus={handleFocusForm}
        onSubmit={handleSubmit}
        required
      />
      <span
        className="mt-4 mb-2 p-2 cursor-pointer text-orange-400"
        onClick={handleSubmit}
      >
        <SendIcon />
      </span>
      {isSignInModalOpen && (
        <SignInModal
          isModalOpen={isSignInModalOpen}
          closeModal={() => setSignInModalOpen(false)}
          t={t}
        />
      )}
    </div>
  );
};

export default CommentForm;
