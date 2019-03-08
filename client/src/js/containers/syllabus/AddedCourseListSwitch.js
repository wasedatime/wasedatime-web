import React from "react";

import SemesterTabs from "../../components/syllabus/SemesterTabs";
import AddedCourseListContainer from "./AddedCourseListContainer";
import { Wrapper } from "../../styled-components/Wrapper";
import { Overlay } from "../../styled-components/Overlay";

class AddedCourseListSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSemester: "spring"
    };
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
          <SemesterTabs
            handleChangeSemester={this.handleChangeSemester}
            semester={selectedSemester}
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
