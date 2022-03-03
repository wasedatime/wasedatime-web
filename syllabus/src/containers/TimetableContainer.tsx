import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { ReduxRootState } from "../redux/reducers";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
const Timetable = lazy(() => import("../components/timetable/Timetable"));
import SemesterSwitcher from "../components/SemesterSwitcher";
import { Semester } from "../constants/timetable-terms";
import { getCurrentSemester } from "../utils/get-current-semesters";
import { WithTranslation, withTranslation } from "react-i18next";
import { getAddedCoursesAndPrefsByTerm } from "../redux/reducers/addedCourses";
import { sortAddedCoursesAndPrefs } from "../utils/added-courses-and-prefs";
import Course from "../types/course";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const TimetableWrapper = styled(Wrapper)`
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

interface OwnProps extends WithTranslation {
  path: string;
}

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
      navigate("/courses/syllabus");

    this.semesterTitles = {
      [Semester.SPRING]: "Spring Semester",
      [Semester.FALL]: "Fall Semester",
    };

    this.state = {
      selectedSemester: getCurrentSemester(),
      selectedQuarter: "",
    };
  }

  handleToggleSemester = () => {
    this.setState({
      selectedSemester: this.state.selectedSemester === Semester.SPRING ? Semester.FALL : Semester.SPRING,
      selectedQuarter: ""
    });
  };

  handleToggleQuarter = (quarter) => {
    this.setState((prevState) => ({
      selectedQuarter: prevState.selectedQuarter === quarter ? "" : quarter,
    }));
  };

  render() {
    const {
      t,
      i18n,
      addedCoursesAndPrefsByTerm,
      selectedSortingOption,
    } = this.props;
    const { selectedSemester, selectedQuarter } = this.state;

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
            inputText={""}
            disabled={true}
            isBlur={false}
            // theme={"light"}
            // setTheme={() => {}}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>
        <TimetableFlex>
          <SemesterSwitcher
            semesterTitle={t(
              `timetable.${this.semesterTitles[selectedSemester]}`
            )}
            selectedSemester={selectedSemester}
            selectedQuarter={selectedQuarter}
            isQuarterDisplayed={true}
            toggleSemester={this.handleToggleSemester}
            toggleQuarter={this.handleToggleQuarter}
            isSmallSize={false}
          />
          <Suspense fallback={<LoadingSpinner message="Loading..." />}>
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
)(withTranslation("translation")(TimetableContainer));
