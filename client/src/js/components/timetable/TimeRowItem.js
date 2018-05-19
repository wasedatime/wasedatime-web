import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled('li')`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`
const StyledSpan = styled('span')`
  font-size: 2.2rem;
  font-weight: 600;
`

const TimeRowItem = ({period}) => {
  return (
      <StyledListItem>
        <time>{period.s}</time>
        <StyledSpan>{period.p}</StyledSpan>
        <time>{period.e}</time>
      </StyledListItem>
  )
}

export default TimeRowItem;
