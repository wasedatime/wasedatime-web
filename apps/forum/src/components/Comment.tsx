import React from "react";
import Block from "./Block";
import { useState } from "react";
import CommentType from "@app/types/comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfirmModal } from "@app/components/form/ConfirmModal";
import API from "@aws-amplify/api";
import { getIdToken } from "wasedatime-ui";

type Props = {
  comment: CommentType;
};

const convertUrlsToLinks = (text: string) => {
  if (!text) return null;

  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);

  return (
    <div>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part && (
            <span className="text-light-text1 dark:text-dark-text1 text-2xl p-2">
              {part}
            </span>
          )}
          {matches && matches[index] && (
            <a
              href={matches[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl p-2"
            >
              {matches[index]}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Comment = ({ comment }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {},
    },
  ];

  const confirmDeleteThread = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteModalOpen(true);
  };

  const deleteComment = async () => {
    try {
      const idToken = await getIdToken();
      if (!idToken || idToken.length === 0) {
        throw new Error("Invalid ID token");
      }
      await API.del(
        "wasedatime-dev",
        `/forum-comment/${comment.thread_id}?ts=${comment.created_at}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Thread not deleted successfully!:", error);
    }

    window.location.reload();
  };

  return (
    <Block actions={actions}>
      <div className="border-2 rounded-xl px-4 py-2 text-light-text2 mt-4 standard-style flex flex-row justify-between items-center">
        <div>
          <p className="text-2xl p-2">{convertUrlsToLinks(comment.body)}</p>
          <h2 className="text-xs my-auto"></h2>
        </div>
        {comment.mod === true && (
          <div className="justify-end">
            <button onClick={confirmDeleteThread}>
              <DeleteIcon fontSize="large" color="error" />
            </button>
            {deleteModalOpen && (
              <ConfirmModal
                questionText="Are you sure to delete this comment?"
                confirmText="Yes, delete it"
                cancelText="No, keep it"
                confirmAction={deleteComment}
                cancelAction={() => setDeleteModalOpen(false)}
              />
            )}
          </div>
        )}
      </div>
    </Block>
  );
};

export default Comment;
