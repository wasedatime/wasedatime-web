import React from "react"

import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"

import Root from "@app/root.component"

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary: (
    err,
    info,
    props // Customize the root error boundary for your microfrontend here.
  ) => null,
})

export const { bootstrap, mount, unmount } = lifecycles
