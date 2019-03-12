import React from "react";

import { addedCourseListSwitchHeight } from "../../styled-components/variables";
import BinarySwitch from "../../components/syllabus/BinarySwitch";
import AddedCourseListContainer from "./AddedCourseListContainer";
import { Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";
import LANGS from "../../config/langs";

class AddedCourseListSwitch extends React.Component {
  constructor() {
    super();
    this.springSemester = "spring";
    this.fallSemester = "fall";
    this.state = {
      selectedSemester: this.springSemester
    };
    this.displayedSpringSemester = "Spring Semester";
    this.displayedFallSemester = "Fall Semester";
  }

  handleChangeSemester = targetSemester => {
    if (this.state.selectedSemester !== targetSemester) {
      this.setState({
        selectedSemester: targetSemester
      });
    }
  };

  render() {
    const { addedCoursesAndPrefs } = this.props;
    const { selectedSemester } = this.state;
    const courses = addedCoursesAndPrefs[selectedSemester];
    const lang = "jp";
    if (lang === LANGS.JP){
      this.displayedSpringSemester = "春学期";
      this.displayedFallSemester = "秋学期";
    }
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
            leftDisplayedValue={this.displayedSpringSemester}
            rightDisplayedValue={this.displayedFallSemester}
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

export default AddedCourseListSwitch;
