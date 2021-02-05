import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { Router, Redirect, navigate } from "@reach/router";
import TermsOfService from "./components/singlePages/TermsOfService";
import PrivacyPolicy from "./components/singlePages/PrivacyPolicy";
import RedirectPage from "./components/user/RedirectPage";

const App = () => {
  Hub.listen("auth", ({ payload: { event, data } }) => {
    switch (event) {
      // case "signIn":
      //   break;
      // case "signOut":
      //   break;
      // case "oAuthSignOut":
      //   break;
      // case "tokenRefresh":
      //   break;
      case "customOAuthState":
        navigate(data);
        break;
      default:
        break;
    }
  });

  return (
    <Router>
      <TermsOfService path="/terms-of-service" />
      <PrivacyPolicy path="/privacy-policy" />
      <RedirectPage path="/verify" />
      <Redirect from="/timetable" to="/courses/timetable" noThrow />
      <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
    </Router>
  );
};

export default App;
