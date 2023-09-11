import React from "react";
import Block from "./Block";
import { useState } from "react";
import Comment from "@app/types/comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfirmModal } from "@app/components/form/ConfirmModal";
import API from "@aws-amplify/api";
import { getIdToken } from "wasedatime-ui";

type Props = {
  comment: Comment;
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
      <div className="border-2 rounded-xl px-4 py-2 text-light-text2 mt-4">
        <div className="flex justify-between">
          <h2 className="text-xs my-auto">{comment.created_at}</h2>
          {comment.mod === true && (
            <div>
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
        <p className="text-sm">{comment.body}</p>
      </div>
    </Block>
  );
};

export default Comment;
