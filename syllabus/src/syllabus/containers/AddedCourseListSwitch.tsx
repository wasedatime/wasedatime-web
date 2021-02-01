import React from "react";
// import { withTranslation } from "react-i18next";

// import { addedCourseListSwitchHeight } from "../../components/common/variables";
import BinarySwitch from "../components/BinarySwitch";
import { WithTranslation, withTranslation } from "react-i18next";
// import AddedCourseListContainer from "./AddedCourseListContainer";
// import { getCurrentSemester, SEMESTERS } from "../../config/semesters";

interface Props extends WithTranslation {
  addedCourses: object[];
}

interface State {
  selectedSemester: string;
}

class AddedCourseListSwitch extends React.Component<Props, State> {
  springSemester: string;
  fallSemester: string;
  constructor(props) {
    super(props);
    this.springSemester = "spring";
    this.fallSemester = "fall";
    this.state = {
      selectedSemester: "fall",
    };
  }

  handleChangeSemester = (targetSemester) => {
    if (this.state.selectedSemester !== targetSemester) {
      this.setState({
        selectedSemester: targetSemester,
      });
    }
  };

  render() {
    const { addedCourses, t } = this.props;
    const { selectedSemester } = this.state;
    // const courses = addedCoursesAndPrefs[selectedSemester];
    return (
      <div>
        <BinarySwitch
          switchHeight={"32px"}
          handleSwitchValue={this.handleChangeSemester}
          value={selectedSemester}
          leftButtonId={`button--semester-spring`}
          rightButtonId={`button--semester-fall`}
          leftValue={"spring"}
          rightValue={"fall"}
          leftDisplayedValue={t("syllabus.displayedSpringSemester")}
          rightDisplayedValue={t("syllabus.displayedFallSemester")}
        />
        {/*<AddedCourseListContainer
          addedCoursesAndPrefs={courses}
          semesterKey={selectedSemester}
        />*/}
      </div>
    );
  }
}

export default withTranslation("translation")(AddedCourseListSwitch);
