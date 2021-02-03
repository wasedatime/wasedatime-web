import React from "react";
import { ReduxRootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { Wrapper } from "@bit/wasedatime.core.ts.ui.wrapper";
import Header from "@bit/wasedatime.core.ts.ui.header";
import Timetable from "../components/Timetable";
import SemesterSwitcher from "../components/SemesterSwitcher";
import {
  SEMESTERS,
  getCurrentSemester,
} from "@bit/wasedatime.syllabus.ts.constants.semesters";
import { WithTranslation, withTranslation } from "react-i18next";
import { getAddedCoursesAndPrefsByTerm } from "../../redux/reducers/addedCourses";

interface ReduxStateProps {
  addedCoursesAndPrefsByTerm: { [term: string]: object };
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

  // get all addedcourses from redux
  // parse into each semester and quarter

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
    const { t, i18n, addedCoursesAndPrefsByTerm } = this.props;
    const { semesterIndex, selectedQuarter } = this.state;
    const { title, key } = this.semesters[semesterIndex];
    const semesterKey = key;
    const addedCoursesAndPrefs =
      selectedQuarter.length > 0
        ? addedCoursesAndPrefsByTerm[selectedQuarter]
        : addedCoursesAndPrefsByTerm[semesterKey];

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
        <Timetable addedCoursesAndPrefs={addedCoursesAndPrefs} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: ReduxRootState) => {
  return {
    addedCoursesAndPrefsByTerm: getAddedCoursesAndPrefsByTerm(
      state.addedCourses.byId
    ),
  };
};

export default connect<ReduxStateProps, null>(
  mapStateToProps,
  null
)(withTranslation("translation")(TimetableContainer));
