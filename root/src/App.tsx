import React, { useEffect, lazy, Suspense } from "react";

import { Hub } from "@aws-amplify/core";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { Router, Redirect, navigate } from "@reach/router";
import { ErrorBoundary } from "@sentry/react";
import i18next from "i18next";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { navigateToUrl } from "single-spa";

import CommonStyle from "@app/common-style";
import ErrorFallback from "@app/components/ErrorFallback";
import PrivacyPolicy from "@app/components/PrivacyPolicy";
import TermsOfService from "@app/components/TermsOfService";
import RedirectPage from "@app/components/user/RedirectPage";
import {
  gaUserSignIn,
  gaUserSignInFailure,
  gaUserSignOut,
} from "@app/ga/eventActions";
import { gaUser } from "@app/ga/eventCategories";
import { ThemeProvider } from "@app/utils/theme-context";

const AboutUs = lazy(() => import("@app/components/aboutUs/AboutUs"));
const Home = lazy(() => import("@app/components/Home"));
const Feeds = lazy(() => import("@app/components/Feeds"));

const NotFound = ({ default: boolean }) => {
  navigateToUrl("/");

  return <LoadingSpinner message="Not found! Redirecting..." />;
};

const App = () => {
  Hub.listen("auth", ({ payload: { event, data } }) => {
    switch (event) {
      case "signIn":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignIn,
        });
        break;
      case "signOut":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignOut,
        });
        break;
      case "signIn_failure":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignInFailure,
        });
        break;
      case "customOAuthState":
        navigate(data);
        break;
      default:
        break;
    }
  });

  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
  }, []);

  return (
    <>
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
      <CommonStyle />

      <ThemeProvider>
        <ErrorBoundary
          fallback={({ error, componentStack, resetError }) => (
            <ErrorFallback error={error} resetError={resetError} />
          )}
        >
          <Suspense fallback={<LoadingSpinner message="Loading..." />}>
            {localStorage.getItem("isFirstAccess") === null ||
            localStorage.getItem("isFirstAccess") === "true" ? (
              <Home path="/" isFirstAccess />
            ) : (
              <Router>
                <TermsOfService path="/terms-of-service" />
                <PrivacyPolicy path="/privacy-policy" />
                <AboutUs path="/aboutus" />
                <RedirectPage path="/verify" />
                <Feeds path="/feeds" />
                <Home path="/home" isFirstAccess={false} />
                <Redirect from="/" to="/courses/timetable" noThrow />
                <Redirect from="/timetable" to="/courses/timetable" noThrow />
                <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
                <NotFound default />
              </Router>
            )}
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default App;
