import React, { useState, useEffect, useContext } from "react"

import API from "@aws-amplify/api"
import { LoadingSpinner, configAuth } from "wasedatime-ui"
import * as Sentry from "@sentry/react"
import throttle from "lodash/throttle"
import ReactGA from "react-ga"
import { useTranslation } from "react-i18next"
import { Provider } from "react-redux"

import App from "@app/App"
import ErrorFallback from "@app/components/ErrorFallback"
import configureStore from "@app/configureStore"
import "@app/utils/i18n"
import { saveState } from "@app/utils/localforage-global-state"
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context"

const config = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: import.meta.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
}
API.configure(config)

configAuth()

ReactGA.initialize(import.meta.env.VITE_GA_ID, {
  debug: false,
  titleCase: false,
})

const LoadingSpinnerContainer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ height: "100vh" }} className="dark:bg-dark-bgMain">
      <LoadingSpinner theme={theme} message="Loading..." />
    </div>
  )
}

const Root = () => {
  const { i18n } = useTranslation()
  const [reduxStore, setReduxStore] = useState(null)

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
    if (!reduxStore) {
      storeConfig()
    }
  }, [])

  const storeConfig = async () => {
    const store = await configureStore()

    store.subscribe(
      throttle(() => {
        const state = store.getState()
        saveState(state)
      }, 800)
    )
    setReduxStore(store)
  }

  return (
    <ThemeProvider>
      {reduxStore ? (
        <Sentry.ErrorBoundary
          fallback={({ error, componentStack, resetError }) => (
            <ErrorFallback error={error} resetError={resetError} />
          )}
        >
          <Provider store={reduxStore}>
            <App />
          </Provider>
        </Sentry.ErrorBoundary>
      ) : (
        <LoadingSpinnerContainer />
      )}
    </ThemeProvider>
  )
}

export default Root
