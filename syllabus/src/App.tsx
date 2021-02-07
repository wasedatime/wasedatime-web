import React from "react";
import { Router, Redirect, navigate } from "@reach/router";
import Timetable from "./containers/TimetableContainer";
import Syllabus from "./containers/SyllabusContainer";

const App = () => {
  return (
    <Router>
      <Syllabus exact path="courses/syllabus" />
      <Timetable exact path="courses/timetable" />
    </Router>
  );
};

export default App;
