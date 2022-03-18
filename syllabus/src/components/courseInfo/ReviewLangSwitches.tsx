import React from "react";
import styled from "styled-components";
import colors from "@bit/wasedatime.core.theme.colors";
import { ThemeContext } from "@app/utils/theme-context";

interface Props {
  reviewLang: string;
  switchReviewLang: (lng: string) => void;
  isInHeading: boolean;
}

type ReviewLangSwitchItem = {
  label: string;
  name: string;
}

type ReviewLangSwitchProps = {
  active: boolean;
  isInHeading: boolean;
  isDark: boolean;
};

const ReviewLangSwitch = styled.button<ReviewLangSwitchProps>`
  font-size: 0.6em;
  border: none;
  padding: 2px 10px;
  background-color: ${props => props.isDark ? colors.dark.text3 : colors.light.text3};
  color: ${props => props.isDark ? colors.dark.text1 : "#fff"};
  ${(props) =>
    props.active && `
    background-color: ${props.isDark ? colors.dark.lighter : colors.light.lighter};
    color: ${props.isDark ? colors.dark.text1 : "#fff"};
  `};
  ${(props) => props.isInHeading && "line-height: 20px;"};

  &:hover {
    outline: none;
    background-color: ${props => props.isDark ? colors.dark.lighter : colors.light.lighter};
    color: ${props => props.isDark ? colors.dark.text1 : "#fff"};
  }

  &:focus {
    outline: none;
  }
`;

const reviewLangSwitchItems: ReviewLangSwitchItem[] = [
  {
    label: "en",
    name: "English",
  },
  {
    label: "ja",
    name: "日本語",
  },
  {
    label: "zh-TW",
    name: "繁中",
  },
  {
    label: "zh-CN",
    name: "简中",
  },
  {
    label: "ko",
    name: "한국",
  }
]

const ReviewLangSwitches = ({
  reviewLang,
  switchReviewLang,
  isInHeading,
}: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <span>
      {
        reviewLangSwitchItems.map(item => (
          <ReviewLangSwitch
            active={reviewLang === item.label}
            onClick={() => switchReviewLang(item.label)}
            isInHeading={isInHeading}
            isDark={theme === "dark"}
          >
            {item.name}
          </ReviewLangSwitch>
        ))
      }
    </span>
  );
}

export default ReviewLangSwitches;
