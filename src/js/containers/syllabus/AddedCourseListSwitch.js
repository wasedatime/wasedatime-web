import React from "react";
import { withNamespaces } from "react-i18next";

import { addedCourseListSwitchHeight } from "../../styled-components/variables";
import BinarySwitch from "../../components/syllabus/BinarySwitch";
import AddedCourseListContainer from "./AddedCourseListContainer";
import { Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import { getCurrentSemester, SEMESTERS } from "../../config/semesters";

class AddedCourseListSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.springSemester = SEMESTERS.SPRING;
    this.fallSemester = SEMESTERS.FALL;
    this.state = {
      selectedSemester: getCurrentSemester(),
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
    const { addedCoursesAndPrefs, t } = this.props;
    const { selectedSemester } = this.state;
    const courses = addedCoursesAndPrefs[selectedSemester];
    return (
      <Wrapper>
        <Overlay>
          <BinarySwitch
            switchHeight={addedCourseListSwitchHeight}
            handleSwitchValue={this.handleChangeSemester}
            value={selectedSemester}
            leftButtonId={`button--semester-${this.springSemester}`}
            rightButtonId={`button--semester-${this.fallSemester}`}
            leftValue={this.springSemester}
            rightValue={this.fallSemester}
            leftDisplayedValue={t("syllabus.displayedSpringSemester")}
            rightDisplayedValue={t("syllabus.displayedFallSemester")}
          />
          <AddedCourseListContainer
            addedCoursesAndPrefs={courses}
            semesterKey={selectedSemester}
          />
        </Overlay>
      </Wrapper>
    );
  }
}

export default withNamespaces("translation")(AddedCourseListSwitch);
