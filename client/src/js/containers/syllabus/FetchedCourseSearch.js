import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import { filterCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import FetchedCourseList from '../../components/syllabus/FetchedCourseList';
import Filter from '../../components/syllabus/Filter';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { SideBar } from '../../styled-components/SideBar';
import { sizes } from '../../utils/styledComponents';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`

const ExtendedRowWrapper = RowWrapper.extend`
  flex: 1 0 0;
`

const F_COURSE_SEARCH_PLACE_HOLDER = 'Course titles, instructors';

class FetchedCourseSearch extends React.Component {
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
    const { fetchedCourses } = this.props;
    const { inputText, searchTerm } = this.state;
    const results = searchTerm.length > 1 ?
      sortCourses(searchTerm, filterCourses(searchTerm, fetchedCourses)) :
      fetchedCourses;
    return (
        <ExtendedWrapper>
          <SearchBar
            onInputChange = {this.handleInputChange}
            placeholder = {F_COURSE_SEARCH_PLACE_HOLDER}
            inputText = {inputText}
          />
          <RowWrapper>
            <FetchedCourseList
              searchTerm={searchTerm}
              results={results}
            />
            <MediaQuery minWidth={sizes.desktop}>
              {matches => {
                return (
                matches &&
                  <SideBar flexBasis="17em">
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

export default FetchedCourseSearch;
