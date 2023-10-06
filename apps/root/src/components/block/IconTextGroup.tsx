import React, { ReactNode, useState } from "react"

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
  hoverIcon?: ReactNode
  text?: string
  iconPath?: string
  expanded?: boolean
  currentPath?: string
  tooltip?: string
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
  hoverIcon,
  text,
  iconPath,
  expanded,
  currentPath,
  tooltip,
}: IconTextGroupProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <NavItemBlock
      className="group text-light-text2 dark:text-dark-text2"
      expanded={expanded}
      isCurrentPath={iconPath === currentPath}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className="relative inline-flex items-center">
        {" "}
        {/* This is the wrapper */}
        <div className="text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1">
          {isHover && hoverIcon ? hoverIcon : icon}
        </div>
        {text && (
          <NavItemText
            className="ml-2 text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1" // added ml-2 for spacing
            expanded={expanded}
          >
            {text}
          </NavItemText>
        )}
        {/* Tooltip rendering */}
        {tooltip && expanded && (
          <span className="absolute top-1/2 left-full z-10 ml-2 w-auto -translate-y-1/2 transform whitespace-nowrap rounded bg-light-main px-3 py-2 text-xl text-dark-text1 dark:bg-dark-main">
            {tooltip}
          </span>
        )}
      </div>
    </NavItemBlock>
  )
}
