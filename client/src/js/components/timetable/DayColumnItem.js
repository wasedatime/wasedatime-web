import React from 'react';
import styled from 'styled-components';

import CourseColumn from './CourseColumn';

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
  border-bottom: solid 1px #ccc;
`

const DayColumnItem = ({day, coursesAndProperties}) => {
  return (
    <StyledDayColumnItem>
      <DayItem>
        <span>{day}</span>
      </DayItem>
      <CourseColumn coursesAndProperties={coursesAndProperties} />
    </StyledDayColumnItem>
  )
}

export default DayColumnItem;
