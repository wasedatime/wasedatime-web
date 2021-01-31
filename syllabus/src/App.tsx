import React from "react";
import { Provider, connect } from "react-redux";
import { fetchCourses, fetchCoursesBySchool } from "./redux/actions/syllabus";

interface Props {
  fetchCourses: () => void;
  fetchCoursesBySchool: (school: string) => void;
}

const App = ({ fetchCourses, fetchCoursesBySchool }: Props) => {
  return (
    <div>
      <button onClick={() => fetchCoursesBySchool("ART")}>
        Load ART courses
      </button>
      <button onClick={() => fetchCoursesBySchool("SSS")}>
        Load SSS courses
      </button>
      <button onClick={fetchCourses}>Load courses</button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchCourses,
  fetchCoursesBySchool,
};

export default connect(null, mapDispatchToProps)(App);
