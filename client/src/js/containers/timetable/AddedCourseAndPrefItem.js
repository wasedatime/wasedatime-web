import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { removeCourse } from '../../actions/syllabus';
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
        handleToggleVisibility={null}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse
};

export default connect(null, mapDispatchToProps)(
  AddedCourseAndPrefItem
);
