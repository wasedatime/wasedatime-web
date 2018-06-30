import React from 'react';
import debounce from 'lodash/debounce';

import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import AddedCourseList from '../../components/syllabus/AddedCourseList';
import { Wrapper } from '../../styled-components/Wrapper';

const A_COURSES_SEARCH_PLACE_HOLDER = 'Course titles, instructors';

class AddedCourseSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchTerm: ''
    };
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
    const { addedCourses } = this.props;
    const { inputText, searchTerm } = this.state;

    const isSearching = searchTerm.length > 1;
    const results = isSearching ?
      sortCourses(searchTerm, filterCourses(searchTerm, addedCourses)) :
      addedCourses;
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default AddedCourseSearch;
