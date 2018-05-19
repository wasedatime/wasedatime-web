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
