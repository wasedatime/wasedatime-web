import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import App from "./App";
import API from "@aws-amplify/api";
import configureStore from "./configureStore";
import { saveState } from "./localForage";
import throttle from "lodash/throttle";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import { useTranslation } from "react-i18next";
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga";

const config = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: process.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
};
API.configure(config);

configAuth();
i18nConfig();
ReactGA.initialize("UA-112185819-3", { debug: false, titleCase: false });

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://6730c6ebd6784cee8330d59452a33d13@o498993.ingest.sentry.io/5577049",
    environment: process.env.NODE_ENV,
  });
}

const Root = () => {
  const [reduxStore, setReduxStore] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
    if (!reduxStore) {
      storeConfig();
    }
  }, []);

  const storeConfig = async () => {
    const store = await configureStore();

    store.subscribe(
      throttle(() => {
        const state = store.getState();
        saveState(state);
      }, 800)
    );
    setReduxStore(store);
  };

  return reduxStore ? (
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
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Sentry.ErrorBoundary>
  ) : (
    <div>Loading...</div>
  );
};

export default Root;
