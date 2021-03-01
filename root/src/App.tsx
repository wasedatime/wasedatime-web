import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Hub } from "@aws-amplify/core";
import { Router, Redirect, navigate, Location } from "@reach/router";
const TermsOfService = lazy(() => import("./components/pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const AboutUs = lazy(() => import("./components/pages/aboutUs/AboutUs"));
const Home = lazy(() => import("./components/pages/Home"));
import RedirectPage from "./components/user/RedirectPage";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import Footer from "./components/frame/Footer";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { useTranslation } from "react-i18next";
import CommonStyle from "./common-style";
import debounce from "lodash/debounce";
import { ErrorBoundary } from "@sentry/react";
import ReactGA from "react-ga";
import { gaUser } from "./ga/eventCategories";
import {
  gaUserSignIn,
  gaUserSignInFailure,
  gaUserSignOut,
} from "./ga/eventActions";

class Analytics extends React.Component<{ path: string; location: Location }> {
  componentDidMount() {
    this.sendPageChange(
      this.props.location.pathname,
      this.props.location.search
    );
  }

  componentDidUpdate(prevProps) {
    const prevPathname = prevProps.location.pathname;
    const thisPathname = this.props.location.pathname;
    const prevSearch = prevProps.location.search;
    const thisSearch = this.props.location.search;

    if (prevPathname !== thisPathname) {
      this.sendPageChange(thisPathname, thisSearch);
    } else {
      if (
        prevSearch !== thisSearch &&
        thisSearch !== "" &&
        thisPathname === "/syllabus"
      ) {
        this.debounceSendPageChange(thisPathname, thisSearch);
      }
    }
  }

  sendPageChange(pathname, search) {
    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  debounceSendPageChange = debounce(this.sendPageChange, 2000, {
    leading: false,
  });

  render() {
    return null;
  }
}

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
      <CommonStyle />
      <ErrorBoundary
        fallback={({ error, componentStack, resetError }) => (
          <div style={{ textAlign: "center", padding: "10vw 10vh" }}>
            <h2>You have encountered an error!</h2>
            <h2>エラーが発生しました！</h2>
            <div>{error.toString()}</div>
            <div style={{ textAlign: "left" }}>
              <p>
                Please send an email to bugs@wasedatime.com and describe how the
                bugs happened.
              </p>
              <p>
                お手数ですが、エラー発生の前に行われた操作をメールに述べ、
                bugs@wasedatime.com へ送っていただければ助かります。
              </p>
              <p>We appreciate your help!</p>
              <p>ご協力ありがとうございます！</p>
            </div>
            <button onClick={resetError}>Click here to reset!</button>
          </div>
        )}
      >
        <Suspense fallback={<LoadingSpinner message={"Loading..."} />}>
          {localStorage.getItem("isFirstAccess") === null ||
          localStorage.getItem("isFirstAccess") === "true" ? (
            <Location>
              <Router>
                <Analytics path="/" location={location} />
                <Home path="/" isFirstAccess={true} />
              </Router>
            </Location>
          ) : (
            <Location>
              <Router>
                <Analytics path="/" location={location} />
                <TermsOfService path="/terms-of-service" />
                <PrivacyPolicy path="/privacy-policy" />
                <AboutUs path="/aboutus" />
                <RedirectPage path="/verify" />
                <Home path="/home" isFirstAccess={false} />
                <Redirect from="/" to="/courses/timetable" noThrow />
                <Redirect from="/" to="/courses/timetable" noThrow />
                <Redirect from="/timetable" to="/courses/timetable" noThrow />
                <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
              </Router>
            </Location>
          )}
        </Suspense>
      </ErrorBoundary>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) => matches && <Footer />}
      </MediaQuery>
    </React.Fragment>
  );
};

export default App;
