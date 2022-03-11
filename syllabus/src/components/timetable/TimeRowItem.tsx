import React from "react";

import styled from "styled-components";
import { ThemeContext } from "@app/utils/theme-context";

type StyledListItemProps = {
  theme: string;
}

const StyledListItem = styled("li")<StyledListItemProps>`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 2em;
  border-right: solid 1px ${props => props.theme === "light" ? "#ccc" : "#585858"};
`;
const StyledSpan = styled("span")`
  font-size: 1.5em;
  font-weight: 600;
`;

const StyledTime = styled("time")`
  font-size: 0.8em;
`;

interface Props {
  period: { s: string | number; p: string | number; e: string | number };
}

const TimeRowItem = ({ period }: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  return (
    <StyledListItem className="text-light-text1 dark:text-dark-text2" theme={theme}>
      <StyledTime>{period.s}</StyledTime>
      <StyledSpan>{period.p}</StyledSpan>
      <StyledTime>{period.e}</StyledTime>
    </StyledListItem>
  );
};

export default TimeRowItem;
