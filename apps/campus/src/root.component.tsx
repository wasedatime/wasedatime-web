import React, { Suspense, useContext, useEffect } from "react"
import { LoadingSpinner } from "wasedatime-ui"
import { useTranslation } from "react-i18next"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "@app/App"
import "@app/utils/i18n"
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context"

const LoadingSpinnerContainer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{ height: "100vh" }} className="dark:bg-dark-bgMain">
      <LoadingSpinner theme={theme} message="Loading..." />
    </div>
  )
}

const Root = (props) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"))
  }, [])

  return (
    <section>
      <ThemeProvider>
        <Suspense fallback={<LoadingSpinnerContainer />}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />} path="campus" />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </section>
  )
}

export default Root
