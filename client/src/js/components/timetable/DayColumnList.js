import React from "react";
import styled from "styled-components";

import DayColumnItem from "./DayColumnItem";

const StyledList = styled("ol")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  list-style-type: none;
`;

const DayColumnList = ({ largestDay, largestPeriod, addedCoursesAndPrefs }) => {
  const initCoursesByDay = {
    "-1": [],
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": []
  };
  const coursesByDay = addedCoursesAndPrefs.reduce((acc, elem) => {
    const { course, ...restOfElem } = elem;
    const { occurrences, ...restOfCourse } = course;
    occurrences.forEach(occ => {
      acc[occ.day] = [
        ...acc[occ.day],
        {
          ...restOfElem,
          course: {
            occurrence: occ,
            ...restOfCourse
          }
        }
      ];
    });
    return acc;
  }, initCoursesByDay);
  const lang = "jp";
  //We define Sunday as index 0.
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (lang === "jp") {
    days[0] = "月";
    days[1] = "火";
    days[2] = "水";
    days[3] = "木";
    days[4] = "金";
    days[5] = "土";
  }
  const dayColumns = days
    .slice(0, Math.max(largestDay, 5))
    .map((day, index) => {
      return (
        <DayColumnItem
          key={day}
          day={day}
          largestPeriod={largestPeriod}
          coursesAndProperties={coursesByDay[index + 1]}
        />
      );
    });
  return <StyledList>{dayColumns}</StyledList>;
};

export default DayColumnList;
