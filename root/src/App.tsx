import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { Router, Redirect, navigate } from "@reach/router";
import TermsOfService from "./components/pages/TermsOfService";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import About from "./components/pages/About";
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
    <React.Fragment>
      <Helmet>
        <title>WasedaTime - Home</title>
        <meta
          name="description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Home" />
        <meta
          property="og:description"
          content="Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
        />
        <meta property="og:site_name" content="WasedaTime - Home" />
      </Helmet>
      <Router>
        <TermsOfService path="/terms-of-service" />
        <PrivacyPolicy path="/privacy-policy" />
        <RedirectPage path="/verify" />
        <About path="/home" />
        <Redirect from="/" to="/courses/timetable" noThrow />
        <Redirect from="/timetable" to="/courses/timetable" noThrow />
        <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
      </Router>
    </React.Fragment>
  );
};

export default App;
