import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import { Route, BrowserRouter } from "react-router-dom";
import debounce from "lodash/debounce";
import * as Sentry from "@sentry/react";

import App from "./App";

// A invisible component that sends a GA pageview every time
// the pathname of the user is changed.
// Written by @dandalf and improved by @ianarundale and @jessepinho.
// Reference: https://github.com/react-ga/react-ga/issues/122#issuecomment-353101102
class Analytics extends React.Component {
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

const Root = ({ store }) => {
  // production -> UA-112185819-1, staging -> UA-112185819-4, dev/others -> UA-112185819-3
  let trackingId;
  let debug = false;
  if (process.env.NODE_ENV === "production") {
    trackingId =
      process.env.REACT_APP_ENV === "staging"
        ? "UA-112185819-4"
        : "UA-112185819-1";
  } else {
    trackingId = "UA-112185819-3";
    debug = true;
  }

  ReactGA.initialize(trackingId, { debug: debug, titleCase: false });
  const analyticsRoute = <Route path="/" component={Analytics} />;
  return (
    <Sentry.ErrorBoundary
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
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {analyticsRoute}
            <App />
          </div>
        </BrowserRouter>
      </Provider>
    </Sentry.ErrorBoundary>
  );
};

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
