import React from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import i18next from "i18next";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { navigateToUrl, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import singleSpaReact from "single-spa-react";

import "@app/styles/styles.css";
import App from "@app/App";
import Nav from "@app/components/frame/Nav";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/jp/translation.json";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary: (
    err,
    info,
    props // Customize the root error boundary for your microfrontend here.
  ) => {
    console.log("====================================");
    console.error(err);
    console.log(info);
    console.log(props);
    console.log("====================================");

    return null;
  },
});

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  // loadApp: ({ name }) => System.import(name),
  loadApp: ({ name }) => {
    if (name === "@wasedatime/root-config") {
      return System.import(name)
    } else {
      return import(
        /* webpackIgnore: true */
        // @ts-ignore
        name
      )
    }
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

configAuth();

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  },
});

// ===== GA id =====
// production (wasedatime.com): UA-112185819-1
// staging (dev.wasedatime.com): UA-112185819-3
// development (localhost): UA-112185819-4
if (process.env.NODE_ENV === "development") {
  ReactGA.initialize("UA-112185819-4", { debug: false, titleCase: false });
} else {
  ReactGA.initialize(
    process.env.NODE_ENV === "production" ? "UA-112185819-1" : "UA-112185819-3",
    { debug: false, titleCase: false }
  );
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
