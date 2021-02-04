import React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import { removeCourse } from "../redux/actions/syllabus";
import CourseItem from "../components/CourseItem";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

interface ReduxDispatchProps {
  removeCourse: (id: string) => void;
}

interface OwnProps {
  course: { [key: string]: any };
  removeCourseFromList: (course: { [key: string]: any }) => void;
}

class AddedCourseItemContainer extends React.Component<ReduxDispatchProps & OwnProps> {
  handleRemoveCourse = (title, lng) => {
    const { course, removeCourse, removeCourseFromList } = this.props;
    removeCourseFromList(course);
    removeCourse(course[SYLLABUS_KEYS.ID]);
    Alert.success("Course removed.", {
      position: "bottom",
      effect: "jelly",
    });
  };

  render() {
    const { course } = this.props;
    return (
      <CourseItem
        handleOnClick={this.handleRemoveCourse}
        isAddable={false}
        searchTerm={""}
        searchLang={course.displayLang}
        course={course}
        isDetailDisplayed={false}
        openNewTabOnClick={true}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
};

export default connect(null, mapDispatchToProps)(AddedCourseItemContainer);
