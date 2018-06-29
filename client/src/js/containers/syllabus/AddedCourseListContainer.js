import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import { removeCourse } from '../../actions/syllabus';
import { getCourses } from '../../reducers/addedCourses';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
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
    const { courses } = this.props;
    const { inputText, searchTerm } = this.state;
    const results = searchTerm.length > 1 ?
      sortCourses(searchTerm, filterCourses(searchTerm, courses)) :
      courses;
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
    courses: getCourses(state.addedCourses)
  };
};

const mapDispatchToProps = {
  removeCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddedCourseListContainer
);
