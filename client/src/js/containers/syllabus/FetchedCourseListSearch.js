import React from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router";
import queryString from "query-string";
import styled from "styled-components";

import { searchCourses, sortCourses } from "../../utils/courseSearch";
import SearchBar from "../../components/syllabus/SearchBar";
import FetchedCourseList from "../../components/syllabus/FetchedCourseList";
import Filter from "../../components/syllabus/Filter";
import FilterButton from "../../components/syllabus/FilterButton";
import Modal from "../../components/Modal";
import { Wrapper, RowWrapper } from "../../styled-components/Wrapper";
import { SideBar } from "../../styled-components/SideBar";
import { sizes } from "../../styled-components/utils";
import { fallSemesters, springSemesters } from "../../data/semesters";
import { getSearchLang } from "../../utils/courseSearch";
import { getUserDisplayLang } from "../../reducers/user";

const F_COURSE_SEARCH_PLACE_HOLDER = "Search course, instructor, 科目, 教師";

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 0 0;
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1050"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    padding: 0
  }
};

class FetchedCourseSearch extends React.Component {
  constructor(props) {
    super(props);
    const parsedSearch = queryString.parse(this.props.location.search);
    const parsedSearchQ = parsedSearch.q;
    const searchTerm = parsedSearchQ === undefined ? "" : parsedSearchQ;
    const searchLang =
      searchTerm === "" ? this.props.searchLang : getSearchLang(searchTerm);
    this.state = {
      isModalOpen: false,
      filterGroups: {
        semester: [],
        school: [],
        lang: [],
        special: [],
        day: [],
        period: []
      },
      inputText: searchTerm,
      searchTerm: searchTerm,
      searchLang: searchLang,
      filteredCourses: props.fetchedCourses
    };
  }

  componentDidMount() {
    //TODO need to init searchTerm from reducers here.
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTermAndLang.cancel();
  }

  handleToggleModal = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  };

  handleToggleFilter = (inputName, value) => {
    this.setState((prevState, props) => {
      const { [inputName]: filters, ...rest } = prevState.filterGroups;
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
      return {
        filterGroups: newFilterGroups,
        filteredCourses: newFilteredCourses
      };
    });
  };

  filterCourses = (filterGroups, courses) => {
    const semesters = filterGroups.semester;
    let semesterFilters = [];
    // if not empty not full
    if (semesters.length !== 0 && semesters.length !== 2) {
      if (semesters.includes("fall")) {
        semesterFilters = semesterFilters.concat(fallSemesters);
      }
      if (semesters.includes("spring")) {
        semesterFilters = semesterFilters.concat(springSemesters);
      }
    }
    let filteredCourses =
      semesterFilters.length === 0
        ? courses
        : courses.filter(course => semesterFilters.includes(course.term));

    const schoolFilters = filterGroups.school;
    filteredCourses =
      schoolFilters.length === 0 || schoolFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter(course => {
            const keys = course.keys;
            for (let i = 0; i < keys.length; i++) {
              if (schoolFilters.includes(keys[i].school)) return true;
            }
            return false;
          });

    const langFilters = filterGroups.lang;
    filteredCourses =
      langFilters.length === 0 || langFilters.length === 3
        ? filteredCourses
        : filteredCourses.filter(course => langFilters.includes(course.lang));

    const specialFilters = filterGroups.special;
    filteredCourses =
      specialFilters.length === 0
        ? filteredCourses
        : filteredCourses.filter(course => {
            const keywords = course.keywords;
            if (keywords === undefined) return false;
            for (let i = 0; i < keywords.length; i++) {
              if (specialFilters.includes(keywords[i])) return true;
            }
            return false;
          });

    const dayFilters = filterGroups.day;
    filteredCourses =
      dayFilters.length === 0 || dayFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter(course => {
            const occurrences = course.occurrences;
            for (let i = 0; i < occurrences.length; i++) {
              if (dayFilters.includes(occurrences[i].day.toString()))
                return true;
            }
            return false;
          });

    const periodFilters = filterGroups.period;

    filteredCourses =
      periodFilters.length === 0 || periodFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter(course => {
            const occurrences = course.occurrences;

            for (let i = 0; i < periodFilters.length; i++) {
              const period = parseInt(periodFilters[i], 10);
              for (let j = 0; j < occurrences.length; j++) {
                if (
                  occurrences[j].start_period <= period &&
                  period <= occurrences[j].end_period
                ) {
                  return true;
                }
              }
            }
            return false;
          });
    return filteredCourses;
  };

  pushHistory = () => {
    this.props.history.push({
      pathname: "/syllabus",
      search: this.state.inputText === "" ? "" : `q=${this.state.inputText}`
    });
  };

  updateSearchTermAndLang = () => {
    this.setState((prevState, props) => {
      const searchTerm = prevState.inputText;
      const searchLang = getSearchLang(searchTerm);
      return {
        searchTerm: prevState.inputText,
        searchLang: searchLang
      };
    }, this.pushHistory());
  };

  debounceUpdateSearchTermAndLang = debounce(
    this.updateSearchTermAndLang,
    500,
    {
      leading: false
    }
  );

  handleInputChange = inputText => {
    this.setState(
      {
        inputText
      },
      this.debounceUpdateSearchTermAndLang()
    );
  };

  render() {
    const { inputText, searchTerm, searchLang } = this.state;
    //TODO debounce here? it's executed in every render which happens every time a user changes input.
    const results =
      searchTerm.length > 0
        ? sortCourses(
            searchTerm,
            searchCourses(searchTerm, this.state.filteredCourses, searchLang),
            searchLang
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
          <FetchedCourseList
            searchTerm={searchTerm}
            searchLang={searchLang}
            results={results}
          />
          <MediaQuery minWidth={sizes.desktop}>
            {matches => {
              return matches ? (
                <SideBar flexBasis="20em">
                  <Filter
                    filterGroups={this.state.filterGroups}
                    handleToggleFilter={this.handleToggleFilter}
                    isSideBar={true}
                  />
                </SideBar>
              ) : (
                <div>
                  <FilterButton
                    isModalOpen={this.state.isModalOpen}
                    handleToggleModal={this.handleToggleModal}
                  />
                  <Modal isOpen={this.state.isModalOpen} style={modalStyle}>
                    <Filter
                      filterGroups={this.state.filterGroups}
                      handleToggleFilter={this.handleToggleFilter}
                      isSideBar={false}
                    />
                  </Modal>
                </div>
              );
            }}
          </MediaQuery>
        </RowWrapper>
      </ExtendedWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchLang: getUserDisplayLang(state)
  };
};

export default withRouter(connect(mapStateToProps)(FetchedCourseSearch));
