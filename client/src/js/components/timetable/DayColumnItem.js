import React from 'react';
import styled from 'styled-components';

import CourseRowList from './CourseRowList';

const StyledDayColumnItem = styled('li')`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`

const DayItem = styled('div')`
  display: flex;
  flex: 0 0 3rem;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
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
