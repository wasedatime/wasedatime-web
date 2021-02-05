import React from "react";
import { ReduxRootState } from "../redux/reducers";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import Timetable from "../components/timetable/Timetable";
import SemesterSwitcher from "../components/timetable/SemesterSwitcher";
import {
  SEMESTERS,
  getCurrentSemester,
} from "@bit/wasedatime.syllabus.ts.constants.semesters";
import { WithTranslation, withTranslation } from "react-i18next";
import { getAddedCoursesAndPrefsByTerm } from "../redux/reducers/addedCourses";
import { sortAddedCoursesAndPrefs } from "@bit/wasedatime.syllabus.ts.utils.added-courses-and-prefs";
import Course from "../types/course";

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

interface OwnState {
  semesterIndex: number;
  selectedQuarter: string;
}

interface SemesterType {
  title: string;
  key: string;
}

class TimetableContainer extends React.Component<
  ReduxStateProps & WithTranslation,
  OwnState
> {
  semesters: SemesterType[];

  constructor(props) {
    super(props);
    this.semesters = [
      { title: "Spring Semester", key: SEMESTERS.SPRING },
      { title: "Fall Semester", key: SEMESTERS.FALL },
    ];
    const currentSemester = getCurrentSemester();
    const semesterIndex = this.semesters.findIndex(
      (semester) => semester.key === currentSemester
    );
    this.state = {
      semesterIndex: semesterIndex,
      selectedQuarter: "",
    };
  }

  handleIncreaseSemesterIndex = (event) => {
    event.preventDefault();
    const newSemesterIndex =
      (this.state.semesterIndex + 1) % this.semesters.length;
    this.setState({
      semesterIndex: newSemesterIndex,
      selectedQuarter: "",
    });
  };

  handleDecreaseSemesterIndex = (event) => {
    event.preventDefault();
    const newSemesterIndex = Math.abs(
      (this.state.semesterIndex - 1) % this.semesters.length
    );
    this.setState({
      semesterIndex: newSemesterIndex,
      selectedQuarter: "",
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
    const { semesterIndex, selectedQuarter } = this.state;
    const { title, key } = this.semesters[semesterIndex];
    const semesterKey: string = key;
    const addedCoursesAndPrefs =
      selectedQuarter.length > 0
        ? addedCoursesAndPrefsByTerm[selectedQuarter]
        : addedCoursesAndPrefsByTerm[semesterKey];
    const sortedAddedCoursesAndPrefs = sortAddedCoursesAndPrefs(
      addedCoursesAndPrefs,
      selectedSortingOption
    );

    return (
      <Wrapper>
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
        <Header
          title={t("navigation.timetable")}
          onInputChange={() => {}}
          placeholder={"In construction..."}
          inputText={""}
          disabled={true}
          isBlur={true}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
        <SemesterSwitcher
          semesterTitle={t(`timetable.${title}`)}
          semesterKey={semesterKey}
          selectedQuarter={selectedQuarter}
          handleIncreaseSemesterIndex={this.handleIncreaseSemesterIndex}
          handleDecreaseSemesterIndex={this.handleDecreaseSemesterIndex}
          handleToggleQuarter={this.handleToggleQuarter}
        />
        <Timetable addedCoursesAndPrefs={sortedAddedCoursesAndPrefs} />
      </Wrapper>
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
