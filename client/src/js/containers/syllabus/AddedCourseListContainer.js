import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import { hydrateAddedCourses, fetchCourses, removeCourse } from '../../actions/syllabus';
import { getIsFetching, getFetchedById, getError } from '../../reducers/fetchedCourses';
import { getProperties, getAddedCourses } from '../../reducers/addedCourses';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner';
import FetchError from '../../components/FetchError';
import AddedCourseList from '../../components/syllabus/AddedCourseList';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const SEARCHBAR_PLACE_HOLDER = 'Course titles, instructors';

class AddedCourseListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchTerm: ''
    };
  }

  componentDidUpdate() {
    const { addedCourses, properties,
      fetchedCoursesById, hydrateAddedCourses } = this.props;
    // if addedCourses is not hydrated, properties is not empty, and courses are fetched
    if (!addedCourses.length &&
      properties.length &&
      Object.keys(fetchedCoursesById).length
    ) {
      hydrateAddedCourses(properties, fetchedCoursesById);
    }
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTerm.cancel();
  }

  updateSearchTerm = () => {
    this.setState({
      searchTerm: this.state.inputText
    });
  }

  debounceUpdateSearchTerm = debounce(
    this.updateSearchTerm,
    400,
    { leading: false }
  );

  handleInputChange = (inputText) => {
    this.setState({
      inputText
    });
    this.debounceUpdateSearchTerm();
  }

  render() {
    const { isFetching, fetchedCoursesById, error, fetchCourses,
      addedCourses, properties } = this.props;
    const { inputText, searchTerm } = this.state;

    if (!addedCourses.length &&
      properties.length &&
      isFetching &&
      !Object.keys(fetchedCoursesById).length) {
      return <LoadingSpinner message={"Initializing your added courses"}/>;
    }
    if (error && !Object.keys(fetchedCoursesById).length) {
      return <FetchError onRetry={fetchCourses} />;
    }

    const results = searchTerm.length > 1 ?
      sortCourses(searchTerm, filterCourses(searchTerm, addedCourses)) :
      addedCourses;
    return (
      <ExtendedWrapper>
        <SearchBar
          onInputChange = {this.handleInputChange}
          placeholder = {SEARCHBAR_PLACE_HOLDER}
          inputText = {inputText}
        />
        <AddedCourseList
          searchTerm={searchTerm}
          results={results}
        />
      </ExtendedWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state.fetchedCourses),
    fetchedCoursesById: getFetchedById(state.fetchedCourses),
    error: getError(state.fetchedCourses),
    addedCourses: getAddedCourses(state.addedCourses),
    properties: getProperties(state.addedCourses)
  };
};

const mapDispatchToProps = {
  fetchCourses,
  hydrateAddedCourses,
  removeCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddedCourseListContainer
);
