import React from "react";
import { Router, Redirect } from "@reach/router";
import TermsOfService from "./singlePages/TermsOfService";
import PrivacyPolicy from "./singlePages/PrivacyPolicy";

const App = () => (
  <Router>
    <TermsOfService path="/terms-of-service" />
    <PrivacyPolicy path="/privacy-policy" />
    <Redirect from="/timetable" to="/courses/timetable" noThrow />
    <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
  </Router>
);

export default App;
