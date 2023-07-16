import React, { ChangeEvent, useState } from "react";
import API from "@aws-amplify/api";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { SendIcon } from "./icons/SendIcon";

const CommentForm = () => {
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const { threadUuid } = useParams();

  // console.log(threadUuid);

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
      await API.post("wasedatime-dev", `/forum-comment/${threadUuid}`, {
        body: { data: { body: comment } },
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });
      console.log("Successfully posted comment");
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setComment("");
  };

  return (
    <div className="flex justify-between">
      <input
        className="text-sm text-light-text3 w-full focus:text-light-text1 focus:ring border-2 mt-4 mb-2 rounded-lg px-4 py-2"
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
        />
      )}
    </div>
  );
};

export default CommentForm;
