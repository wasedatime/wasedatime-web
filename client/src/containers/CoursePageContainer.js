import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchCourseById } from '../actions/index';
import PropTypes from 'prop-types';
import CoursePage from '../components/CoursePage';
import '../styles/coursePage.css';

class CoursePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courseId = this.props.match.params.courseId;
    this.redirect = false;
  }

  componentDidMount() {
    this.props.fetchCourseById(this.courseId);
  }

  render() {
    if (this.props.coursePage._id) {
      return (
        <div className="coursePageContainer__wrapper">
          <div className="coursePageContainer__overlay">
            <CoursePage coursePage={this.props.coursePage} />
          </div>
        </div>
      );
    } else {
      return <Redirect from={this.props.match.url} to="/syllabus" />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const coursePage = state.coursePage;
  return { coursePage };
};

const mapDispatchToProps = {
  fetchCourseById
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CoursePageContainer
);
