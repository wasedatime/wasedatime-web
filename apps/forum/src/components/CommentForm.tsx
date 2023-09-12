import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { SendIcon } from "./icons/SendIcon";
import { useTranslation } from "react-i18next";
import CommentType from "@app/types/comment";

interface CommentFormProps {
  onNewComment: (newComment: CommentType) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onNewComment }) => {
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const { threadUuid } = useParams();
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
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex justify-between">
      <input
        className="text-sm text-light-text3 w-full focus:text-light-text1 focus:ring border-2 mt-4 mb-2 rounded-lg px-4 py-2 standard-style"
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
