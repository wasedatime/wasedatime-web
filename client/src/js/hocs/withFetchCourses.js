import React from 'react';
import { connect } from 'react-redux';

import { fetchCourses, hydrateAddedCourses } from '../actions/syllabus';
import { getIsFetching, getFetchedIds, getFetchedById, getError } from '../reducers/fetchedCourses';
import { getPrefs, getAddedCourses, getAddedCoursesAndPrefs } from '../reducers/addedCourses';
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
      const { addedCourses, prefs, fetchedCourseIds, fetchedCoursesById,
        hydrateAddedCourses } = this.props;
      // if addedCourses is not hydrated, prefs is not empty, and courses are fetched
      if (!addedCourses.length &&
        prefs.length &&
        fetchedCourseIds.length
      ) {
        hydrateAddedCourses(prefs, fetchedCoursesById);
      }
    }

    render() {
      const { isFetching, fetchedCourseIds, fetchedCoursesById, error,
        addedCourses, prefs, addedCoursesAndPrefs,
        fetchCourses,} = this.props;

      if (isFetching && !fetchedCourseIds.length) {
        return <LoadingSpinner />;
      }
      if (error && !fetchedCourseIds.length) {
        return <FetchError onRetry={fetchCourses} />;
      }
      if (prefs.length && !addedCourses.length) {
        return <LoadingSpinner message={"Initializing your added courses"}/>;
      }

      const fetchedCourses = fetchedCourseIds.map(id => (
        fetchedCoursesById[id]
      ));

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
      prefs: getPrefs(state.addedCourses),
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
}

export default withFetchCourses;
