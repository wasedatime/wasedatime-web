import React from "react";
import Block from "./Block";

type Props = {
  comment: any;
};

const Comment = ({ comment }: Props) => {
  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {},
    },
  ];

  return (
    <Block actions={actions}>
      <div className="border-2 rounded-xl px-4 py-2 text-light-text2 mt-4">
        <div className="flex justify-between">
          <h1>{comment.commentAuthor}</h1>
          <h2 className="text-xs my-auto">{comment.createdAt}</h2>
        </div>
        <p className="text-sm">{comment.commentBody}</p>
      </div>
    </Block>
  );
};

export default Comment;
