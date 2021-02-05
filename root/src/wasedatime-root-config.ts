import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "@aws-amplify/auth";
import Nav from "./components/frame/Nav";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.css";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";

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

ReactDom.render(React.createElement(Nav), document.getElementById("nav"));
if (document.getElementById("default")) {
  ReactDom.render(React.createElement(App), document.getElementById("default"));
}
