import React from "react";
import Block from "./Block";

type Props = {
  isPreview: boolean;
  thread: any;
}

const ThreadBlock = ({ isPreview, thread }: Props) => {
  const actions = [
    {
      icon: "",
      title: "Comment",
      onClick: () => {}
    }
  ];

  return (
    <Block actions={actions}>
      <p>
        This is a thread
      </p>
    </Block>
  )
}

export default ThreadBlock;
