import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchCourses } from '../../actions/syllabus';
import { getIsFetching, getCourses, getError } from '../../reducers/fetchedCourses';
import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import CourseList from '../../components/syllabus/CourseList';
import Filter from '../../components/syllabus/Filter';
import LoadingSpinner from '../../components/LoadingSpinner';
import FetchError from '../../components/FetchError';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { sizes } from '../../utils/styledComponents';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const SideBar = styled('div')`
  flex: 0 0 17em;
  background-color: rgba(0,0,0,0.2);
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
    if (!this.props.courses.length) {
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
    if (isFetching && !courses.length) {
      return <LoadingSpinner />;
    }
    if (error && !courses.length) {
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
        <RowWrapper>
          <CourseList
            searchTerm={searchTerm}
            results={results}
          />
          <MediaQuery minWidth={sizes.desktop}>
            {matches => {
              return (
              matches &&
                <SideBar>
                  <Filter />
                </SideBar>
              )
            }}
          </MediaQuery>
        </RowWrapper>
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
