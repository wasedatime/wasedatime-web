import React from "react";

// import { addedCourseListSwitchHeight } from "../../components/common/variables";
import BinarySwitch from "../components/BinarySwitch";
import { WithTranslation, withTranslation } from "react-i18next";
import AddedCourseListContainer from "./AddedCourseListContainer";
// import { getCurrentSemester, SEMESTERS } from "../../config/semesters";
import Course from "../types/course";

interface Props extends WithTranslation {
  addedCourses: Course[];
}

interface State {
  selectedSemester: string;
}

class AddedCourseListSwitchContainer extends React.Component<Props, State> {
  springSemester: string;
  fallSemester: string;
  constructor(props) {
    super(props);
    this.springSemester = "springSem";
    this.fallSemester = "fallSem";
    this.state = {
      selectedSemester: "fallSem",
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
          leftValue={"springSem"}
          rightValue={"fallSem"}
          leftDisplayedValue={t("syllabus.displayedSpringSemester")}
          rightDisplayedValue={t("syllabus.displayedFallSemester")}
        />
        <AddedCourseListContainer
          addedCourses={addedCourses}
          semesterKey={selectedSemester}
        />
      </div>
    );
  }
}

export default withTranslation("translation")(AddedCourseListSwitchContainer);
