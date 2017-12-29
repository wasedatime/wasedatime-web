import React from 'react';
import { connect } from 'react-redux';

import CourseList from '../components/CourseList';
import PropTypes from 'prop-types';
import '../styles/courseList.css';

class CourseListContainer extends React.Component {
  render() {
    return (
      <div className="courseListContainer__wrapper">
        <div className="courseListContainer__overlay">
          <CourseList courseResults={this.props.courseResults} />{' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ courseResults }) => {
  return { courseResults };
};

export default connect(mapStateToProps)(CourseListContainer);
