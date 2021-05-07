import React, { lazy, Suspense } from "react";
const BlogIndex = lazy(() => import("./component/BlogIndex"));
const CareerArticles = lazy(() => import("./component/CareerArticles"));
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import "./styles/styles.css";

import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import translationEN from "./constants/locales/en/translation.json";
import translationJA from "./constants/locales/ja/translation.json";
import Lang from "@bit/wasedatime.core.ts.constants.langs";

i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJA,
});

export default function Root(props) {
  return (
    <Suspense fallback={<LoadingSpinner message="Loading feeds..." />}>
      <Router>
        <Switch>
          <Route path="/feeds/articles/:title" component={CareerArticles} />
          <Route exact path="/feeds" component={BlogIndex} />
        </Switch>
      </Router>
    </Suspense>
  );
}
