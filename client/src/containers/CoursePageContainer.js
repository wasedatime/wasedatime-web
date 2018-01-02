import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchCourseById } from '../actions/index';
import CoursePage from '../components/CoursePage';

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
      return <CoursePage coursePage={this.props.coursePage} />;
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

CoursePageContainer.propTypes = {
  match: PropTypes.object.isRequired,
  coursePage: PropTypes.object.isRequired,
  fetchCourseById: PropTypes.func.isRequired
};
