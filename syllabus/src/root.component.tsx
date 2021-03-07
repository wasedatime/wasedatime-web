import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import App from "./App";
import API from "@aws-amplify/api";
import configureStore from "./configureStore";
import { saveState } from "./localForage";
import throttle from "lodash/throttle";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import translationEN from "./constants/locales/en/translation.json";
import translationJP from "./constants/locales/ja/translation.json";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import { useTranslation } from "react-i18next";
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import ErrorFallback from "@bit/wasedatime.core.ts.ui.error-fallback";

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
i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJP,
});
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
        <ErrorFallback error={error} resetError={resetError} />
      )}
    >
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Sentry.ErrorBoundary>
  ) : (
    <LoadingSpinner message="Loading..." />
  );
};

export default Root;
