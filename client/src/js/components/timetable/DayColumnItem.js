import React from 'react';
import styled from 'styled-components';

import CourseRowList from './CourseRowList';

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
  flex: 1 0 50rem;
  border: solid 1px #ccc;
  border-right: none;
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 50%, #eee 50%);
  background-size: 100% calc(100%/3.5);
  position: relative;
  min-width: 6rem;
`

const DayColumnItem = ({day, courses}) => {
  return (
    <StyledDayColumnItem>
      <DayItem>
        <span>{day}</span>
      </DayItem>
      <CourseRowList courses={courses} />
    </StyledDayColumnItem>
  )
}

export default DayColumnItem;
