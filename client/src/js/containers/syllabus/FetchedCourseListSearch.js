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
import { Overlay } from "../../styled-components/Overlay";
import { SideBar } from "../../styled-components/SideBar";
import { sizes } from "../../styled-components/utils";
import { Segment, Tab, Card, Header, Button, Icon } from 'semantic-ui-react';
import { fallSemesters, springSemesters } from "../../data/semesters";
import { getSearchLang } from "../../utils/courseSearch";
import { gaFilter } from "../../ga/eventCategories";
import {
  gaAppendActionWithLng,
  gaOpenModal,
  gaCloseModal,
  gaApplyFilter,
  gaRemoveFilter,
} from "../../ga/eventActions";

import fseIcon from "../../../img/syllabus-icons/fse.png";
import cseIcon from "../../../img/syllabus-icons/cse.png";
import aseIcon from "../../../img/syllabus-icons/ase.png";
import pseIcon from "../../../img/syllabus-icons/pse.png";
import silsIcon from "../../../img/syllabus-icons/sils.png";
import sssIcon from "../../../img/syllabus-icons/sss.png";
import cjlIcon from "../../../img/syllabus-icons/cjl.png";
import gecIcon from "../../../img/syllabus-icons/gec.png";

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
    zIndex: "1050",
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
    padding: 0,
  },
};

const schoolFilterPanes = [
  { menuItem: 'Undergraduate', render: () => <React.Fragment>
    <Card.Group itemsPerRow={8} style={{ marginTop: "0.5em" }}>
      <Card image={fseIcon} />
      <Card image={cseIcon} />
      <Card image={aseIcon} />
      <Card image={pseIcon} />
      <Card image={silsIcon} />
      <Card image={sssIcon} />
      <Card image={cjlIcon} />
      <Card image={gecIcon} />
      <Card image={fseIcon} />
      <Card image={cseIcon} />
      <Card image={aseIcon} />
      <Card image={pseIcon} />
      <Card image={silsIcon} />
      <Card image={sssIcon} />
      <Card image={cjlIcon} />
      <Card image={gecIcon} />
    </Card.Group>
    <Button style={{ margin: "1em 0px" }}>Filter</Button>
  </React.Fragment> },
  { menuItem: 'Graduate', render: () => <React.Fragment>
    <Card.Group itemsPerRow={8} style={{ marginTop: "0.5em" }}>
      <Card image={gecIcon} />
      <Card image={cjlIcon} />
      <Card image={sssIcon} />
      <Card image={silsIcon} />
      <Card image={pseIcon} />
      <Card image={aseIcon} />
      <Card image={cseIcon} />
      <Card image={fseIcon} />
      <Card image={gecIcon} />
      <Card image={cjlIcon} />
      <Card image={sssIcon} />
      <Card image={silsIcon} />
      <Card image={pseIcon} />
      <Card image={aseIcon} />
      <Card image={cseIcon} />
      <Card image={fseIcon} />
    </Card.Group>
    <Button style={{ margin: "1em 0px" }}>Filter</Button>
  </React.Fragment> },
]

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
        period: [],
      },
      inputText: searchTerm,
      searchTerm: searchTerm,
      filteredCourses: props.fetchedCourses,
      isSchoolFilterOpened: true,
      checkedSchools: [],
    };
  }

  componentWillUnmount() {
    this.debounceUpdateSearchTerm.cancel();
  }

  handleToggleModal = (event) => {
    event.preventDefault();
    const gaAction = this.state.isModalOpen ? gaCloseModal : gaOpenModal;
    ReactGA.event({
      category: gaFilter,
      action: gaAppendActionWithLng(gaAction, this.props.lng),
    });
    this.setState((prevState, props) => {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  handleToggleFilter = (inputName, value) => {
    this.setState((prevState, props) => {
      const { [inputName]: filters, ...rest } = prevState.filterGroups;
      let newFilters, gaAction;
      if (filters.includes(value)) {
        newFilters = filters.filter((elem) => elem !== value);
        gaAction = gaRemoveFilter;
      } else {
        newFilters = [...filters, value];
        gaAction = gaApplyFilter;
      }
      ReactGA.event({
        category: gaFilter,
        action: gaAppendActionWithLng(gaAction, this.props.lng),
        label: `${inputName} - ${value}`,
      });
      const newFilterGroups = {
        [inputName]: newFilters,
        ...rest,
      };
      const newFilteredCourses = this.filterCourses(
        newFilterGroups,
        this.props.fetchedCourses
      );
      return {
        filterGroups: newFilterGroups,
        filteredCourses: newFilteredCourses,
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
        : courses.filter((course) => semesterFilters.includes(course.tm));

    const schoolFilters = filterGroups.school;
    filteredCourses =
      schoolFilters.length === 0 || schoolFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter((course) => {
            const keys = course.ks;
            for (let i = 0; i < keys.length; i++) {
              if (schoolFilters.includes(keys[i].s)) return true;
            }
            return false;
          });

    const langFilters = filterGroups.lang;
    filteredCourses =
      langFilters.length === 0 || langFilters.length === 3
        ? filteredCourses
        : filteredCourses.filter((course) => langFilters.includes(course.l));

    // IPSE/English-based Undergraduate Program
    if (filterGroups.special.length > 0) {
      const specialFilters = filterGroups.special[0].split("/");
      filteredCourses = filteredCourses.filter((course) => {
        const keywords = course.kws;
        if (keywords === undefined) return false;
        for (let i = 0; i < keywords.length; i++) {
          if (specialFilters.includes(keywords[i])) return true;
        }
        return false;
      });
    }

    const dayFilters = filterGroups.day;
    filteredCourses =
      dayFilters.length === 0 || dayFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter((course) => {
            const occurrences = course.os;
            for (let i = 0; i < occurrences.length; i++) {
              if (dayFilters.includes(occurrences[i].d.toString())) return true;
            }
            return false;
          });

    const periodFilters = filterGroups.period;

    filteredCourses =
      periodFilters.length === 0 || periodFilters.length === 6
        ? filteredCourses
        : filteredCourses.filter((course) => {
            const occurrences = course.os;

            for (let i = 0; i < periodFilters.length; i++) {
              const period = parseInt(periodFilters[i], 10);
              for (let j = 0; j < occurrences.length; j++) {
                if (occurrences[j].s <= period && period <= occurrences[j].e) {
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
      search: this.state.inputText === "" ? "" : `q=${this.state.inputText}`,
    });
  };

  updateSearchTerm = () => {
    this.setState((prevState, props) => {
      return {
        searchTerm: prevState.inputText,
      };
    }, this.pushHistory());
  };

  debounceUpdateSearchTerm = debounce(this.updateSearchTerm, 500, {
    leading: false,
  });

  handleInputChange = (inputText) => {
    this.setState(
      {
        inputText,
      },
      this.debounceUpdateSearchTerm()
    );
  };

  sortCoursesWithEvalsExistence = (courses) =>
    sortBy(courses, (course) => (course.e ? 1 : 2));

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
        <Overlay>
          <Segment style={{ margin: "1em 2em 0em", padding: "0.5em 1em 0px" }}>
            <Header as="h2"
              onClick={() => this.setState({ isSchoolFilterOpened: !this.state.isSchoolFilterOpened })}
              style={{ cursor: "pointer", margin: "0px" }}
            >School filter <Icon name="angle down" /></Header>
            {this.state.isSchoolFilterOpened && (
              <Tab panes={schoolFilterPanes} />
            )}
          </Segment>
        </Overlay>
        <RowWrapper>
          <FetchedCourseList
            searchTerm={searchTerm}
            searchLang={searchLang}
            results={results}
          />
          <MediaQuery minWidth={sizes.desktop}>
            {(matches) => {
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
