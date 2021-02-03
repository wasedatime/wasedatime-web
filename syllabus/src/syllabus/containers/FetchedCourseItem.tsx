import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import { addCourse, removeCourse } from "../../redux/actions/syllabus";
import CourseItem from "../components/CourseItem";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const ADDED_COURSES_NUMBER_LIMIT = 100;

interface ReduxStateProps {
  addedCourseIds: string[];
}

interface ReduxDispatchProps {
  addCourse: (course: object, displayLang: string | string[]) => void;
  removeCourse: (id: string) => void;
}

interface OwnProps {
  searchTerm: string | string[];
  searchLang: string | string[];
  course: object;
  isDetailDisplayed: boolean;
  needLineBreak: boolean;
}

class FetchedCourseItem extends React.Component<
  ReduxStateProps & ReduxDispatchProps & OwnProps
> {
  handleAddCourse = (title, lng) => {
    const { course, addedCourseIds, searchLang } = this.props;
    const occurrences = course[SYLLABUS_KEYS.OCCURRENCES];
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
        (o) =>
          o[SYLLABUS_KEYS.OCC_DAY] === -1 || o[SYLLABUS_KEYS.OCC_PERIOD] === -1
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
    this.props.removeCourse(course[SYLLABUS_KEYS.ID]);
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
      isDetailDisplayed,
      needLineBreak,
    } = this.props;
    const isAddable = !addedCourseIds.includes(course[SYLLABUS_KEYS.ID]);
    return (
      <MediaQuery minWidth={sizes.desktop}>
        {(matches) =>
          matches ? (
            <CourseItem
              handleOnClick={
                isAddable ? this.handleAddCourse : this.handleRemoveCourse
              }
              isAddable={isAddable}
              searchTerm={searchTerm}
              searchLang={searchLang}
              course={course}
              isDetailDisplayed={isDetailDisplayed}
              needLineBreak={needLineBreak}
              openNewTabOnClick={true}
            />
          ) : (
            <CourseItem
              handleOnClick={
                isAddable ? this.handleAddCourse : this.handleRemoveCourse
              }
              isAddable={isAddable}
              searchTerm={searchTerm}
              searchLang={searchLang}
              course={course}
              isDetailDisplayed={isDetailDisplayed}
              needLineBreak={needLineBreak}
              openNewTabOnClick={false}
            />
          )
        }
      </MediaQuery>
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchedCourseItem);
