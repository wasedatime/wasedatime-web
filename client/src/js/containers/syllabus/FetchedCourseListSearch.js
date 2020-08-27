import React from "react";
import debounce from "lodash/debounce";
import sortBy from "lodash/sortBy";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router";
import { withNamespaces } from "react-i18next";
import queryString from "query-string";
import styled from "styled-components";
import ReactGA from "react-ga";

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
import { gaFilter } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenModal,
  gaCloseModal,
  gaApplyFilter,
  gaRemoveFilter
} from "../../ga/eventActions";

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
    overflowScrolling: "touch",
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
      filteredCourses: props.fetchedCourses
    };
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTerm.cancel();
  }

  handleToggleModal = event => {
    event.preventDefault();
    const gaAction = this.state.isModalOpen ? gaCloseModal : gaOpenModal;
    ReactGA.event({
      category: gaFilter,
      action: gaAppendActionWithLng(gaAction, this.props.lng)
    });
    this.setState((prevState, props) => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  };

  handleToggleFilter = (inputName, value) => {
    this.setState((prevState, props) => {
      const { [inputName]: filters, ...rest } = prevState.filterGroups;
      let newFilters, gaAction;
      if (filters.includes(value)) {
        newFilters = filters.filter(elem => elem !== value);
        gaAction = gaRemoveFilter;
      } else {
        newFilters = [...filters, value];
        gaAction = gaApplyFilter;
      }
      ReactGA.event({
        category: gaFilter,
        action: gaAppendActionWithLng(gaAction, this.props.lng),
        label: `${inputName} - ${value}`
      });
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

  updateSearchTerm = () => {
    this.setState((prevState, props) => {
      return {
        searchTerm: prevState.inputText
      };
    }, this.pushHistory());
  };

  debounceUpdateSearchTerm = debounce(this.updateSearchTerm, 500, {
    leading: false
  });

  handleInputChange = inputText => {
    this.setState(
      {
        inputText
      },
      this.debounceUpdateSearchTerm()
    );
  };

  sortCoursesWithEvalsExistence = courses =>
    sortBy(courses, course => (course.has_evals ? 1 : 2));

  render() {
    const { inputText, searchTerm } = this.state;
    const searchLang =
      searchTerm === "" ? this.props.lng : getSearchLang(searchTerm);
    const { t } = this.props;
    //TODO debounce here? it's executed in every render which happens every time a user changes input.
    const results =
      searchTerm.length > 0
        ? sortCourses(
            searchTerm,
            searchCourses(searchTerm, this.state.filteredCourses, searchLang),
            searchLang
          )
        : this.sortCoursesWithEvalsExistence(this.state.filteredCourses);
    return (
      <ExtendedWrapper>
        <SearchBar
          onInputChange={this.handleInputChange}
          placeholder={t("syllabus.searchBarPlaceholder")}
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

export default withRouter(withNamespaces("translation")(FetchedCourseSearch));
