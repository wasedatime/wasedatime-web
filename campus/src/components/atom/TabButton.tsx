import React from "react";

export interface TabProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selectedValue: string;
  title: string;
}

export const TabButton = ({ selectedValue, title, ...props }: TabProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`tab tab-lg tab-bordered ${
        selectedValue === title && "tab-active"
      }`}
    >
      {title}
    </button>
  );
};
