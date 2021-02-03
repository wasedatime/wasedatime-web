import React from "react";
import { Router } from "@reach/router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Timetable from "./timetable/containers/TimetableContainer";
import Syllabus from "./syllabus/containers/SyllabusContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>{/*<Timetable path="timetable" />*/}</Switch>
      <Switch>
        <Route exact path="/syllabus" component={Syllabus} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
