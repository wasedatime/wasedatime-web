import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import { removeCourse } from '../../actions/syllabus';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import AddedCourseList from '../../components/syllabus/AddedCourseList';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const A_COURSES_SEARCH_PLACE_HOLDER = 'Course titles, instructors';

class AddedCourseSearch extends React.Component {
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
    const isSearching = searchTerm.length > 1;
    const results = isSearching ?
      sortCourses(searchTerm, filterCourses(searchTerm, addedCourses)) :
      addedCourses;
    return (
      <ExtendedWrapper>
        <SearchBar
          onInputChange = {this.handleInputChange}
          placeholder = {A_COURSES_SEARCH_PLACE_HOLDER}
          inputText = {inputText}
        />
        <AddedCourseList
          isSearching={isSearching}
          searchTerm={searchTerm}
          results={results}
        />
      </ExtendedWrapper>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//
//   };
// };

const mapDispatchToProps = {
  fetchCourses,
  removeCourse
};

export default connect(null, mapDispatchToProps)(
  AddedCourseSearch
);
