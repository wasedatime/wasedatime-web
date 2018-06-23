import React from 'react';
import { connect } from 'react-redux';

import { addCourse } from '../actions/syllabus';
import { getCourses } from '../reducers/addedCourses';
import CourseItem from '../components/syllabus/CourseItem';

class CourseItemContainer extends React.Component {

  handleAddCourse = event => {
    event.preventDefault();
    const { course, addedCourses } = this.props;
    
    this.props.addCourse(course._id, course);
  }

  render() {
    const { addCourse, addedCourses, ...rest } = this.props;
    return (
      <CourseItem addCourse={this.handleAddCourse} {...rest} />
    )
  }
}

const mapStateToProps = state => {
  return {
    addedCourses: getCourses(state.addedCourses)
  };
};

const mapDispatchToProps = {
  addCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseItemContainer
);
