import React from 'react';
import { connect } from 'react-redux';

import { fetchCourses, hydrateAddedCourses } from '../actions/syllabus';
import {
  getIsFetching,
  getFetchedIds,
  getFetchedById,
  getError
} from '../reducers/fetchedCourses';
import {
  getAddedCourses,
  getIsAddedCoursesEmpty,
  getPrefs,
  getIsPrefsEmpty,
  getAddedCoursesAndPrefs
} from '../reducers/addedCourses';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchError from '../components/FetchError';

const withFetchCourses = WrappedComponent => {
  class WithFetchCoursesComponent extends React.Component {
    componentDidMount() {
      if (!this.props.fetchedCourseIds.length) {
        this.props.fetchCourses();
      }
    }

    componentDidUpdate() {
      const {
        isAddedCoursesEmpty,
        prefs,
        isPrefsEmpty,
        fetchedCourseIds,
        fetchedCoursesById,
        hydrateAddedCourses
      } = this.props;
      // if prefs is not empty, addedCourses is empty, and courses are fetched
      if (!isPrefsEmpty && isAddedCoursesEmpty && fetchedCourseIds.length) {
        hydrateAddedCourses(prefs, fetchedCoursesById);
      }
    }

    render() {
      const {
        isFetching,
        fetchedCourseIds,
        fetchedCoursesById,
        error,
        addedCourses,
        isAddedCoursesEmpty,
        isPrefsEmpty,
        addedCoursesAndPrefs,
        fetchCourses
      } = this.props;

      if (isFetching && !fetchedCourseIds.length) {
        return <LoadingSpinner />;
      }
      if (error && !fetchedCourseIds.length) {
        return <FetchError onRetry={fetchCourses} />;
      }
      if (!isPrefsEmpty && isAddedCoursesEmpty) {
        return <LoadingSpinner message={'Initializing your added courses'} />;
      }

      const fetchedCourses = fetchedCourseIds.map(id => fetchedCoursesById[id]);

      return (
        <WrappedComponent
          fetchedCourses={fetchedCourses}
          addedCourses={addedCourses}
          addedCoursesAndPrefs={addedCoursesAndPrefs}
        />
      );
    }
  }

  const mapStateToProps = state => {
    return {
      isFetching: getIsFetching(state.fetchedCourses),
      fetchedCourseIds: getFetchedIds(state.fetchedCourses),
      fetchedCoursesById: getFetchedById(state.fetchedCourses),
      error: getError(state.fetchedCourses),
      addedCourses: getAddedCourses(state.addedCourses),
      isAddedCoursesEmpty: getIsAddedCoursesEmpty(state.addedCourses),
      prefs: getPrefs(state.addedCourses),
      isPrefsEmpty: getIsPrefsEmpty(state.addedCourses),
      addedCoursesAndPrefs: getAddedCoursesAndPrefs(state.addedCourses)
    };
  };

  const mapDispatchToProps = {
    fetchCourses,
    hydrateAddedCourses
  };

  return connect(mapStateToProps, mapDispatchToProps)(
    WithFetchCoursesComponent
  );
};

export default withFetchCourses;
