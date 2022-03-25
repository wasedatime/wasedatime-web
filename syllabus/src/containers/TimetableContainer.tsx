import React, { lazy, Suspense } from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { Helmet } from "react-helmet";
import { WithTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import styled from "styled-components";

import SemesterSwitcher from "@app/components/SemesterSwitcher";
import { Semester } from "@app/constants/timetable-terms";
import { ReduxRootState } from "@app/redux/reducers";
import { getAddedCoursesAndPrefsByTerm } from "@app/redux/reducers/addedCourses";
import Course from "@app/types/course";
import { sortAddedCoursesAndPrefs } from "@app/utils/added-courses-and-prefs";
import { getCurrentSemester } from "@app/utils/get-current-semesters";

const Timetable = lazy(() => import("@app/components/timetable/Timetable"));

import { ThemeContext } from "@app/utils/theme-context";
import withRouter, { WithRouter } from "@app/utils/with-router";

const TimetableWrapper = styled(Wrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const TimetableFlex = styled.div`
  flex: calc(100% - 67px);
  ${media.tablet`flex: calc(100vh - 117px);`}
`;

interface ReduxStateProps {
  addedCoursesAndPrefsByTerm: {
    [key: string]: {
      pref: {
        color: number;
        displayLang: string;
        visibility: boolean;
      };
      course: Course;
    }[];
  };
  selectedSortingOption: string;
}

interface OwnProps extends WithTranslation, WithRouter {}

interface OwnState {
  selectedSemester: string;
  selectedQuarter: string;
}

interface SemesterTitlesType {
  [key: string]: string;
}

class TimetableContainer extends React.Component<
  ReduxStateProps & WithTranslation & OwnProps,
  OwnState
> {
  semesterTitles: SemesterTitlesType;

  constructor(props) {
    super(props);
    if (window.location.pathname.includes("syllabus"))
      props.router.navigate("/courses/syllabus");

    this.semesterTitles = {
      [Semester.SPRING]: "Spring Semester",
      [Semester.FALL]: "Fall Semester",
    };

    this.state = {
      selectedSemester: getCurrentSemester(),
      selectedQuarter: "",
    };
  }

  static contextType = ThemeContext;

  handleToggleSemester = () => {
    this.setState({
      selectedSemester:
        this.state.selectedSemester === Semester.SPRING
          ? Semester.FALL
          : Semester.SPRING,
      selectedQuarter: "",
    });
  };

  handleToggleQuarter = (quarter) => {
    this.setState((prevState) => ({
      selectedQuarter: prevState.selectedQuarter === quarter ? "" : quarter,
    }));
  };

  render() {
    const { t, i18n, addedCoursesAndPrefsByTerm, selectedSortingOption } =
      this.props;
    const { selectedSemester, selectedQuarter } = this.state;
    const { theme, setTheme } = this.context;

    const addedCoursesAndPrefs =
      selectedQuarter.length > 0
        ? addedCoursesAndPrefsByTerm[selectedQuarter]
        : addedCoursesAndPrefsByTerm[selectedSemester];

    const sortedAddedCoursesAndPrefs = sortAddedCoursesAndPrefs(
      addedCoursesAndPrefs,
      selectedSortingOption
    );

    return (
      <TimetableWrapper className="theme-default">
        <Helmet>
          <title>WasedaTime - Timetable</title>
          <meta
            name="description"
            content="Create Your Own Timetable at Waseda University."
          />
          <meta property="og:title" content="WasedaTime - Timetable" />
          <meta
            property="og:description"
            content="Create Your Own Timetable at Waseda University."
          />
          <meta property="og:site_name" content="WasedaTime - Timetable" />
        </Helmet>
        <HeaderWrapper>
          <Header
            title={t("navigation.timetable")}
            onInputChange={() => {}}
            placeholder={t("timetable search placeholder")}
            inputText=""
            disabled
            isBlur={false}
            theme={theme}
            setTheme={setTheme}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>
        <TimetableFlex className="bg-light-bgMain dark:bg-dark-bgMain">
          <SemesterSwitcher
            semesterTitle={t(
              `timetable.${this.semesterTitles[selectedSemester]}`
            )}
            selectedSemester={selectedSemester}
            selectedQuarter={selectedQuarter}
            isQuarterDisplayed
            toggleSemester={this.handleToggleSemester}
            toggleQuarter={this.handleToggleQuarter}
            isSmallSize={false}
          />
          <Suspense fallback={<LoadingSpinner theme={theme} message="Loading..." />}>
            <Timetable addedCoursesAndPrefs={sortedAddedCoursesAndPrefs} />
          </Suspense>
        </TimetableFlex>
      </TimetableWrapper>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => ({
  addedCoursesAndPrefsByTerm: getAddedCoursesAndPrefsByTerm(
    state.addedCourses.byId
  ),
  selectedSortingOption: state.addedCourses.sortingOption,
});

export default connect<ReduxStateProps, {}>(
  mapStateToProps,
  null
)(withTranslation("translation")(withRouter(TimetableContainer)));
