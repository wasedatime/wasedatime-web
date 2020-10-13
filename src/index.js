import React from "react";
import { render } from "react-dom";
import throttle from "lodash/throttle";

import configureStore from "./configureStore";
import { saveState } from "./localForage";
import Root from "./js/components/Root";

import "normalize-css/normalize.css";
import "./styles/styles.css";
import "./js/components/i18n";

configureStore().then((store) => {
  store.subscribe(
    throttle(() => {
      const state = store.getState();
      saveState(state);
    }, 800)
  );

  render(<Root store={store} />, document.getElementById("root"));
});
