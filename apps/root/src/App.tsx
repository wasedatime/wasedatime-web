import React, { useEffect, lazy, Suspense, useContext } from "react";

import { Hub } from "@aws-amplify/core";
import { LoadingSpinner } from "wasedatime-ui";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navigateToUrl } from "single-spa";
import { ErrorBoundary } from "react-error-boundary";

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
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context";

const AboutUs = lazy(() => import("@app/components/aboutUs/AboutUs"));
const Home = lazy(() => import("@app/components/Home"));
const Feeds = lazy(() => import("@app/components/Feeds"));

const NotFound = () => {
  useEffect(() => navigateToUrl("/"), []);

  return <LoadingSpinner theme="light" message="Not found! Redirecting..." />;
};

const Redirect = ({ to }: { to: string }) => {
  useEffect(() => navigateToUrl(to), []);

  return null;
};

const AppRoutes = () => {
  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
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
          window.location.pathname = data;
          break;
        default:
          break;
      }
    });

    return unsubscribe;
  }, []);

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
      <Route element={<></>} path="/campus" />
      <Route element={<></>} path="/career" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

const LoadingSpinnerContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ height: "100vh" }} className="dark:bg-dark-bgMain">
      <LoadingSpinner theme={theme} message="Loading..." />
    </div>
  );
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
          FallbackComponent={({ error, resetErrorBoundary }) => (
            <ErrorFallback error={error} resetError={resetErrorBoundary} />
          )}
        >
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinnerContainer />}>
              {localStorage.getItem("isFirstAccess") === null ||
              localStorage.getItem("isFirstAccess") === "true" ? (
                <Home isFirstAccess />
              ) : (
                <AppRoutes />
              )}
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default App;
