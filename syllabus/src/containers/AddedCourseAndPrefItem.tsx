import React from "react";

import ReactGA from "react-ga4";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import CourseAndPrefItem from "@app/components/timetable/CourseAndPrefItem";
import { SyllabusKey } from "@app/constants/syllabus-data";
import {
  gaAppendActionWithLng,
  gaChangeCourseColor,
  gaMakeCourseInVisible,
  gaRemoveCourse,
} from "@app/ga/eventActions";
import { gaAddedCourseAndPrefItem } from "@app/ga/eventCategories";
import {
  removeCourse,
  changeCourseColor,
  toggleCourseVisibility,
} from "@app/redux/actions";
import Course from "@app/types/course";

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
    toast.success(this.props.t("alert.course removed"));
  };

  handleChangeColor = (colorId) => {
    const { addedCourseAndPref, i18n } = this.props;
    const { course } = addedCourseAndPref;
    this.props.changeCourseColor(course[SyllabusKey.ID], colorId);
    ReactGA.event({
      category: gaAddedCourseAndPrefItem,
      action: gaAppendActionWithLng(gaChangeCourseColor, i18n.language),
      label: `color${colorId}`,
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
