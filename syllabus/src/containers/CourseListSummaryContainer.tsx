import React from "react";
import { connect } from "react-redux";
import { changeSortingOption } from "../redux/actions";
import { ReduxRootState } from "../redux/reducers";
import CourseListSummary from "../components/CourseListSummary";
import Course from "../types/course";
import ReactGA from "react-ga";
import {
  gaAddedCourseAndPrefItem,
  gaAddedCourseItem,
} from "../ga/eventCategories";
import { gaChangeSortingOption } from "../ga/eventActions";

interface ReduxStateProps {
  selectedSortingOption: string;
}

interface ReduxDispatchProps {
  changeSortingOption: (sortingOption: string) => void;
}

interface OwnProps {
  courses: Course[];
}

const CourseListSummaryContainer = ({
  courses,
  selectedSortingOption,
  changeSortingOption,
}: OwnProps & ReduxStateProps & ReduxDispatchProps) => {
  const changeSorting = (sortingOption) => {
    ReactGA.event({
      category: window.location.pathname.includes("timetable")
        ? gaAddedCourseAndPrefItem
        : gaAddedCourseItem,
      action: gaChangeSortingOption,
      label: sortingOption,
    });
    changeSortingOption(sortingOption);
  };
  return (
    <CourseListSummary
      courses={courses}
      selectedSortingOption={selectedSortingOption}
      changeSortingOption={changeSorting}
    />
  );
};

const mapStateToProps = (state: ReduxRootState) => ({
  selectedSortingOption: state.addedCourses.sortingOption,
});

const mapDispatchToProps = {
  changeSortingOption,
};

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CourseListSummaryContainer);
