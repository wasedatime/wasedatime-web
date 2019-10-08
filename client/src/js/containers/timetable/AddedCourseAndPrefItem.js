import React from "react";
import { connect } from "react-redux";
import { withNamespaces } from "react-i18next";
import ReactGA from "react-ga";
import { gaAddedCourseAndPrefItem } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaChangeCourseColor,
  gaMakeCourseVisible,
  gaMakeCourseInVisible,
  gaClickSyllabusLink,
  gaRemoveCourse
} from "../../ga/eventActions";

import {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility
} from "../../actions/syllabus";
import CourseAndPrefItem from "../../components/timetable/CourseAndPrefItem";
import { courseColors } from "../../data/colors";

class AddedCourseAndPrefItem extends React.Component {
  state = {
    isPopperOpen: false
  };

  handleRemoveCourse = (id, title) => {
    const { lng } = this.props;
    this.props.removeCourse(id);
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaRemoveCourse, lng),
      label: title
    });
    // course removed success alert
  };

  handleToggleColorPopper = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
  };

  handleChangeColor = colorId => {
    const { addedCourseAndPref, lng } = this.props;
    const { course } = addedCourseAndPref;
    this.setState((prevState, props) => {
      return { isPopperOpen: !prevState.isPopperOpen };
    });
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaChangeCourseColor, lng),
      label: courseColors[colorId]
    });
    this.props.changeCourseColor(course._id, colorId);
  };

  handleToggleVisibility = (id, title) => {
    const { addedCourseAndPref, lng } = this.props;
    const gaAction =
      addedCourseAndPref.visibility === true
        ? gaMakeCourseInVisible
        : gaMakeCourseVisible;
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaAction, lng),
      label: title
    });
    this.props.toggleCourseVisibility(id);
  };

  handleClickSyllabusLink = title => {
    const { lng } = this.props;
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaClickSyllabusLink, lng),
      label: title
    });
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
        handleClickSyllabusLink={this.handleClickSyllabusLink}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility
};

export default withNamespaces("translation")(
  connect(
    null,
    mapDispatchToProps
  )(AddedCourseAndPrefItem)
);
