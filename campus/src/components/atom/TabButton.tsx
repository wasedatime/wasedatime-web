import React from "react";

export type TabTypeDaisy = "bordered" | "lifted" | "boxed" | "";
export type TabSizeDaisy = "xs" | "sm" | "lg" | "";

export interface TabProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selectedValue: string;
  title: string;
  tabType?: TabTypeDaisy;
  tabSize?: TabSizeDaisy;
}

export const TabButton = ({
  selectedValue,
  title,
  tabType = "",
  tabSize = "",
  ...props
}: TabProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`tab tab-${tabSize} tab-${tabType} ${
        selectedValue === title && "tab-active"
      }`}
    >
      {title}
    </button>
  );
};
