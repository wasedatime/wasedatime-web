import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCourses } from '../actions/syllabus';
import { getIsFetching, getCourses, getError } from '../reducers/fetchedCourses';
import { filterCourses, sortCourses } from '../utils/courseSearch';
import CourseAdder from '../components/timetable/CourseAdder';
// import LoadingSpinner from '../components/LoadingSpinner';
// import FetchError from '../components/FetchError';

const RESULTS_LIMIT = 300;

class CourseAdderContainer extends React.Component {
  componentDidMount() {
    const isCoursesEmpty = !this.props.courses.length;
    if (isCoursesEmpty) {
      this.props.fetchCourses();
    }
  }

  getFilteredCourses = searchTerm => {
    if (searchTerm.length > 1) {
      const filteredCourses = filterCourses(searchTerm, this.props.courses);
      return sortCourses(searchTerm, filteredCourses.slice(0, RESULTS_LIMIT));
    }
    return this.props.courses.slice(0, RESULTS_LIMIT);
  }

  render() {
    const { isFetching, courses, error, fetchCourses } = this.props;
    if (isFetching && !courses.length) {
      return (
        <span>Loading...</span>
      );
    }

    if (error && !courses.length) {
      return (
        <div>
          <span>Fetch error.</span>
          <button onClick={fetchCourses}>Retry</button>
        </div>
      );
    }

    return <CourseAdder getFilteredCourses={this.getFilteredCourses} />;
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
  CourseAdderContainer
);

CourseAdderContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
  error: PropTypes.object,
  fetchCourses: PropTypes.func.isRequired
};
