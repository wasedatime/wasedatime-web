import React, { useState, useEffect, useContext } from "react";

import API from "@aws-amplify/api";
import { Lang, LoadingSpinner, i18nConfig, configAuth } from "wasedatime-ui";
import * as Sentry from "@sentry/react";
import i18next from "i18next";
import throttle from "lodash/throttle";
import ReactGA from "react-ga";
import { Provider } from "react-redux";

import App from "@app/App";
import ErrorFallback from "@app/components/ErrorFallback";
import configureStore from "@app/configureStore";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import { saveState } from "@app/utils/localforage-global-state";
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context";

const config = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: import.meta.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
};
API.configure(config);

configAuth();

ReactGA.initialize(import.meta.env.VITE_GA_ID, {
  debug: false,
  titleCase: false,
});

const LoadingSpinnerContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ height: "100vh" }} className="dark:bg-dark-bgMain">
      <LoadingSpinner theme={theme} message="Loading..." />
    </div>
  );
};

const Root = () => {
  const [reduxStore, setReduxStore] = useState(null);

  useEffect(() => {
    i18nConfig({
      i18n: i18next,
      customTranslations: {
        [Lang.EN]: translationEN,
        [Lang.JA]: translationJA,
      },
    });
    // i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
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

  return (
    <ThemeProvider>
      {reduxStore ? (
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
        <LoadingSpinnerContainer />
      )}
    </ThemeProvider>
  );
};

export default Root;
