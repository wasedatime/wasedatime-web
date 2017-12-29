import React from 'react';
import { connect } from 'react-redux';

import { searchCourses } from '../actions/index';
import PropTypes from 'prop-types';

class CourseSearch extends React.Component {
  componentDidMount() {
    this.props.searchCourses();
  }

  render() {
    return <div>Search Bar</div>;
  }
}

const mapStateToProps = ({ courseResults }) => {
  console.log(courseResults);
  return { courseResults };
};

const mapDispatchToProps = {
  searchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
