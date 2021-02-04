import React from "react";
import { Router, Redirect } from "@reach/router";
import Timetable from "./containers/TimetableContainer";
import Syllabus from "./containers/SyllabusContainer";

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
