import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCourses } from '../actions/index';
import { getIsFetching, getCourses, getError } from '../reducers/courses';
import { filterCourses, sortCourses } from '../utils/syllabusSearch';
import CourseList from '../components/syllabus/CourseList';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchError from '../components/FetchError';

class CourseListContainer extends React.Component {
  componentDidMount() {
    const isCoursesEmpty = !this.props.courses.length;
    if (isCoursesEmpty) {
      this.props.fetchCourses();
    }
  }

  render() {
    const { isFetching, courses, searchTerm, error, fetchCourses } = this.props;
    if (isFetching && !courses.length) {
      return <LoadingSpinner />;
    }

    if (error && !courses.length) {
      return <FetchError onRetry={fetchCourses} />;
    }
    let searchResults = courses;
    if (searchTerm.length > 1) {
      const filteredCourses = filterCourses(searchTerm, courses);
      searchResults = sortCourses(searchTerm, filteredCourses);
    }
    return <CourseList searchTerm={searchTerm} searchResults={searchResults} />;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.courses),
    courses: getCourses(state.courses),
    error: getError(state.courses)
  };
};

const mapDispatchToProps = {
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseListContainer
);

CourseListContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
  error: PropTypes.object,
  fetchCourses: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};
