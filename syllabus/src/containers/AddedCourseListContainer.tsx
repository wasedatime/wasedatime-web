import React, { useState } from "react";
import { connect } from "react-redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { sortAddedCourses } from "@bit/wasedatime.syllabus.ts.utils.added-courses";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import AddedCourseList from "../components/AddedCourseList";

const sortingOptions = [
  {
    label: "Added order",
    value: "ADDED_ORDER",
  },
  {
    label: "Course title",
    value: "COURSE_TITLE",
  },
  {
    label: "Course time",
    value: "COURSE_TIME",
  },
];

interface Props extends WithTranslation {
  addedCourses: { [key: string]: any }[];
  semesterKey: string;
}

const AddedCourseListContainer = ({ addedCourses, semesterKey }: Props) => {
  const [sortingOption, setSortingOption] = useState(sortingOptions[0].value);
  const [isSortingOptionOpen, setIsSortingOptionOpen] = useState(false);

  const addedCoursesOfTerm = addedCourses.filter((c) => {
    if (semesterKey === "springSem")
      return c[SYLLABUS_KEYS.TERM].match(/0|1|f/g);
    else if (semesterKey === "fallSem")
      return c[SYLLABUS_KEYS.TERM].match(/2|3|f/g);
  });
  const sortedAddedCourses = sortAddedCourses(
    addedCoursesOfTerm,
    sortingOption
  );

  return (
    <AddedCourseList
      addedCourses={sortedAddedCourses}
      sortingOptions={sortingOptions}
      isSortingOptionOpen={isSortingOptionOpen}
      selectedSortingOption={sortingOption}
      handleToggleSortingOptions={() =>
        setIsSortingOptionOpen(!isSortingOptionOpen)
      }
      handleChangeSortingOption={() => setSortingOption(sortingOption)}
    />
  );
};

export default withTranslation("translation")(AddedCourseListContainer);
