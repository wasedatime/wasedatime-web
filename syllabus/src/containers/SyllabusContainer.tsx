import React, { lazy, Suspense } from "react";

import API from "@aws-amplify/api";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { navigate, Link } from "@reach/router";
import debounce from "lodash/debounce";
import queryString from "query-string";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import styled from "styled-components";

import Filter from "@app/components/syllabus/Filter";
import FilterButton from "@app/components/syllabus/FilterButton";
import SyllabusTabs from "@app/components/SyllabusTabs";
import { schoolCodeMap } from "@app/constants/school-code";
import { SyllabusKey } from "@app/constants/syllabus-data";
import SchoolFilterContainer from "@app/containers/SchoolFilterContainer";
import {
  gaAppendActionWithLng,
  gaApplyFilter,
  gaCloseModal,
  gaOpenModal,
  gaRemoveFilter,
  gaUpdateFilter,
} from "@app/ga/eventActions";
import { gaFilter } from "@app/ga/eventCategories";
import { fetchCourses, fetchCoursesBySchool } from "@app/redux/actions";
import { ReduxRootState } from "@app/redux/reducers";
import { getFetchedCoursesList } from "@app/redux/reducers/fetchedCourses";
import Course from "@app/types/course";
import {
  getSearchLang,
  searchCourses,
  sortCourses,
} from "@app/utils/course-search";
import filterCourses from "@app/utils/filter-courses";
import { courseSchemaFullToShort } from "@app/utils/map-single-course-schema";

const AddedCourseListContainer = lazy(
  () => import("@app/containers/AddedCourseListContainer")
);
const FetchedCourseList = lazy(
  () => import("@app/components/syllabus/FetchedCourseList")
);

import { ThemeContext } from "../utils/theme-context";

const SyllabusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const SyllabusTabsWrapper = styled.div`
  flex: 29px;
`;

const SyllabusFlex = styled.div`
  height: calc(100vh - 96px);
  flex: calc(100% - 96px);
  display: flex;
  flex-direction: row;
  ${media.tablet`height: calc(100vh - 146px); flex: calc(100vh - 146px);`}
  overflow-y: hidden;
`;

const SideColumn = styled.div`
  flex: 20em;
  flex-grow: 0;
  flex-shrink: 0;
`;

const ShorterSideColumn = styled.div`
  flex: 15em;
  flex-grow: 0;
  flex-shrink: 0;
`;

const MiddleColumn = styled.div`
  flex: 1 1 auto;
`;

interface ReduxStateProps {
  fetchedCourses: Course[];
  isFetching: boolean;
}

interface ReduxDispatchProps {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

interface OwnProps extends WithTranslation {
  path: string;
}

interface OwnState {
  isModalOpen: boolean;
  filterGroups: { [filterName: string]: any };
  fetchedCourses: Course[];
  searchTerm: string | string[];
  inputText: string | string[];
  topCourseId: string;
  topCourse: Course | null;
  isFetchingTopCourse: boolean;
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
    overflowY: "hidden",
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
    if (window.location.pathname.includes("timetable"))
      navigate("/courses/timetable");

    this.state = {
      isModalOpen: false,
      filterGroups: {},
      fetchedCourses: props.fetchedCourses,
      searchTerm: "",
      inputText: "",
      topCourseId: "",
      topCourse: null,
      isFetchingTopCourse: false,
    };
  }

  static contextType = ThemeContext;

  componentDidMount() {
    const { courseId } = queryString.parse(window.location.search);
    if (courseId)
      this.setState({ isFetchingTopCourse: true }, () =>
        this.setTopCourse(courseId)
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFetching && !this.props.isFetching) {
      this.setState({ fetchedCourses: this.props.fetchedCourses });
    }
    const { courseId } = queryString.parse(window.location.search);
    if (courseId && this.state.topCourseId !== courseId) {
      if (!this.state.isFetchingTopCourse) {
        console.log("666");
        this.setState({ isFetchingTopCourse: true }, () =>
          this.setTopCourse(courseId)
        );
      }
    }
    if (
      prevProps.fetchedCourses.length === 0 &&
      this.props.fetchedCourses.length > 0 &&
      this.state.fetchedCourses.length === 0
    ) {
      this.setState({ fetchedCourses: this.props.fetchedCourses });
    }
  }

  setTopCourse = async (courseId) => {
    if (this.state.isFetchingTopCourse) {
      let course;
      try {
        const res = await API.get(
          "wasedatime-dev",
          `/syllabus?id=${courseId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            response: true,
          }
        );
        course = res.data.data;
      } catch (error) {
        course = this.props.fetchedCourses.find(
          (c) => c[SyllabusKey.ID] === courseId
        );
      }
      if (course) {
        const school = schoolCodeMap[courseId.substring(0, 2)];
        course = courseSchemaFullToShort({
          ...course,
          [SyllabusKey.SCHOOL]: school,
        });

        this.setState({
          topCourseId: courseId,
          topCourse:
            !this.props.fetchedCourses.filter(
              (c) => c[SyllabusKey.ID] === courseId
            )[0] && course,
          isFetchingTopCourse: false,
        });
      }
    }
  };

  updateSearchTerm = () => {
    this.setState((prevState, props) => {
      return {
        searchTerm: prevState.inputText,
      };
    });
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
    const gaAction = this.state.isModalOpen ? gaCloseModal : gaOpenModal;
    ReactGA.event({
      category: gaFilter,
      action: gaAppendActionWithLng(gaAction, this.props.i18n.language),
    });
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleToggleFilter = (name: string, value: any) => {
    this.setState((prevState, props) => {
      const { [name]: filters, ...rest } = prevState.filterGroups;
      let newFilters;
      let gaAction;
      if (["evalType", "evalPercent"].includes(name) || Array.isArray(value)) {
        newFilters = value; // change the whole value of the filter group
        gaAction = gaUpdateFilter;
      } else if (!filters) {
        newFilters = [value]; // add first item to an unselected filter group
        gaAction = gaApplyFilter;
      } else if (filters.includes(value)) {
        newFilters = filters.filter((elem) => elem !== value); // cancel an item from a filter group
        gaAction = gaRemoveFilter;
      } else {
        newFilters = [...filters, value]; // add an item to a filter group
        gaAction = gaApplyFilter;
      }

      ReactGA.event({
        category: gaFilter,
        action: gaAppendActionWithLng(gaAction, this.props.i18n.language),
        label: `${name} - ${value}`,
      });

      const newFilterGroups =
        Array.isArray(newFilters) && newFilters.length === 0
          ? rest
          : { [name]: newFilters, ...rest };

      const newFilteredCourses = filterCourses(
        newFilterGroups,
        prevState.topCourse
          ? [prevState.topCourse, ...props.fetchedCourses]
          : props.fetchedCourses
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
    const { fetchedCourses: allFetchedCourses, t, i18n } = this.props;
    const { theme, setTheme } = this.context;

    const newI18n = { ...i18n };

    const { fetchedCourses, searchTerm, inputText, topCourse, topCourseId } =
      this.state;
    const searchLang =
      searchTerm === "" ? newI18n.language : getSearchLang(searchTerm);
    let results =
      searchTerm.length > 0
        ? sortCourses(
            searchTerm,
            searchCourses(searchTerm, fetchedCourses, searchLang),
            searchLang
          )
        : fetchedCourses;
    results =
      topCourse && results[0] !== topCourse
        ? [topCourse, ...results]
        : results.sort((a, b) => {
            if (a.a === topCourseId) return -1;
            if (b.a === topCourseId) return 1;

            return 0;
          });

    return (
      <SyllabusWrapper className="theme-default">
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

        <HeaderWrapper>
          <Header
            title={t("navigation.syllabus")}
            onInputChange={this.handleInputChange}
            placeholder={t("syllabus.searchBarPlaceholder")}
            inputText={inputText}
            disabled={false}
            isBlur={false}
            theme={theme}
            setTheme={setTheme}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>

        <SyllabusTabsWrapper>
          <SyllabusTabs />
        </SyllabusTabsWrapper>

        <SyllabusFlex>
          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches && (
                <SideColumn>
                  <Suspense fallback="">
                    <AddedCourseListContainer />
                  </Suspense>
                </SideColumn>
              )
            }
          </MediaQuery>

          <MiddleColumn>
            <Suspense fallback={<LoadingSpinner message="Loading..." />}>
              {allFetchedCourses.length > 0 ? (
                <FetchedCourseList
                  searchTerm={searchTerm}
                  searchLang={searchLang}
                  results={results}
                  onSearchInputChange={this.handleInputChange}
                />
              ) : (
                <div style={{ padding: "2em" }}>
                  <Message info>{t("message.choose school request")}</Message>
                  <SchoolFilterContainer
                    checkedSchools={[]}
                    handleToggleFilter={() => {}}
                    isPopup={false}
                  />
                </div>
              )}
            </Suspense>
          </MiddleColumn>
          <MediaQuery minWidth={1280}>
            {(matches) =>
              matches && (
                <SideColumn>
                  <Suspense fallback="">
                    <Filter
                      filterGroups={this.state.filterGroups}
                      handleToggleFilter={this.handleToggleFilter}
                      clearFilter={this.clearFilter}
                      isSideBar
                    />
                  </Suspense>
                </SideColumn>
              )
            }
          </MediaQuery>
          <MediaQuery minWidth={sizes.desktop} maxWidth={1279}>
            {(matches) =>
              matches && (
                <ShorterSideColumn>
                  <Filter
                    filterGroups={this.state.filterGroups}
                    handleToggleFilter={this.handleToggleFilter}
                    clearFilter={this.clearFilter}
                    isSideBar
                  />
                </ShorterSideColumn>
              )
            }
          </MediaQuery>
          <MediaQuery maxWidth={sizes.desktop - 1}>
            {(matches) =>
              matches && (
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
              )
            }
          </MediaQuery>
        </SyllabusFlex>
      </SyllabusWrapper>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => ({
  fetchedCourses: getFetchedCoursesList(state.fetchedCourses.coursesBySchool),
  isFetching: state.fetchedCourses.isFetching,
});

const mapDispatchToProps = {
  fetchCourses,
  fetchCoursesBySchool,
};

export default connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("translation")(SyllabusContainer));
