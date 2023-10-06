import React from "react"

import { configAuth } from "wasedatime-ui"
import ReactDOM from "react-dom"
import ReactGA from "react-ga4"
import { navigateToUrl, registerApplication, start } from "single-spa"
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout"

import "@app/styles/styles.css"
import "@app/utils/i18n"
import Nav from "@app/components/frame/Nav"

import { registerSW } from "virtual:pwa-register"

import { API } from "@aws-amplify/api"

if (import.meta.env.MODE !== "development" && "serviceWorker" in navigator) {
  registerSW()
}

const apiConfig = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: import.meta.env.VITE_API_BASE_URL,
      },
    ],
  },
}
API.configure(apiConfig)

const routes = constructRoutes(document.querySelector("#single-spa-layout"))
const applications = constructApplications({
  routes,
  // loadApp: ({ name }) => System.import(name),
  loadApp: ({ name }) =>
    import(
      /* @vite-ignore */
      // @ts-ignore
      name
    ),
})
const layoutEngine = constructLayoutEngine({ routes, applications })
applications.forEach(registerApplication)
layoutEngine.activate()
start()

configAuth()

ReactGA.initialize(import.meta.env.VITE_GA_ID, {})

ReactDOM.render(React.createElement("span"), document.getElementById("loading"))
ReactDOM.render(React.createElement(Nav), document.getElementById("nav"))
;(localStorage.getItem("isFirstAccess") === null ||
  localStorage.getItem("isFirstAccess") === "true") &&
  navigateToUrl("/")
