import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { addCourse, removeCourse } from '../actions/syllabus';
import { getById } from '../reducers/addedCourses';
import CourseItem from '../components/syllabus/CourseItem';

class CourseItemContainer extends React.Component {

  handleAddCourse = event => {
    event.preventDefault();
    const { course, byId } = this.props;
    const id = course._id;
    const occurrences = course.occurrences;
    if (!(id in byId)) {
      this.props.addCourse(id, course);
      if (occurrences.some(o => o.day === -1 || o.start_period === -1)) {
        Alert.warning('Course with undecided time cannot be displayed in timetable.', {
          position: 'bottom',
          effect: 'jelly',
        });
      } else {
        Alert.success('Course added to timetable.', {
          position: 'bottom',
          effect: 'jelly',
        });
      }
    }
  }

  handleRemoveCourse = event => {
    event.preventDefault();
    const { course, byId } = this.props;
    const id = course._id;
    if (id in byId) {
      this.props.removeCourse(course._id);
      Alert.error('Course removed from timetable.', {
        position: 'bottom',
        effect: 'jelly',
      });
    }
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
  addCourse,
  removeCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseItemContainer
);
