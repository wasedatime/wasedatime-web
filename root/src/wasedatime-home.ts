import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import "@app/styles/styles.css";
import App from "@app/App";

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

export const { bootstrap, mount, unmount } = lifecycles;
