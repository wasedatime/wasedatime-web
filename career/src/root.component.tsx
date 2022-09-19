import React from "react";

interface RootProps {
  name?: string;
}

const Root = ({ name }: RootProps) => {
  return (
    <div>
      <h1>{name} is mounted!</h1>
      <p>This 'career' app is deprecated. You can copy this app for starting a new big feature in WasedaTime!</p>
    </div>
  );
};

export default Root;
