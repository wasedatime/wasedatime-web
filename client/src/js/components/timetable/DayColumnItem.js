import React from 'react';
import styled from 'styled-components';

const StyledDayColumnItem = styled('li')`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`

const DayItem = styled('div')`
  flex: 0 0 2rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`

const DayRowItem = styled('div')`
  flex: 1 0 auto;
  border: solid 1px #ccc;
  border-right: none;
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 50%, #eee 50%);
  background-size: 100% calc(100%/3.5);
`

const DayColumnItem = ({day, courses}) => {
  console.log(courses);
  return (
    <StyledDayColumnItem>
      <DayItem>
        <span>{day}</span>
      </DayItem>
      <DayRowItem>

      </DayRowItem>
    </StyledDayColumnItem>
  )
}

export default DayColumnItem;
