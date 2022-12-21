import React from "react";
import BlockAction from "./BlockAction";

type Props = {
  children: JSX.Element;
  actions: {
    icon: string;
    title: string;
    onClick: () => void;
  }[];
};

const Block = ({ children, actions }: Props) => {
  return (
    <div>
      {children}
      <div>
        {actions.map((action, i) => (
          <BlockAction key={i} action={action} />
        ))}
      </div>
    </div>
  );
};

export default Block;
