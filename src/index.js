import React from "react";
import { hydrate, render } from "react-dom";
import throttle from "lodash/throttle";
import * as Sentry from "@sentry/react";

import configureStore from "./configureStore";
import { saveState } from "./localForage";
import Root from "./js/components/Root";

import "normalize-css/normalize.css";
import "./styles/styles.css";
import "./js/components/i18n";

import Amplify from "aws-amplify";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: process.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
});

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn:
      "https://6730c6ebd6784cee8330d59452a33d13@o498993.ingest.sentry.io/5577049",
    environment: process.env.NODE_ENV,
  });
}

configureStore().then((store) => {
  store.subscribe(
    throttle(() => {
      const state = store.getState();
      saveState(state);
    }, 800)
  );

  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(<Root store={store} />, rootElement);
  } else {
    render(<Root store={store} />, rootElement);
  }
});
