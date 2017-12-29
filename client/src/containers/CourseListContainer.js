import React from 'react';
import { connect } from 'react-redux';

import CourseList from '../components/CourseList';
import PropTypes from 'prop-types';

class CourseListContainer extends React.Component {
  render() {
    return <CourseList courseResults={this.props.courseResults} />;
  }
}

const mapStateToProps = ({ courseResults }) => {
  return { courseResults };
};

export default connect(mapStateToProps)(CourseListContainer);
