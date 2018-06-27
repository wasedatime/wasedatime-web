import React from 'react';
import { connect } from 'react-redux';
import chunk from 'lodash/chunk';
import PropTypes from 'prop-types';

import { fetchCourses } from '../actions/syllabus';
import { getIsFetching, getCourses, getError } from '../reducers/fetchedCourses';
import { filterCourses, sortCourses } from '../utils/courseSearch';
import CourseList from '../components/syllabus/CourseList';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchError from '../components/FetchError';

const COURSES_PER_CHUNK = 5;

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
    const results = searchTerm.length > 1 ?
      sortCourses(searchTerm, filterCourses(searchTerm, courses)) :
      courses;
    const resultChunks = chunk(results, COURSES_PER_CHUNK);
    return <CourseList
      searchTerm={searchTerm}
      resultsCount={results.length}
      resultsChunks={resultChunks.slice(0,5)}
    />;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.fetchedCourses),
    courses: getCourses(state.fetchedCourses),
    error: getError(state.fetchedCourses)
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
