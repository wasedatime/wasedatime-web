import React from "react";
import { navigateToUrl } from "single-spa";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  to: string;
  children: React.ReactNode;
  customOnClick?: () => void;
  style?: React.CSSProperties;
}

const LinkOutsideRouter = ({ to, children, customOnClick, style = {}, ...restProps }: Props) => {
  const handleOnClick = () => {
    customOnClick && customOnClick();
    navigateToUrl(to);
  }
  return (
    <span onClick={handleOnClick} style={{ cursor: "pointer", ...style }} {...restProps}>
      {children}
    </span>
  );
}

export default LinkOutsideRouter;