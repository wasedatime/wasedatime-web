import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility,
} from "../redux/actions";
import CourseAndPrefItem from "../components/timetable/CourseAndPrefItem";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import Course from "../types/course";
import ReactGA from "react-ga";
import {
  gaAppendActionWithLng,
  gaChangeCourseColor,
  gaMakeCourseInVisible,
  gaRemoveCourse,
} from "../ga/eventActions";
import { gaAddedCourseAndPrefItem } from "../ga/eventCategories";

interface ReduxDispatchProps {
  removeCourse: (id: string) => void;
  changeCourseColor: (id: string, color: string) => void;
  toggleCourseVisibility: (id: string) => void;
}

interface OwnProps extends WithTranslation {
  addedCourseAndPref: {
    pref: {
      color: number;
      displayLang: string;
      visibility: boolean;
    };
    course: Course;
  };
}

class AddedCourseAndPrefItem extends React.Component<
  ReduxDispatchProps & OwnProps,
  {}
> {
  handleRemoveCourse = (id) => {
    const { addedCourseAndPref, i18n } = this.props;
    this.props.removeCourse(id);
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaRemoveCourse, i18n.language),
      label: addedCourseAndPref.course[SyllabusKey.TITLE],
    });
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly",
    });
  };

  handleChangeColor = (colorId) => {
    const { addedCourseAndPref, i18n } = this.props;
    const { course } = addedCourseAndPref;
    this.props.changeCourseColor(course[SyllabusKey.ID], colorId);
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaChangeCourseColor, i18n.language),
      label: "color" + colorId,
    });
  };

  handleToggleVisibility = (id) => {
    const { addedCourseAndPref, i18n } = this.props;
    const gaAction =
      addedCourseAndPref.pref.visibility === true
        ? gaMakeCourseInVisible
        : gaMakeCourseInVisible;
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaAction, i18n.language),
      label: addedCourseAndPref.course[SyllabusKey.TITLE],
    });
    this.props.toggleCourseVisibility(id);
  };

  render() {
    const { addedCourseAndPref } = this.props;
    const { pref, course } = addedCourseAndPref;
    const { color, visibility, displayLang } = pref;
    return (
      <CourseAndPrefItem
        color={color}
        visibility={visibility}
        displayLang={displayLang}
        course={course}
        handleRemoveCourse={this.handleRemoveCourse}
        handleChangeColor={this.handleChangeColor}
        handleToggleVisibility={this.handleToggleVisibility}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility,
};

export default withTranslation("translation")(
  connect(null, mapDispatchToProps)(AddedCourseAndPrefItem)
);
