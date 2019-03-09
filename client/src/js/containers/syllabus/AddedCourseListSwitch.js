import React from "react";

import { addedCourseListSwitchHeight } from "../../styled-components/variables";
import BinarySwitch from "../../components/syllabus/BinarySwitch";
import AddedCourseListContainer from "./AddedCourseListContainer";
import { Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";

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
    const { addedCourses } = this.props;
    const { selectedSemester } = this.state;
    const courses = addedCourses[selectedSemester];
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
            addedCourses={courses}
            semesterKey={selectedSemester}
          />
        </Overlay>
      </Wrapper>
    );
  }
}

export default AddedCourseListSwitch;
