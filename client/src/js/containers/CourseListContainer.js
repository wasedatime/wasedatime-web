import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCourses, searchCourses } from '../actions/index';
import {
  getIsFetching,
  getCourses,
  getErrorMessage
} from '../reducers/courses';
import { getSearchTerm } from '../reducers/searchTerm';
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
    const { isFetching, courses, errorMessage, searchTerm } = this.props;
    if (isFetching && !courses.length) {
      return <LoadingSpinner />;
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
    errorMessage: getErrorMessage(state.courses),
    searchTerm: getSearchTerm(state.searchTerm)
  };
};

const mapDispatchToProps = {
  fetchCourses,
  searchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseListContainer
);

CourseListContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
};
