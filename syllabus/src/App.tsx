import React from "react";
import { Router, Redirect } from "@reach/router";
import Timetable from "./timetable/containers/TimetableContainer";
import Syllabus from "./syllabus/containers/SyllabusContainer";

const App = () => {
  return (
    <Router>
      <Timetable path="courses/timetable" />
      <Syllabus path="courses/syllabus" />
      <Redirect from="timetable" to="courses/timetable" default noThrow />
    </Router>
  );
};

export default App;
