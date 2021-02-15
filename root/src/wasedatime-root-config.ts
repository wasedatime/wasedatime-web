import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { BrowserRouter } from "react-router-dom";
import Auth from "@aws-amplify/auth";
import Nav from "./components/frame/Nav";
import App from "./App";
import "./styles/index.css";
import "semantic-ui-css/semantic.min.css";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

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
i18nConfig();
serviceWorkerRegistration.register();

ReactDOM.render(
  React.createElement("span"),
  document.getElementById("loading")
);
ReactDOM.render(React.createElement(Nav), document.getElementById("nav"));

export const { bootstrap, mount, unmount } = lifecycles;

// if (document.getElementById("default")) {
//   ReactDom.render(React.createElement(App), document.getElementById("default"));
// }
