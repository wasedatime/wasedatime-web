import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import { fetchCourses } from '../../actions/syllabus';
import { getIsFetching, getCourses, getError } from '../../reducers/fetchedCourses';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import CourseList from '../../components/syllabus/CourseList';
import LoadingSpinner from '../../components/LoadingSpinner';
import FetchError from '../../components/FetchError';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const SEARCHBAR_PLACE_HOLDER = 'Course titles, instructors';

class CourseListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchTerm: ''
    };
  }

  componentDidMount() {
    if (!this.coursesLength) {
      this.props.fetchCourses();
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
    const { isFetching, courses, error, fetchCourses } = this.props;
    const { inputText, searchTerm } = this.state;
    if (isFetching && !this.coursesLength) {
      return <LoadingSpinner />;
    }
    if (error && !this.coursesLength) {
      return <FetchError onRetry={fetchCourses} />;
    }
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
        <CourseList
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
    courses: getCourses(state.fetchedCourses),
    error: getError(state.fetchedCourses)
  };
};

const mapDispatchToProps = {
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseListContainer
);

CourseListContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
  error: PropTypes.object,
  fetchCourses: PropTypes.func.isRequired
};
