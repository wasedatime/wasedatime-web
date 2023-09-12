import React from "react"

import { Colors } from "wasedatime-ui"
import styled from "styled-components"

import { ThemeContext } from "@app/utils/theme-context"

interface Props {
  reviewLang: string
  switchReviewLang: (lng: string) => void
  isInHeading: boolean
}

type ReviewLangSwitchItem = {
  label: string
  name: string
}

type ReviewLangSwitchProps = {
  active: boolean
  isInHeading: boolean
  $isDark: boolean
}

const ReviewLangSwitch = styled.button<ReviewLangSwitchProps>`
  font-size: 0.6em;
  border: none;
  padding: 2px 10px;
  background-color: ${(props) =>
    props.$isDark ? Colors.dark.text3 : Colors.light.text3};
  color: ${(props) => (props.$isDark ? Colors.dark.text1 : "#fff")};
  ${(props) =>
    props.active &&
    `
    background-color: ${props.$isDark ? Colors.dark.main : Colors.light.main};
    color: ${props.$isDark ? Colors.dark.text1 : "#fff"};
  `};
  ${(props) => props.isInHeading && "line-height: 20px;"};

  &:hover {
    outline: none;
    background-color: ${(props) =>
      props.$isDark ? Colors.dark.main : Colors.light.main};
    color: ${(props) => (props.$isDark ? Colors.dark.text1 : "#fff")};
  }

  &:focus {
    outline: none;
  }
`

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
  },
]

const ReviewLangSwitches = ({
  reviewLang,
  switchReviewLang,
  isInHeading,
}: Props) => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <span>
      {reviewLangSwitchItems.map((item) => (
        <ReviewLangSwitch
          active={reviewLang === item.label}
          onClick={() => switchReviewLang(item.label)}
          isInHeading={isInHeading}
          $isDark={theme === "dark"}
          key={item.name}
        >
          {item.name}
        </ReviewLangSwitch>
      ))}
    </span>
  )
}

export default ReviewLangSwitches
