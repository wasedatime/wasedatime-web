import React from "react";
import styled from "styled-components";

const ReviewLangSwitch = styled("button")`
  font-size: 0.6em;
  border: none;
  padding: 5px 10px;
  background-color: #ddd;
  height: 2em;
  vertical-align: 0.3em;
  ${(props) =>
    props.active && "border-bottom: 2px solid #fff; background-color: #eee;"};

  &:hover {
    outline: none;
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }
`;

const ReviewLangSwitchEng = styled(ReviewLangSwitch)`
  border-top: 2px solid #ddd;
  ${(props) => props.active && "border-top: 2px solid #eee;"};

  &:hover {
    border-top: 2px solid #eee;
  }
`;

const ReviewLangSwitches = ({ reviewLang, switchReviewLang, t }) => (
  <span>
    <ReviewLangSwitchEng
      active={reviewLang === "en"}
      onClick={() => switchReviewLang("en")}
    >
      English
    </ReviewLangSwitchEng>
    <ReviewLangSwitch
      active={reviewLang === "jp"}
      onClick={() => switchReviewLang("jp")}
    >
      日本語
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "zh_TW"}
      onClick={() => switchReviewLang("zh_TW")}
    >
      繁中
    </ReviewLangSwitch>
    <ReviewLangSwitch
      active={reviewLang === "zh_CN"}
      onClick={() => switchReviewLang("zh_CN")}
    >
      简中
    </ReviewLangSwitch>
  </span>
);

export default ReviewLangSwitches;
