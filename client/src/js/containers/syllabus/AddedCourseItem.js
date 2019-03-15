import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import ReactGA from "react-ga";

import { removeCourse } from "../../actions/syllabus";
import CourseItem from "../../components/syllabus/CourseItem";
import { gaAddedCourseItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaRemoveCourse,
  gaClickSyllabusLink
} from "../../ga/eventActions";

class AddedCourseItem extends React.Component {
  handleClickSyllabusLink = (title, lng) => {
    ReactGA.event({
      category: gaAddedCourseItem,
      action: gaAppendActionWithLng(gaClickSyllabusLink, lng),
      label: title
    });
  };
  handleRemoveCourse = (title, lng) => {
    const { course } = this.props;
    ReactGA.event({
      category: gaAddedCourseItem,
      action: gaAppendActionWithLng(gaRemoveCourse, lng),
      label: title
    });
    this.props.removeCourse(course._id);
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly"
    });
  };

  render() {
    const { course } = this.props;
    return (
      <CourseItem
        handleOnClick={this.handleRemoveCourse}
        handleClickSyllabusLink={this.handleClickSyllabusLink}
        isAddable={false}
        searchTerm=""
        searchLang={course.displayLang}
        course={course}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse
};

export default connect(
  null,
  mapDispatchToProps
)(AddedCourseItem);
