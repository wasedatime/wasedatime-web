import React from 'react';
import styled from 'styled-components';

const StyledDayColumnItem = styled('li')`
  flex: 1 0 0;
  border-right: solid 1px #222222;
  ${'' /* border-radius: 3px; */}
`
const DayColumnItem = (props) => {
  return (
    <StyledDayColumnItem>
      <div>
        <span>{props.day}</span>
      </div>
    </StyledDayColumnItem>
  )
}

export default DayColumnItem;
