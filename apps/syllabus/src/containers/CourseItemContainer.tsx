import React from "react";

import ReactGA from "react-ga";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import CourseItem from "@app/components/CourseItem";
import { SyllabusKey } from "@app/constants/syllabus-data";
import {
  gaAddCourse,
  gaAppendActionWithLng,
  gaRemoveCourse,
} from "@app/ga/eventActions";
import { gaFetchedCourseItem } from "@app/ga/eventCategories";
import { addCourse, removeCourse } from "@app/redux/actions";
import Course from "@app/types/course";

const ADDED_COURSES_NUMBER_LIMIT = 100;

interface ReduxStateProps {
  addedCourseIds: string[];
}

interface ReduxDispatchProps {
  addCourse: (course: Course, displayLang: string | string[]) => void;
  removeCourse: (id: string) => void;
}

interface OwnProps extends WithTranslation {
  searchTerm: string | string[];
  searchLang: string | string[];
  course: Course;
  expandable: boolean;
  isRelatedCourse?: boolean;
  clearSearchBar?: () => void;
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
      toast.error(
        this.props.t("alert.courses limit reached 1") +
          ADDED_COURSES_NUMBER_LIMIT +
          this.props.t("alert.courses limit reached 2")
      );

      return;
    }
    this.props.addCourse(course, searchLang);
    if (
      !occurrences ||
      occurrences.some(
        (o) => o[SyllabusKey.OCC_DAY] === -1 || o[SyllabusKey.OCC_PERIOD] === -1
      )
    ) {
      toast.warning(this.props.t("alert.course with undecided time"));
    } else {
      toast.success(this.props.t("alert.course added"));
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
    toast.success(this.props.t("alert.course removed"));
  };

  render() {
    const {
      searchTerm,
      searchLang,
      course,
      addedCourseIds,
      expandable,
      isRelatedCourse,
      clearSearchBar,
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
        clearSearchBar={clearSearchBar}
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

export default withTranslation("translation")(
  connect(mapStateToProps, mapDispatchToProps)(CourseItemContainer)
);
