import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { addCourse } from '../actions/syllabus';
import { getById } from '../reducers/addedCourses';
import CourseItem from '../components/syllabus/CourseItem';

class CourseItemContainer extends React.Component {

  handleAddCourse = event => {
    event.preventDefault();
    const { course, byId } = this.props;
    const id = course._id;
    if (!(id in byId)) {
      this.props.addCourse(course._id, course);
      Alert.success('Course Added.', {
        position: 'bottom',
        effect: 'jelly',
      });
    }
  }

  handleRemoveCourse = event => {
    event.preventDefault();
    Alert.error('Course Deleted.', {
      position: 'bottom',
      effect: 'jelly',
    });
  }

  render() {
    const { style, searchTerm, course, byId } = this.props;
    const id = course._id;
    const isAddable = !(id in byId)
    return (
      <CourseItem handleOnClick={isAddable ? this.handleAddCourse : this.handleRemoveCourse}
        isAddable = {isAddable}
        style={style}
        searchTerm={searchTerm}
        course={course}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    byId: getById(state.addedCourses)
  };
};

const mapDispatchToProps = {
  addCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseItemContainer
);
