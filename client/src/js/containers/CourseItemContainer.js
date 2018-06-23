import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { addCourse } from '../actions/syllabus';
import { getById } from '../reducers/addedCourses';
import CourseItem from '../components/syllabus/CourseItem';

class CourseItemContainer extends React.Component {

  handleOnClick = event => {
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

  render() {
    const { style, searchTerm, course } = this.props;
    return (
      <CourseItem addCourse={this.handleOnClick}
        style={style}
        searchTerm={searchTerm}
        course={course}
      />
    )
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
