import React from "react";
import i18next from "i18next";
import { Lang, LoadingSpinner, i18nConfig, configAuth } from "wasedatime-ui"

import App from "@app/components/App";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import { ThemeProvider } from "@app/utils/theme-context";
import { RecoilRoot } from "recoil";

import "@app/styles/main.css";

configAuth();

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  },
});

export default function Root(props) {
  return (
    <section className="h-screen">
      <RecoilRoot>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </section>
  );
}
