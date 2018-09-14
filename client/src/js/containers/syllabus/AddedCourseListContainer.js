import React from 'react';
import debounce from 'lodash/debounce';

import SemesterTabs from '../../components/syllabus/SemesterTabs';
import AddedCourseList from '../../components/syllabus/AddedCourseList';
import { Wrapper } from '../../styled-components/Wrapper';
import { Overlay } from '../../styled-components/Overlay';

class AddedCourseListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSemester: 'fall'
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
    const courses = addedCourses[this.state.selectedSemester];
    return (
      <Wrapper>
        <Overlay>
          <SemesterTabs
            handleChangeSemester={this.handleChangeSemester}
            semester={this.state.selectedSemester}
          />
          <AddedCourseList courses={courses} />
        </Overlay>
      </Wrapper>
    );
  }
}

export default AddedCourseListContainer;
