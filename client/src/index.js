import React from "react";
import { render } from "react-dom";
import throttle from "lodash/throttle";

import configureStore from "./configureStore";
import { loadState, saveState } from "./localStorage";
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
    // There are no fetchedCourses in redux store when opening a new course evaluation tab,
    // so load fetchedCourses from localStorage instead.
    var fetchedCourses = loadState().fetchedCourses;
    // When the user is not in a new course evaluation tab
    // and fetchedCourses are not saved in localStorage yet,
    // fetch them from the redux store and save them to localStorage.
    if (!fetchedCourses || Object.keys(fetchedCourses).length === 0) {
      fetchedCourses = state.fetchedCourses.byId;
    }
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
      fetchedCourses: fetchedCourses,
      user: user
    });
  }, 800)
);

render(<Root store={store} />, document.getElementById("root"));
