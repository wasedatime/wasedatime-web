import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { removeCourse, toggleCourseVisibility } from '../../actions/syllabus';
import CourseAndPrefItem from '../../components/timetable/CourseAndPrefItem';

class AddedCourseAndPrefItem extends React.Component {

  handleRemoveCourse = event => {
    event.preventDefault();
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    this.props.removeCourse(course._id);
    Alert.success('Course removed.', {
      position: 'bottom',
      effect: 'jelly',
    });
  }

  handleToggleVisibility = event => {
    event.preventDefault();
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    this.props.toggleCourseVisibility(course._id);
  }

  render() {
    const { addedCourseAndPref } = this.props;
    const { color, visibility, course } = addedCourseAndPref;
    return (
      <CourseAndPrefItem
        color={color}
        visibility={visibility}
        course={course}
        handleRemoveCourse={this.handleRemoveCourse}
        handleChangeColor={null}
        handleToggleVisibility={this.handleToggleVisibility}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse,
  toggleCourseVisibility
};

export default connect(null, mapDispatchToProps)(
  AddedCourseAndPrefItem
);
