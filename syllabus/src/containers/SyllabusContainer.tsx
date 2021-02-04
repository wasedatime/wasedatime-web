import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { fetchCourses, fetchCoursesBySchool } from "../redux/actions/syllabus";
import { ReduxRootState } from "../redux/reducers";
import { getAddedCoursesListWithLang } from "../redux/reducers/addedCourses";
import { getFetchedCoursesList } from "../redux/reducers/fetchedCourses";
import AddedCourseListSwitchContainer from "./AddedCourseListSwitchContainer";
import FetchedCourseList from "../components/FetchedCourseList";
import Filter from "../components/Filter";
import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";
import queryString from "query-string";
import {
  getSearchLang,
  searchCourses,
  sortCourses,
} from "@bit/wasedatime.syllabus.ts.utils.course-search";
import { createHistory, LocationProvider, navigate } from "@reach/router";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import Header from "@bit/wasedatime.core.ts.ui.header";
import filterCourses from "../utils/filterCourses";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import Course from "../types/course";

const SyllabusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const SyllabusFlex = styled.div`
  flex: calc(100% - 67px);
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const SideColumn = styled.div`
  flex: 21em;
  flex-grow: 0;
  flex-shrink: 0;
`;

const MiddleColumn = styled.div`
  flex: auto;
`;

interface ReduxStateProps {
  addedCourses: Course[];
  fetchedCourses: Course[];
}

interface ReduxDispatchProps {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

interface OwnProps extends WithTranslation {
  location: any;
  history: any;
}

interface OwnState {
  isModalOpen: boolean;
  filterGroups: { [filterName: string]: any };
  fetchedCourses: Course[];
  searchTerm: string | string[];
  inputText: string | string[];
}

// let history = createHistory(window);

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "401",
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

class SyllabusContainer extends React.Component<
  ReduxStateProps & ReduxDispatchProps & OwnProps,
  OwnState
> {
  constructor(props) {
    super(props);
    const parsedSearch = queryString.parse(this.props.location.search);
    const parsedSearchQ = parsedSearch.q;
    const searchTerm = parsedSearchQ === undefined ? "" : parsedSearchQ;

    this.state = {
      isModalOpen: false,
      filterGroups: {},
      fetchedCourses: props.fetchedCourses,
      searchTerm: searchTerm,
      inputText: searchTerm,
    };
  }

  // componentDidUpdate() {
  //   elementToFocusRef.current.focus();
  // }

  // handle text searching

  pushHistory = () => {
    this.props.history.push(
      `/syllabus?${
        this.state.inputText === "" ? "" : `q=${this.state.inputText}`
      }`
    );
  };

  updateSearchTerm = () => {
    this.setState((prevState, props) => {
      return {
        searchTerm: prevState.inputText,
      };
    }, this.pushHistory);
  };

  handleInputChange = (inputText) => {
    this.setState(
      {
        inputText,
      },
      debounce(this.updateSearchTerm, 500, {
        leading: false,
      })
    );
  };

  handleToggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleToggleFilter = (name: string, value: any) => {
    this.setState((prevState, props) => {
      const { [name]: filters, ...rest } = prevState.filterGroups;
      let newFilters;
      if (["evalType", "evalPercent"].includes(name) || Array.isArray(value)) {
        newFilters = value; // change the whole value of the filter group
      } else if (!filters) {
        newFilters = [value]; // add first item to an unselected filter group
      } else if (filters.includes(value)) {
        newFilters = filters.filter((elem) => elem !== value); // cancel an item from a filter group
      } else {
        newFilters = [...filters, value]; // add an item to a filter group
      }

      const newFilterGroups =
        Array.isArray(newFilters) && newFilters.length === 0
          ? rest
          : { [name]: newFilters, ...rest };

      const newFilteredCourses = filterCourses(
        newFilterGroups,
        props.fetchedCourses
      );

      return {
        filterGroups: newFilterGroups,
        fetchedCourses: newFilteredCourses,
      };
    });
  };

  clearFilter = () => {
    this.setState({
      filterGroups: {},
      fetchedCourses: this.props.fetchedCourses,
    });
  };

  render() {
    const {
      fetchCourses,
      fetchCoursesBySchool,
      addedCourses,
      t,
      i18n,
    } = this.props;
    let newI18n = { ...i18n };

    const { fetchedCourses, searchTerm, inputText } = this.state;
    const searchLang =
      searchTerm === "" ? newI18n.language : getSearchLang(searchTerm);
    const results =
      searchTerm.length > 0
        ? sortCourses(
            searchTerm,
            searchCourses(searchTerm, fetchedCourses, searchLang),
            searchLang
          )
        : fetchedCourses;

    return (
      <SyllabusWrapper>
        <Helmet>
          <title>WasedaTime - Syllabus Search</title>
          <meta
            name="description"
            content="Syllabus Searching at Waseda University."
          />
          <meta property="og:title" content="WasedaTime - Syllabus Search" />
          <meta
            property="og:description"
            content="Syllabus Searching at Waseda University."
          />
          <meta
            property="og:site_name"
            content="WasedaTime - Syllabus Search"
          />
        </Helmet>

        <MediaQuery minWidth={sizes.tablet}>
          {(matches) =>
            matches && (
              <HeaderWrapper>
                <Header
                  title={t("navigation.syllabus")}
                  onInputChange={this.handleInputChange}
                  placeholder={t("syllabus.searchBarPlaceholder")}
                  inputText={inputText}
                  disabled={false}
                  isBlur={true}
                  changeLang={(lng) => i18n.changeLanguage(lng)}
                />
              </HeaderWrapper>
            )
          }
        </MediaQuery>

        <SyllabusFlex>
          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches && (
                <SideColumn>
                  <AddedCourseListSwitchContainer addedCourses={addedCourses} />
                </SideColumn>
              )
            }
          </MediaQuery>

          <MiddleColumn>
            <MediaQuery maxWidth={sizes.tablet - 1}>
              {(matches) =>
                matches && (
                  <SearchBar
                    placeholder={t("syllabus.searchBarPlaceholder")}
                    value={inputText}
                    onInputChange={this.handleInputChange}
                  />
                )
              }
            </MediaQuery>
            <FetchedCourseList
              searchTerm={searchTerm}
              searchLang={searchLang}
              results={results}
              onSearchInputChange={this.handleInputChange}
            />
          </MiddleColumn>
          <MediaQuery minWidth={sizes.desktop}>
            {(matches) => {
              return matches ? (
                <SideColumn>
                  <Filter
                    filterGroups={this.state.filterGroups}
                    handleToggleFilter={this.handleToggleFilter}
                    clearFilter={this.clearFilter}
                    isSideBar={true}
                  />
                </SideColumn>
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
                      clearFilter={this.clearFilter}
                      isSideBar={false}
                    />
                  </Modal>
                </div>
              );
            }}
          </MediaQuery>
        </SyllabusFlex>
      </SyllabusWrapper>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => {
  return {
    addedCourses: getAddedCoursesListWithLang(state.addedCourses.byId),
    fetchedCourses: getFetchedCoursesList(state.fetchedCourses.byId),
  };
};

const mapDispatchToProps = {
  fetchCourses,
  fetchCoursesBySchool,
};

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("translation")(SyllabusContainer));
