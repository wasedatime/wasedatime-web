import React from "react";

import ReactGA from "react-ga";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import CourseItem from "@app/components/CourseItem";
import { SyllabusKey } from "@app/constants/syllabus-data";
import { gaAppendActionWithLng, gaRemoveCourse } from "@app/ga/eventActions";
import { gaAddedCourseItem } from "@app/ga/eventCategories";
import { removeCourse } from "@app/redux/actions";
import Course from "@app/types/course";

interface ReduxDispatchProps {
  removeCourse: (id: string) => void;
}

interface OwnProps {
  course: Course;
  removeCourseFromList: (course: Course) => void;
}

class AddedCourseItemContainer extends React.Component<
  ReduxDispatchProps & OwnProps
> {
  handleRemoveCourse = (title, lng) => {
    const { course, removeCourse, removeCourseFromList } = this.props;
    ReactGA.event({
      category: gaAddedCourseItem,
      action: gaAppendActionWithLng(gaRemoveCourse, lng),
      label: title,
    });
    removeCourseFromList(course);
    removeCourse(course[SyllabusKey.ID]);
    toast.success("Course removed.");
  };

  render() {
    const { course } = this.props;

    return (
      <CourseItem
        handleOnClick={this.handleRemoveCourse}
        isAddable={false}
        searchTerm=""
        searchLang={course.displayLang}
        course={course}
        expandable={false}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
};

export default connect(null, mapDispatchToProps)(AddedCourseItemContainer);
