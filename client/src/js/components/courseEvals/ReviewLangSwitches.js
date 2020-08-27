import React from "react";
import styled from "styled-components";

const ReviewLangSwitch = styled("button")`
  font-size: 0.6em;
  border: none;
  padding: 5px 10px;
  background-color: #ccc;
  height: 2em;
  vertical-align: 0.3em;
  ${(props) => props.active && "border-bottom: 2px solid #fff"};

  &:hover {
    outline: none;
    background-color: #ddd;
  }

  &:focus {
    outline: none;
  }
`;

const ReviewLangSwitches = ({ reviewLang, switchReviewLang, t }) => (
  <span>
    <ReviewLangSwitch
      active={reviewLang === "jp"}
      onClick={() => switchReviewLang("jp")}
    >
      日本語
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "en"}
      onClick={() => switchReviewLang("en")}
    >
      English
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "zh"}
      onClick={() => switchReviewLang("zh")}
    >
      中文
    </ReviewLangSwitch>
  </span>
);

export default ReviewLangSwitches;
