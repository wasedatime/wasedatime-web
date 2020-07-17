import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import ReactGA from "react-ga";

import { addCourse, removeCourse } from "../../actions/syllabus";
import { getById } from "../../reducers/addedCourses";
import CourseItem from "../../components/syllabus/CourseItem";
import { gaFetchedCourseItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaAddCourse,
  gaRemoveCourse,
  gaClickSyllabusLink,
} from "../../ga/eventActions";

const ADDED_COURSES_NUMBER_LIMIT = 100;

class FetchedCourseItem extends React.Component {
  handleAddCourse = (title, lng) => {
    const { course, byId, searchLang } = this.props;
    const occurrences = course.occurrences;
    ReactGA.event({
      category: gaFetchedCourseItem,
      action: gaAppendActionWithLng(gaAddCourse, lng),
      label: title,
    });
    if (Object.keys(byId).length >= ADDED_COURSES_NUMBER_LIMIT) {
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
    if (occurrences.some((o) => o.day === -1 || o.start_period === -1)) {
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
    this.props.removeCourse(course._id);
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly",
    });
  };

  handleClickSyllabusLink = (title, lng) => {
    ReactGA.event({
      category: gaFetchedCourseItem,
      action: gaAppendActionWithLng(gaClickSyllabusLink, lng),
      label: title,
    });
  };

  render() {
    const { searchTerm, searchLang, course, byId } = this.props;
    const id = course._id;
    const isAddable = !(id in byId);
    return (
      <CourseItem
        handleOnClick={
          isAddable ? this.handleAddCourse : this.handleRemoveCourse
        }
        handleClickSyllabusLink={this.handleClickSyllabusLink}
        isAddable={isAddable}
        searchTerm={searchTerm}
        searchLang={searchLang}
        course={course}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    byId: getById(state.addedCourses),
  };
};

const mapDispatchToProps = {
  addCourse,
  removeCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchedCourseItem);
