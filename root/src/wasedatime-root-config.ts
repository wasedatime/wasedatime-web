import { navigateToUrl, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Nav from "./components/frame/Nav";
import App from "./App";
import "./styles/styles.css";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import translationEN from "./constants/locales/en/translation.json";
import translationJP from "./constants/locales/jp/translation.json";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

configAuth();
i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJP,
});

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-112185819-1", { debug: false, titleCase: false });
  Sentry.init({
    dsn:
      "https://6730c6ebd6784cee8330d59452a33d13@o498993.ingest.sentry.io/5577049",
    environment: process.env.NODE_ENV,
    ignoreErrors: ["Network Error", "NetworkError", "Loading chunk", "Timed out"],
  });
} else {
  ReactGA.initialize("UA-112185819-4", { debug: false, titleCase: false });
}

ReactDOM.render(
  React.createElement("span"),
  document.getElementById("loading")
);
ReactDOM.render(React.createElement(Nav), document.getElementById("nav"));

(localStorage.getItem("isFirstAccess") === null ||
  localStorage.getItem("isFirstAccess") === "true") &&
  navigateToUrl("/");

export const { bootstrap, mount, unmount } = lifecycles;
