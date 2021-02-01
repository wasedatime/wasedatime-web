import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchCourses,
  fetchCoursesBySchool,
} from "../../redux/actions/syllabus";

const SyllabusFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

class SyllabusContainer extends React.Component<Props> {
  // get addedCourses & fetchedCourses from redux
  // get filter items and filter courses

  // state = {
  //   isModalOpen: false,
  //   filterGroups: this.initialFilterGroups,
  //   inputText: searchTerm,
  //   searchTerm: searchTerm,
  //   filteredCourses: props.fetchedCourses,
  // };

  render() {
    const { fetchCourses, fetchCoursesBySchool } = this.props;
    return (
      <SyllabusFlex>
        {/*<AddedCourseListSwitch addedCoursesAndPrefs={addedCoursesAndPrefs} />
        <FetchedCourseList
          searchTerm={searchTerm}
          searchLang={searchLang}
          results={results}
          onSearchInputChange={this.handleInputChange}
        />
        <Filter
          filterGroups={this.state.filterGroups}
          handleToggleFilter={this.handleToggleFilter}
          clearFilter={this.clearFilter}
          isSideBar={true}
        />*/}
        <div
          style={{
            flex: "20em",
            flexGrow: 0,
            flexShrink: 0,
            background: "red",
          }}
        ></div>
        <div style={{ flex: "auto", background: "yellow" }}>
          <button onClick={() => fetchCoursesBySchool("ART")}>
            Load ART courses
          </button>
          <button onClick={() => fetchCoursesBySchool("SSS")}>
            Load SSS courses
          </button>
          <button onClick={fetchCourses}>Load courses</button>
        </div>
        <div
          style={{
            flex: "20em",
            flexGrow: 0,
            flexShrink: 0,
            background: "green",
          }}
        ></div>
      </SyllabusFlex>
    );
  }
}

const mapDispatchToProps = {
  fetchCourses,
  fetchCoursesBySchool,
};

export default connect(null, mapDispatchToProps)(SyllabusContainer);
