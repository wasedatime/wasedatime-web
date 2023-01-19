import React, { Suspense, useContext, useEffect } from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "@app/App";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context";

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  },
});

const LoadingSpinnerContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ height: "100vh" }} className="dark:bg-dark-bgMain">
      <LoadingSpinner theme={theme} message="Loading..." />
    </div>
  );
};

const Root = (props) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
  }, []);

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
  );
};

export default Root;
