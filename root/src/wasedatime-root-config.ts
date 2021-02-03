import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Nav from "./frame/Nav";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.css";

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

ReactDom.render(React.createElement(Nav), document.getElementById("nav"));
if (document.getElementById("default")) {
  ReactDom.render(React.createElement(App), document.getElementById("default"));
}
