import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchCourses, hydrateAddedCourses } from '../../actions/syllabus';
import { getIsFetching, getFetchedIds, getFetchedById, getError } from '../../reducers/fetchedCourses';
import { getProperties, getAddedCourses } from '../../reducers/addedCourses';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import LoadingSpinner from '../../components/LoadingSpinner';
import FetchError from '../../components/FetchError';
import AddedCourseSearch from './AddedCourseSearch';
import FetchedCourseSearch from './FetchedCourseSearch';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { sizes } from '../../utils/styledComponents';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const ExtendedRowWrapper = RowWrapper.extend`
  flex: 1 0 0;
`

class CourseSearchContainer extends React.Component {

  componentDidMount() {
    if (!this.props.courses.length) {
      this.props.fetchCourses();
    }
  }

  render() {
    const { isFetching, fetchedCourseIds , fetchedCoursesById, error,
      addedCourses, properties, fetchCourses } = this.props;
    const { inputText, searchTerm } = this.state;
    if (isFetching && !fetchedCourseIds.length) {
      return <LoadingSpinner />;
    }
    if (error && !fetchedCourseIds.length) {
      return <FetchError onRetry={fetchCourses} />;
    }
    const results = searchTerm.length > 1 ?
      sortCourses(searchTerm, filterCourses(searchTerm, courses)) :
      courses;
    return (
      <ExtendedRowWrapper>
        <MediaQuery minWidth={sizes.tablet}>
          {matches => (
            matches &&
              <SideBar flexBasis="21em">
                <AddedCourseSearch />
              </SideBar>
          )}
        </MediaQuery>
        <FetchedCourseSearch />
      </ExtendedRowWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.fetchedCourses),
    fetchedCourseIds: getFetchedIds(state.fetchedCourses),
    fetchedCoursesById: getFetchedById(state.fetchedCourses),
    error: getError(state.fetchedCourses),
    addedCourses: getAddedCourses(state.addedCourses),
    properties: getProperties(state.addedCourses)
  };
};

const mapDispatchToProps = {
  fetchCourses,
  hydrateAddedCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseSearchContainer
);

CourseSearchContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
  error: PropTypes.object,
  fetchCourses: PropTypes.func.isRequired
};
