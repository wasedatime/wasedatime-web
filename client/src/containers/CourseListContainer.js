import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCourses } from '../actions/index';
import {
  getIsFetching,
  getCourses,
  getErrorMessage
} from '../reducers/courses';
import { filterCourses, sortCourses } from '../utils/syllabusSearch';
import CourseList from '../components/CourseList';
import LoadingSpinner from '../components/LoadingSpinner';

class CourseListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    const { isFetching, courses, errorMessage } = this.props;
    if (isFetching && !courses.length) {
      return <LoadingSpinner />;
    }
    // const searchTerm = this.props.searchTerm;
    let courseResults = courses;
    // console.log(courses);
    // if (searchTerm.length > 1) {
    //   const filteredCourses = filterCourses(searchTerm, this.state.courses);
    //   courseResults = sortCourses(searchTerm, filteredCourses);
    // }
    //return <CourseList searchTerm={''} courseResults={courseResults} />;
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.courses),
    courses: getCourses(state.courses),
    errorMessage: getErrorMessage(state.courses)
  };
};

const mapDispatchToProps = {
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseListContainer
);

CourseListContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
};
