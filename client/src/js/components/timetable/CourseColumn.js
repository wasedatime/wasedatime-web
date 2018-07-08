import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/styledComponents';

const StyledCourseColumn = styled('div')`
  display: flex;
  flex: 1 0 60rem;
  border: solid 1px #ccc;
  border-right: none;
  border-radius: 3px;
  background: linear-gradient(180deg, #fff 50%, #eee 50%);
  background-size: 100% calc(100%/3.5);
  position: relative;
  min-width: 6.8rem;
  flex-direction: row;
`

const CourseItem = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% / 7 * ${props => props.top});
  height: calc(100% / 7 * ${props => props.height} - 1px);
  width: 100%;
  padding: 0.3rem 0 0 0.1rem;
  border-left-width: 2px;
  border-left-style: solid;
`

const CourseTitle = styled('span')`
  flex: 1 1 75%;
  font-weight: bold;
  font-size: 1.4rem;
  overflow-x: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  text-align: center;
  ${media.tablet`font-size: 1.2rem;`};
  ${media.phone`font-size: 1.2rem;`};
`

const CourseLocation = styled('span')`
  display: inline-flex;
  flex: 1 0 auto;
  font-size: 1.4rem;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  ${media.tablet`font-size: 1.2rem;`};
  ${media.phone`font-size: 1.2rem;`};
`

const CourseList = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-width: 6.8rem;
  position: relative;
`

const CourseColumn = ({coursesAndProperties}) => {
  // a distinct course list has no occurrence overlaps between its course items.
  let distinctCourseLists = [[]];
  // index 0 is not used since class period starts from 1.
  // value 0 means available, 1 means occupied.
  const initSlotList = [0, 0, 0, 0, 0, 0, 0, 0];
  let slotLists = [initSlotList.slice()];

  coursesAndProperties.forEach(courseAndProperty => {
    const startPeriod = Number(courseAndProperty.course.occurrence.start_period);
    const endPeriod = Number(courseAndProperty.course.occurrence.end_period);

    let existsAvailableSlot = true;
    for (let i = 0; i < slotLists.length; i ++) {
      // reinit as true for every slotList
      existsAvailableSlot = true;
      let j = startPeriod;
      for (; j <= endPeriod; j ++) {
        if (slotLists[i][j]) {
          //slot not available
          existsAvailableSlot = false;
          break;
        }
      }
      if (existsAvailableSlot) {
        j = startPeriod;
        for (; j <= endPeriod; j ++) {
          slotLists[i][j] = 1;
        }
        distinctCourseLists[i].push(courseAndProperty);
        break;
      }
    }
    if (!existsAvailableSlot) {
      //append a new slotList and mark period i as occupied
      slotLists.push(initSlotList.slice());
      distinctCourseLists.push([]);
      let j = startPeriod;
      for (; j <= endPeriod; j ++) {
        slotLists[slotLists.length - 1][j] = 1;
      }
      distinctCourseLists[distinctCourseLists.length - 1].push(courseAndProperty);
    }
  });

  const distinctCourseListsComponent = distinctCourseLists.map(
    (distinctCourseList, index) => {
      const listComponent = distinctCourseList.map(courseAndProperty => {
        const { course, color } = courseAndProperty;
        const startPeriod = Number(course.occurrence.start_period);
        const endPeriod = Number(course.occurrence.end_period);
        let location = 'undecided';
        if (course.occurrence.classroom !== 'undecided') {
          if (course.occurrence.building !== '-1') {
            location = course.occurrence.location;
          } else {
            location = course.occurrence.classroom;
          }
        }
        return (
          <CourseItem
            className={`color-${color}`}
            key={`${course.term}-${course.title}-${startPeriod}-${endPeriod}`}
            top={startPeriod - 1}
            height={endPeriod - startPeriod + 1}
            >
            <CourseTitle>
              {course.title}
            </CourseTitle>
            <CourseLocation>
              {location}
            </CourseLocation>
          </CourseItem>
        )
      });
      return (
        <CourseList key={index}>
          {listComponent}
        </CourseList>
      );
  });

  return (
    <StyledCourseColumn>
      {distinctCourseListsComponent}
    </StyledCourseColumn>
  );
}

export default CourseColumn;
