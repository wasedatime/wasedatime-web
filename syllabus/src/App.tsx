import React from "react";
import { Router } from "@reach/router";
// import Timetable from "./timetable/containers/TimetableContainer";
import Syllabus from "./syllabus/containers/SyllabusContainer";

const App = () => {
  return (
    <div>
      <Router>
        {/*<Timetable path="timetable" />*/}
        <Syllabus path="syllabus" />
      </Router>
    </div>
  );
};

export default App;
