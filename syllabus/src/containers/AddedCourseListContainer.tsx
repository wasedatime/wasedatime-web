import React, { useState } from "react";
import { connect } from "react-redux";
import { WithTranslation, withTranslation } from "react-i18next";
import { sortAddedCourses } from "@bit/wasedatime.syllabus.ts.utils.added-courses";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import BinarySwitch from "../components/syllabus/BinarySwitch";
import AddedCourseList from "../components/syllabus/AddedCourseList";
import { Semester } from "@bit/wasedatime.syllabus.ts.constants.timetable-terms";
import { getCurrentSemester } from "@bit/wasedatime.syllabus.ts.utils.get-current-semesters";
import Course from "../types/course";
import { getAddedCoursesListWithLang } from "../redux/reducers/addedCourses";
import { ReduxRootState } from "../redux/reducers";

interface ReduxStateProps {
  addedCourses: Course[];
  selectedSortingOption: string;
}

const AddedCourseListContainer = ({
  addedCourses,
  selectedSortingOption,
  t,
}: ReduxStateProps & WithTranslation) => {
  const [semester, setSemester] = useState(getCurrentSemester());

  const handleChangeSemester = (targetSemester) => {
    if (semester !== targetSemester) setSemester(targetSemester);
  };

  const addedCoursesOfTerm = addedCourses.filter((c) => {
    if (semester === Semester.SPRING)
      return c[SyllabusKey.TERM].match(/0|1|f/g);
    else if (semester === Semester.FALL)
      return c[SyllabusKey.TERM].match(/2|3|f/g);
  });

  const sortedAddedCourses = sortAddedCourses(
    addedCoursesOfTerm,
    selectedSortingOption
  );

  return (
    <div>
      <BinarySwitch
        switchHeight={"32px"}
        handleSwitchValue={handleChangeSemester}
        value={semester}
        leftButtonId={`button--semester-spring`}
        rightButtonId={`button--semester-fall`}
        leftValue={Semester.SPRING}
        rightValue={Semester.FALL}
        leftDisplayedValue={t("syllabus.displayedSpringSemester")}
        rightDisplayedValue={t("syllabus.displayedFallSemester")}
      />
      <AddedCourseList addedCourses={sortedAddedCourses} />
    </div>
  );
};

const mapStateToProps = (state: ReduxRootState) => ({
  addedCourses: getAddedCoursesListWithLang(state.addedCourses.byId),
  selectedSortingOption: state.addedCourses.sortingOption,
});

export default connect<ReduxStateProps, {}>(
  mapStateToProps,
  null
)(withTranslation("translation")(AddedCourseListContainer));
