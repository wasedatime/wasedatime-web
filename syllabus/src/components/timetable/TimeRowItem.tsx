import React from "react";

import styled from "styled-components";

const StyledListItem = styled("li")`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 2em;
  border-right-width: 1px;
  border-right-style: solid;
`;

const StyledSpan = styled("span")`
  font-size: 1.5em;
  font-weight: 600;
`;

const StyledTime = styled("time")`
  font-size: 0.8em;
`;

type Props = {
  period: {
    s: string | number;
    p: string | number;
    e: string | number;
  };
};

const TimeRowItem = ({ period }: Props) => {
  return (
    <StyledListItem className="text-light-text2 border-r-gray-100 dark:text-dark-text2 dark:border-r-dark-text3">
      <StyledTime>{period.s}</StyledTime>
      <StyledSpan>{period.p}</StyledSpan>
      <StyledTime>{period.e}</StyledTime>
    </StyledListItem>
  );
};

export default TimeRowItem;
