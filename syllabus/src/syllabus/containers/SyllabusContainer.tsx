import React from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import {
  fetchCourses,
  fetchCoursesBySchool,
} from "../../redux/actions/syllabus";
import { ReduxRootState } from "../../redux/reducers";
import { getAddedCoursesListWithLang } from "../../redux/reducers/addedCourses";
import { getFetchedCoursesList } from "../../redux/reducers/fetchedCourses";
import AddedCourseListSwitch from "./AddedCourseListSwitch";
import FetchedCourseList from "../components/FetchedCourseList";
import Filter from "../components/Filter";
import FilterButton from "../components/FilterButton";
import queryString from "query-string";
import { getSearchLang } from "@bit/wasedatime.syllabus.ts.utils.course-search";
import { createHistory, LocationProvider } from "@reach/router";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import filterCourses from "../utils/filterCourses";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const SyllabusFlex = styled.div`
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
  addedCourses: { [key: string]: any }[];
  fetchedCourses: { [key: string]: any }[];
}

interface ReduxDispatchProps {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

interface OwnProps extends WithTranslation {
  location: any;
}

interface OwnState {
  isModalOpen: boolean;
  filterGroups: { [filterName: string]: any };
  fetchedCourses: object[];
  searchTerm: string | string[];
  inputText: string | string[];
}

let history = createHistory(window);

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

  // handle text searching

  pushHistory = () => {
    history.push({
      pathname: "/syllabus",
      search: this.state.inputText === "" ? "" : `q=${this.state.inputText}`,
    });
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
      i18n,
    } = this.props;
    const { fetchedCourses, searchTerm } = this.state;
    const searchLang =
      searchTerm === "" ? i18n.language : getSearchLang(searchTerm);

    return (
      <LocationProvider history={history}>
        <SyllabusFlex>
          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches && (
                <SideColumn>
                  <AddedCourseListSwitch addedCourses={addedCourses} />
                </SideColumn>
              )
            }
          </MediaQuery>

          <MiddleColumn>
            <FetchedCourseList
              searchTerm={searchTerm}
              searchLang={searchLang}
              results={fetchedCourses /* filtered courses */}
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
      </LocationProvider>
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
