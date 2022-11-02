import React from "react";

type Props = {
  action: {
    icon: string;
    title: string;
    onClick: () => void;
  };
}

const BlockAction = ({ action }: Props) => {
  return (
    <div onClick={action.onClick}>
      {action.title} 
      {/* This is in Block Action */}
    </div>
  )
}

export default BlockAction;
