import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { filterCourses, sortCourses } from '../utils/syllabusSearch';
import CourseList from '../components/CourseList';
import LoadingSpinner from '../components/LoadingSpinner';

class CourseListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      courses: []
    };
  }

  componentDidMount() {
    axios.get('/api/courses').then(res => {
      const courses = res.data;
      this.setState({ loading: false, courses });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingSpinner />;
    }
    const searchTerm = this.props.searchTerm;
    let courseResults = this.state.courses;
    if (searchTerm.length > 1) {
      const filteredCourses = filterCourses(searchTerm, this.state.courses);
      courseResults = sortCourses(searchTerm, filteredCourses);
    }
    return <CourseList searchTerm={searchTerm} courseResults={courseResults} />;
  }
}

const mapStateToProps = ({ searchTerm }, ownProps) => {
  return { searchTerm };
};

export default connect(mapStateToProps)(CourseListContainer);

CourseListContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
};
