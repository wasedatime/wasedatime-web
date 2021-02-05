import React from "react";
import styled from "styled-components";

const StyledListItem = styled("li")`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 3rem;
  border-right: solid 1px #ccc;
`;
const StyledSpan = styled("span")`
  font-size: 2.2rem;
  font-weight: 600;
`;

const StyledTime = styled("time")`
  font-size: 1.2rem;
  color: #333;
`;

interface Props {
  period: { s: string | number; p: string | number; e: string | number };
}

const TimeRowItem = ({ period }: Props) => {
  return (
    <StyledListItem>
      <StyledTime>{period.s}</StyledTime>
      <StyledSpan>{period.p}</StyledSpan>
      <StyledTime>{period.e}</StyledTime>
    </StyledListItem>
  );
};

export default TimeRowItem;
