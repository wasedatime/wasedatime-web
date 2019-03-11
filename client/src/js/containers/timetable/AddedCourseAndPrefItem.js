import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";

import {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility
} from "../../actions/syllabus";
import CourseAndPrefItem from "../../components/timetable/CourseAndPrefItem";

class AddedCourseAndPrefItem extends React.Component {
  state = {
    isPopperOpen: false
  };

  handleRemoveCourse = event => {
    event.preventDefault();
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    this.props.removeCourse(course._id);
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly"
    });
  };

  handleToggleColorPopper = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
  };

  handleChangeColor = color => {
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
    this.props.changeCourseColor(course._id, color);
  };

  handleToggleVisibility = event => {
    event.preventDefault();
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    this.props.toggleCourseVisibility(course._id);
  };

  render() {
    const { addedCourseAndPref } = this.props;
    const { color, visibility, course, displayLang } = addedCourseAndPref;
    return (
      <CourseAndPrefItem
        isPopperOpen={this.state.isPopperOpen}
        color={color}
        visibility={visibility}
        displayLang={displayLang}
        course={course}
        handleRemoveCourse={this.handleRemoveCourse}
        handleToggleColorPopper={this.handleToggleColorPopper}
        handleChangeColor={this.handleChangeColor}
        handleToggleVisibility={this.handleToggleVisibility}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility
};

export default connect(
  null,
  mapDispatchToProps
)(AddedCourseAndPrefItem);
