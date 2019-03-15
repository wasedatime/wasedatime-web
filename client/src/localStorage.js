const STATE_NAME = "wasedatime-2019-state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_NAME);
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    const fallPrefs = state.addedCourses.fall.prefs.map(pref => {
      return pref["displayLang"] === undefined
        ? (pref["displayLang"] = "en")
        : pref;
    });
    const springPrefs = state.addedCourses.spring.prefs.map(pref => {
      return pref["displayLang"] === undefined
        ? (pref["displayLang"] = "en")
        : pref;
    });

    state.addedCourses.fall.prefs = fallPrefs;
    state.addedCourses.spring.prefs = springPrefs;
    return state;
  } catch (error) {
    // In case of any errors, play safe and let reducers initialize the state.
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_NAME, serializedState);
  } catch (error) {
    console.log(error);
  }
};
