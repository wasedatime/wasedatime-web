import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { fetchCourseById } from '../actions/index';
import BlankCoursePage from '../components/BlankCoursePage';
import CoursePage from '../components/CoursePage';
import NotFound from '../components/NotFound';
import FetchError from '../components/FetchError';

class CoursePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.courseId = this.props.match.params.courseId;
    this.state = {
      isFetching: true,
      coursePage: {},
      error: null
    };
  }

  async fetchData() {
    try {
      const res = await axios.get(`/api/courses/${this.courseId}`);
      this.setState({
        isFetching: false,
        coursePage: res.data
      });
    } catch (error) {
      this.setState({
        isFetching: false,
        error: error.response
      });
    }
  }

  //Avoid creating an arrow function wrapper and binds in render.
  handleRetry = async e => {
    e.preventDefault();
    this.setState({
      isFetching: true,
      error: null
    });
    await this.fetchData();
  };

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    if (this.state.isFetching) {
      return <BlankCoursePage />;
    }

    const hasErrorMessage = this.state.error ? true : false;
    if (hasErrorMessage) {
      switch (this.state.error.status) {
        case 404:
          return <NotFound />;
        default:
          return <FetchError onRetry={this.handleRetry} />;
      }
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
