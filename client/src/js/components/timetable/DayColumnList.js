import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";

import DayColumnItem from "./DayColumnItem";
import LANGS from "../../config/langs";

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

const DayColumnList = ({
  largestDay,
  largestPeriod,
  addedCoursesAndPrefs,
  t
}) => {
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

  //We define Sunday as index 0.
  const days = [
    t("timetable.mon"),
    t("timetable.tue"),
    t("timetable.wed"),
    t("timetable.thu"),
    t("timetable.fri"),
    t("timetable.sat")
  ];

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

export default withNamespaces("translation")(DayColumnList);
