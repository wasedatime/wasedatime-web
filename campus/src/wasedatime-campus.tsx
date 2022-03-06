import React from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import i18next from "i18next";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import Root from "@app/root.component";

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
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
