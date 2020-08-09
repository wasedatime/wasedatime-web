import React from "react";
import { render } from "react-dom";
import throttle from "lodash/throttle";

import configureStore from "./configureStore";
import { saveState } from "./localStorage";
import Root from "./js/components/Root";

import "normalize-css/normalize.css";
import "./styles/styles.css";
import "./js/components/i18n";

const store = configureStore();

store.subscribe(
  throttle(() => {
    const state = store.getState();
    const addedCourses = state.addedCourses;
    const user = state.user;
    saveState({
      addedCourses: {
        fall: {
          prefs: addedCourses.fall.prefs,
          sortingOption: addedCourses.fall.sortingOption
        },
        spring: {
          prefs: addedCourses.spring.prefs,
          sortingOption: addedCourses.spring.sortingOption
        }
      },
      fetchedCourses: state.fetchedCourses,
      user: user
    });
  }, 800)
);

render(<Root store={store} />, document.getElementById("root"));
