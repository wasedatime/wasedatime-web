import React from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import {
  fetchCourses,
  fetchCoursesBySchool,
} from "../../redux/actions/syllabus";
import { ReduxRootState } from "../../redux/reducers";
import { getAddedCoursesList } from "../../redux/reducers/addedCourses";
import { getFetchedCoursesList } from "../../redux/reducers/fetchedCourses";
import AddedCourseListSwitch from "./AddedCourseListSwitch";
import FetchedCourseList from "../components/FetchedCourseList";
import queryString from "query-string";
import { getSearchLang } from "@bit/wasedatime.syllabus.ts.utils.course-search";
import { createHistory, LocationProvider } from "@reach/router";

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
  addedCourses: object;
  fetchedCourses: object;
}

interface ReduxDispatchProps {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

interface OwnProps {
  location: any;
}

interface OwnState {
  isModalOpen: boolean;
  filterGroups: object;
  addedCourses: object[];
  fetchedCourses: object[];
  searchTerm: string | string[];
  inputText: string | string[];
}

let history = createHistory(window);

class SyllabusContainer extends React.Component<
  ReduxStateProps & ReduxDispatchProps & OwnProps,
  OwnState
> {
  // get addedCourses & fetchedCourses from redux
  // get filter items and filter courses

  // state = {
  //   isModalOpen: false,
  //   filterGroups: this.initialFilterGroups,
  //   inputText: searchTerm,
  //   searchTerm: searchTerm,
  //   filteredCourses: props.fetchedCourses,
  // };
  constructor(props) {
    super(props);
    const parsedSearch = queryString.parse(this.props.location.search);
    const parsedSearchQ = parsedSearch.q;
    const searchTerm = parsedSearchQ === undefined ? "" : parsedSearchQ;

    this.state = {
      isModalOpen: false,
      filterGroups: {},
      addedCourses: props.addedCourses,
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

  render() {
    // const { fetchCourses, fetchCoursesBySchool, lng } = this.props;
    const { fetchCourses, fetchCoursesBySchool } = this.props;
    const { addedCourses, fetchedCourses, searchTerm } = this.state;
    // const searchLang = searchTerm === "" ? lng : getSearchLang(searchTerm);
    const searchLang = getSearchLang(searchTerm);
    return (
      <LocationProvider history={history}>
        <SyllabusFlex>
          <SideColumn>
            <AddedCourseListSwitch addedCourses={addedCourses} />
          </SideColumn>
          <MiddleColumn>
            <FetchedCourseList
              searchTerm={searchTerm}
              searchLang={searchLang}
              results={fetchedCourses /* filtered courses */}
              onSearchInputChange={this.handleInputChange}
            />
          </MiddleColumn>
          <SideColumn>
            {/*<Filter
            filterGroups={this.state.filterGroups}
            handleToggleFilter={this.handleToggleFilter}
            clearFilter={this.clearFilter}
            isSideBar={true}
          />*/}
          </SideColumn>
        </SyllabusFlex>
      </LocationProvider>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => {
  return {
    addedCourses: getAddedCoursesList(state.addedCourses.byId),
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
)(SyllabusContainer);
