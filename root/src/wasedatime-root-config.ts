import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import React from "react";
import ReactDom from "react-dom";
import Nav from "./Nav";

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
