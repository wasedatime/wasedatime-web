import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { filterCourses, sortCourses } from '../utils/syllabusSearch';
import CourseList from '../components/CourseList';
import LoadingSpinner from '../components/LoadingSpinner';
import courses from '../data/2017F_courses_sci_eng_search.json';
import '../styles/courseList.css';

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
      this.setState({ loading: true, courses });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingSpinner />;
    }
    console.log('rendering');
    const searchTerm = this.props.searchTerm;
    let courseResults = courses;
    if (searchTerm.length > 1) {
      const filteredCourses = filterCourses(searchTerm, courses);
      courseResults = sortCourses(searchTerm, filteredCourses);
    }
    return (
      <div className="courseListContainer__wrapper">
        <div className="courseListContainer__overlay">
          <CourseList searchTerm={searchTerm} courseResults={courseResults} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }, ownProps) => {
  return { searchTerm };
};

export default connect(mapStateToProps)(CourseListContainer);

CourseListContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired
};
