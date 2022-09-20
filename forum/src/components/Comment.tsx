import React from "react";
import Block from "./Block";

type Props = {
  comment: any;
}

const Comment = ({ comment }: Props) => {
  const actions = [
    {
      icon: "",
      title: "Reply",
      onClick: () => {}
    }
  ];

  return (
    <Block actions={actions}>
      <p>
        This is a Comment
      </p>
    </Block>
  )
}

export default Comment;
