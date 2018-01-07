import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { fetchCourseById } from '../actions/index';
import BlankCoursePage from '../components/BlankCoursePage';
import CoursePage from '../components/CoursePage';

class CoursePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courseId = this.props.match.params.courseId;
    this.state = {
      isFetching: true,
      coursePage: {}
    };
  }

  async componentDidMount() {
    const res = await axios.get(`/api/courses/${this.courseId}`);
    this.setState({
      isFetching: false,
      coursePage: res.data
    });
  }

  render() {
    if (this.state.isFetching) {
      return <BlankCoursePage />;
    }

    if (this.state.coursePage._id) {
      return <CoursePage coursePage={this.state.coursePage} />;
    } else {
      return <Redirect from={this.props.match.url} to="/syllabus" />;
    }
  }
}

export default CoursePageContainer;

CoursePageContainer.propTypes = {
  match: PropTypes.object.isRequired
};
