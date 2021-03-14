import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import { addCourse, removeCourse } from "../redux/actions";
import CourseItem from "../components/CourseItem";
import { SyllabusKey } from "../constants/syllabus-data";
import Course from "../types/course";
import ReactGA from "react-ga";
import { gaFetchedCourseItem } from "../ga/eventCategories";
import {
  gaAddCourse,
  gaAppendActionWithLng,
  gaRemoveCourse,
} from "../ga/eventActions";

const ADDED_COURSES_NUMBER_LIMIT = 100;

interface ReduxStateProps {
  addedCourseIds: string[];
}

interface ReduxDispatchProps {
  addCourse: (course: Course, displayLang: string | string[]) => void;
  removeCourse: (id: string) => void;
}

interface OwnProps {
  searchTerm: string | string[];
  searchLang: string | string[];
  course: Course;
  expandable: boolean;
  isRelatedCourse?: boolean;
}

class CourseItemContainer extends React.Component<
  ReduxStateProps & ReduxDispatchProps & OwnProps
> {
  handleAddCourse = (title, lng) => {
    const { course, addedCourseIds, searchLang } = this.props;
    const occurrences = course[SyllabusKey.OCCURRENCES];
    ReactGA.event({
      category: gaFetchedCourseItem,
      action: gaAppendActionWithLng(gaAddCourse, lng),
      label: title,
    });
    if (addedCourseIds.length >= ADDED_COURSES_NUMBER_LIMIT) {
      Alert.error(
        `Cannot add more than ${ADDED_COURSES_NUMBER_LIMIT} courses`,
        {
          position: "bottom",
          effect: "jelly",
        }
      );
      return;
    }
    this.props.addCourse(course, searchLang);
    if (
      occurrences.some(
        (o) => o[SyllabusKey.OCC_DAY] === -1 || o[SyllabusKey.OCC_PERIOD] === -1
      )
    ) {
      Alert.warning(
        "Course with undecided time cannot be displayed in timetable.",
        {
          position: "bottom",
          effect: "jelly",
        }
      );
    } else {
      Alert.success("Course added.", {
        position: "bottom",
        effect: "jelly",
      });
    }
  };

  handleRemoveCourse = (title, lng) => {
    const { course } = this.props;
    ReactGA.event({
      category: gaFetchedCourseItem,
      action: gaAppendActionWithLng(gaRemoveCourse, lng),
      label: title,
    });
    this.props.removeCourse(course[SyllabusKey.ID]);
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly",
    });
  };

  render() {
    const {
      searchTerm,
      searchLang,
      course,
      addedCourseIds,
      expandable,
      isRelatedCourse
    } = this.props;
    const isAddable = !addedCourseIds.includes(course[SyllabusKey.ID]);
    return (
      <CourseItem
        handleOnClick={
          isAddable ? this.handleAddCourse : this.handleRemoveCourse
        }
        isAddable={isAddable}
        searchTerm={searchTerm}
        searchLang={searchLang}
        course={course}
        expandable={expandable}
        isRelatedCourse={isRelatedCourse}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedCourseIds: state.addedCourses.orderedIds,
  };
};

const mapDispatchToProps = {
  addCourse,
  removeCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseItemContainer);
