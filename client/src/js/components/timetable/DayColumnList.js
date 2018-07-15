import React from 'react';
import styled from 'styled-components';

import DayColumnItem from './DayColumnItem';

const StyledList = styled('ol')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  list-style-type: none;
`;

const DayColumnList = props => {
  const { addedCoursesAndPrefs } = props;
  const initCoursesByDay = {
    "-1": [], "0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": []
  };
  const visibleAddedCoursesAndPrefs = addedCoursesAndPrefs.filter(elem => (
    elem.visibility === true
  ));
  const coursesByDay = visibleAddedCoursesAndPrefs.reduce((acc, elem) => {
    const {course, ...restOfElem} = elem;
    const {occurrences, ...restOfCourse} = course;
    occurrences.forEach(occ => {
      acc[occ.day] = [...acc[occ.day], {
        ...restOfElem,
        course: {
          occurrence: occ,
          ...restOfCourse
        }
      }]
    });
    return acc;
  }, initCoursesByDay);

  //We define Sunday as index 0.
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayColumns = days.map((day, index) => {
    return (
      <DayColumnItem
        key={day}
        day={day}
        coursesAndProperties={coursesByDay[index + 1]}
      />
    );
  });
  return (
      <StyledList>
        {dayColumns}
      </StyledList>
  )
}

export default DayColumnList;
