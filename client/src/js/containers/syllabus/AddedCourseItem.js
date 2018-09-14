import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { removeCourse } from '../../actions/syllabus';
import CourseItem from '../../components/syllabus/CourseItem';

class AddedCourseItem extends React.Component {
  handleRemoveCourse = event => {
    event.preventDefault();
    const { course } = this.props;
    this.props.removeCourse(course);
    Alert.success('Course removed.', {
      position: 'bottom',
      effect: 'jelly'
    });
  };

  render() {
    const { course } = this.props;
    return (
      <CourseItem
        handleOnClick={this.handleRemoveCourse}
        isAddable={false}
        searchTerm=""
        course={course}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse
};

export default connect(null, mapDispatchToProps)(AddedCourseItem);
