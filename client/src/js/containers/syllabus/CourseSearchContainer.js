import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import { fetchCourses, hydrateAddedCourses } from '../../actions/syllabus';
import { getIsFetching, getFetchedIds, getFetchedById, getError } from '../../reducers/fetchedCourses';
import { getProperties, getAddedCourses } from '../../reducers/addedCourses';
import LoadingSpinner from '../../components/LoadingSpinner';
import FetchError from '../../components/FetchError';
import AddedCourseSearch from './AddedCourseSearch';
import FetchedCourseSearch from './FetchedCourseSearch';
import { RowWrapper } from '../../styled-components/Wrapper';
import { SideBar } from '../../styled-components/SideBar';
import { sizes } from '../../utils/styledComponents';

const ExtendedRowWrapper = RowWrapper.extend`
  flex: 1 0 0;
`

class CourseSearchContainer extends React.Component {

  componentDidMount() {
    if (!this.props.fetchedCourseIds.length) {
      this.props.fetchCourses();
    }
  }

  componentDidUpdate() {
    const { addedCourses, properties, fetchedCourseIds, fetchedCoursesById,
      hydrateAddedCourses } = this.props;
    // if addedCourses is not hydrated, properties is not empty, and courses are fetched
    if (!addedCourses.length &&
      properties.length &&
      fetchedCourseIds.length
    ) {
      hydrateAddedCourses(properties, fetchedCoursesById);
    }
  }

  render() {
    const { isFetching, fetchedCourseIds, fetchedCoursesById, error,
      addedCourses, properties, fetchCourses } = this.props;

    if (isFetching && !fetchedCourseIds.length) {
      return <LoadingSpinner />;
    }
    if (error && !fetchedCourseIds.length) {
      return <FetchError onRetry={fetchCourses} />;
    }
    if (properties.length && !addedCourses.length) {
      return <LoadingSpinner message={"Initializing your added courses"}/>;
    }

    const fetchedCourses = fetchedCourseIds.map(id => (
      fetchedCoursesById[id]
    ));

    return (
      <ExtendedRowWrapper>
        <MediaQuery minWidth={sizes.tablet}>
          {matches => (
            matches &&
              <SideBar flexBasis="21em">
                <AddedCourseSearch addedCourses={addedCourses}/>
              </SideBar>
          )}
        </MediaQuery>
        <FetchedCourseSearch fetchedCourses={fetchedCourses}/>
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
  error: PropTypes.object,
  fetchCourses: PropTypes.func.isRequired
};
