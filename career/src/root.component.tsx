import React from "react";

interface RootProps {
  name?: string;
}

const Root = ({ name }: RootProps) => {
  return <section>{name} is mounted!</section>;
};

export default Root;
