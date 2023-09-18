import React from "react";
import Block from "./Block";
import { useState } from "react";
import CommentType from "@app/types/comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfirmModal } from "@app/components/form/ConfirmModal";
import API from "@aws-amplify/api";
import { getIdToken } from "wasedatime-ui";
import ThreadType from "@app/types/thread";

type Props = {
  comment: CommentType;
  thread: ThreadType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
  setThread: React.Dispatch<React.SetStateAction<ThreadType>>;
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

const Comment = ({ comment, thread, setComments, setThread }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {},
    },
  ];

  const removeComment = (commentTS: string) => {
    setComments((prevComments) => {
      return prevComments.filter((comment) => comment.created_at !== commentTS);
    });

    setThread((prevThread) => {
      if (
        prevThread &&
        typeof prevThread.comment_count === "number" &&
        prevThread.comment_count > 0
      ) {
        return {
          ...prevThread,
          comment_count: prevThread.comment_count - 1,
        };
      }
      return prevThread; // No change if comment_count is already 0 or undefined
    });
  };

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
      const res = await API.del(
        "wasedatime-dev",
        `/forum-comment/${comment.thread_id}?ts=${comment.created_at}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );

      console.log(res);

      const action = "update_decr";
      await API.patch(
        "wasedatime-dev",
        `/forum/${thread.board_id}/${thread.thread_id}`,
        {
          body: {
            data: {
              tag_id: "NA",
              group_id: "NA",
              title: "NA",
              body: "NA",
            },
            action,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );
      setDeleteModalOpen(false);
      removeComment(comment.created_at);
    } catch (error) {
      console.error("Comment not deleted successfully!:", error);
    }
  };

  return (
    <Block actions={actions}>
      <div className="border-2 rounded-xl px-4 py-2 text-light-text2 mt-4 standard-style flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl p-2">{convertUrlsToLinks(comment.body)}</h2>
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
