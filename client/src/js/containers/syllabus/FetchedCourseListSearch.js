import React from 'react';
import debounce from 'lodash/debounce';
import MediaQuery from 'react-responsive';

import { searchCourses, sortCourses } from '../../utils/courseSearch';
import SearchBar from '../../components/syllabus/SearchBar';
import FetchedCourseList from '../../components/syllabus/FetchedCourseList';
import Filter from '../../components/syllabus/Filter';
import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import { SideBar } from '../../styled-components/SideBar';
import { sizes } from '../../utils/styledComponents';
import { fallSemesters, springSemesters } from '../../data/semesters';

const ExtendedWrapper = Wrapper.extend`
  flex: 1 0 0;
`;

const F_COURSE_SEARCH_PLACE_HOLDER = 'Course titles, instructors';

class FetchedCourseSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterGroups: {
        semester: [],
        school: [],
        lang: [],
        special: []
      },
      inputText: '',
      searchTerm: '',
      filteredCourses: props.fetchedCourses
    };
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTerm.cancel();
  }

  handleToggleFilter = (inputName, value) => {
    const { [inputName]: filters, ...rest } = this.state.filterGroups;
    const newFilters = filters.includes(value)
      ? filters.filter(elem => elem !== value)
      : [...filters, value];
    const newFilterGroups = {
      [inputName]: newFilters,
      ...rest
    };
    const newFilteredCourses = this.filterCourses(
      newFilterGroups,
      this.props.fetchedCourses
    );
    this.setState({
      filterGroups: newFilterGroups,
      filteredCourses: newFilteredCourses
    });
  };

  filterCourses = (filterGroups, courses) => {
    const semesters = filterGroups.semester;
    let semesterFilters = [];
    // if not empty not full
    if (semesters.length !== 0 && semesters.length !== 2) {
      if (semesters.includes('fall')) {
        semesterFilters = semesterFilters.concat(fallSemesters);
      }
      if (semesters.includes('spring')) {
        semesterFilters = semesterFilters.concat(springSemesters);
      }
    }

    let filteredCourses =
      semesterFilters.length === 0
        ? courses
        : courses.filter(course => semesterFilters.includes(course.term));
    return filteredCourses;
  };

  updateSearchTerm = () => {
    this.setState({
      searchTerm: this.state.inputText
    });
  };

  debounceUpdateSearchTerm = debounce(this.updateSearchTerm, 400, {
    leading: false
  });

  handleInputChange = inputText => {
    this.setState({
      inputText
    });
    this.debounceUpdateSearchTerm();
  };

  render() {
    const { inputText, searchTerm } = this.state;
    const results =
      searchTerm.length > 1
        ? sortCourses(
            searchTerm,
            searchCourses(searchTerm, this.state.filteredCourses)
          )
        : this.state.filteredCourses;
    return (
      <ExtendedWrapper>
        <SearchBar
          onInputChange={this.handleInputChange}
          placeholder={F_COURSE_SEARCH_PLACE_HOLDER}
          inputText={inputText}
        />
        <RowWrapper>
          <FetchedCourseList searchTerm={searchTerm} results={results} />
          <MediaQuery minWidth={sizes.desktop}>
            {matches => {
              return (
                matches && (
                  <SideBar flexBasis="17em">
                    <Filter handleToggleFilter={this.handleToggleFilter} />
                  </SideBar>
                )
              );
            }}
          </MediaQuery>
        </RowWrapper>
      </ExtendedWrapper>
    );
  }
}

export default FetchedCourseSearch;
