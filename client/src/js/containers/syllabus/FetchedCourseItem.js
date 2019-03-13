import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { addCourse, removeCourse } from '../../actions/syllabus';
import { getById } from '../../reducers/addedCourses';
import CourseItem from '../../components/syllabus/CourseItem';
import PropTypes from 'prop-types';

const ADDED_COURSES_NUMBER_LIMIT = 100;

class FetchedCourseItem extends React.Component {
  handleAddCourse = event => {
    event.preventDefault();
    const { course, byId } = this.props;
    const occurrences = course.occurrences;
    if (Object.keys(byId).length >= ADDED_COURSES_NUMBER_LIMIT) {
      Alert.error(
        `Cannot add more than ${ADDED_COURSES_NUMBER_LIMIT} courses`,
        {
          position: 'bottom',
          effect: 'jelly'
        }
      );
      return;
    }
    this.props.addCourse(course);
    if (occurrences.some(o => o.day === -1 || o.start_period === -1)) {
      Alert.warning(
        'Course with undecided time cannot be displayed in timetable.',
        {
          position: 'bottom',
          effect: 'jelly'
        }
      );
    } else {
      Alert.success('Course added.', {
        position: 'bottom',
        effect: 'jelly'
      });
    }
  };

  handleRemoveCourse = event => {
    event.preventDefault();
    const { course } = this.props;
    this.props.removeCourse(course._id);
    Alert.success('Course removed.', {
      position: 'bottom',
      effect: 'jelly'
    });
  };

  render() {
    const { searchTerm, course, byId } = this.props;
    const id = course._id;
    const isAddable = !(id in byId);
    return (
      <CourseItem
        handleOnClick={
          isAddable ? this.handleAddCourse : this.handleRemoveCourse
        }
        isAddable={isAddable}
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchedCourseItem);

FetchedCourseItem.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  byId: PropTypes.object.isRequired,
  addCourse: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired
}
