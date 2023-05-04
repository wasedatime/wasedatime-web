import React, { ReactNode } from "react"

import { Colors } from "wasedatime-ui"
import styled from "styled-components"

interface NavItemBlockProps {
  expanded: boolean
  isCurrentPath: boolean
}

interface NavItemTextProps {
  expanded: boolean
}

interface IconTextGroupProps {
  icon: ReactNode
  text?: string
  iconPath?: string
  expanded?: boolean
  currentPath?: string
}

const NavItemBlock = styled.div<NavItemBlockProps>`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.isCurrentPath ? Colors.light.main : "#fff")};
  font-size: 18px;
  font-weight: 100;
  padding: 1vh 0px;
  width: 100%;
  text-align: center;
  padding-left: ${(props) => (props.expanded ? "40px" : "12px")};
  svg {
    width: 40px !important;
    height: 40px;
    text-align: center;
  }
  transition: padding-left 0.5s;
  &:hover {
    cursor: pointer;
  }
`

const NavItemText = styled.span<NavItemTextProps>`
  overflow: hidden;
  margin: 0px;
  margin-left: 13px;
  text-align: left;
  /* color: #fff; */
  line-height: 2;
  height: 40px;
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  width: ${(props) => (props.expanded ? "120px" : "0px")};
  transition: opacity 0.3s ease-out, width 0.5s;
`

export const IconTextGroup = ({
  icon,
  text,
  iconPath,
  expanded,
  currentPath,
}: IconTextGroupProps) => {
  return (
    <NavItemBlock
      className="group text-light-text2 dark:text-dark-text2"
      expanded={expanded}
      isCurrentPath={iconPath === currentPath}
    >
      <div className="text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1">
        {icon}
      </div>
      {text && (
        <NavItemText
          className="text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1"
          expanded={expanded}
        >
          {text}
        </NavItemText>
      )}
    </NavItemBlock>
  )
}
