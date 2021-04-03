import React from "react";
import Career from "./components/Career";
import { BrowserRouter } from "react-router-dom";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import translationEN from "./constants/locales/en/translation.json";
import translationJA from "./constants/locales/ja/translation.json";
import 'semantic-ui-css/semantic.min.css'

i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJA,
});

export default function Root(props) {
  return <section><BrowserRouter><Career /></BrowserRouter></section>;
}
