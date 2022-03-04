import React, { useEffect, lazy, Suspense } from "react";

import { Hub } from "@aws-amplify/core";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "@sentry/react";
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

const NotFound = () => {
  useEffect(() => navigateToUrl("/"), []);

  return <LoadingSpinner message="Not found! Redirecting..." />;
};

const App = () => {
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
              <Home isFirstAccess />
            ) : (
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            )}
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

const Redirect = ({ to }) => {
  let navigate = useNavigate();

  useEffect(() => navigate(to), []);
  return null;
}

const AppRoutes = () => {
  let navigate = useNavigate();

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

  return (
    <Routes>
      <Route element={<TermsOfService />} path="/terms-of-service" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<AboutUs />} path="/aboutus" />
      <Route element={<RedirectPage />} path="/verify" />
      <Route element={<Feeds />} path="/feeds" />
      <Route element={<Home isFirstAccess={false} />} path="/home" />
      <Route element={<Redirect to="/courses/timetable" />} path="/" />
      <Route element={<Redirect to="/courses/timetable" />} path="/timetable" />
      <Route element={<Redirect to="/courses/syllabus" />} path="/syllabus" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
