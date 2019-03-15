const STATE_NAME = "wasedatime-2019-state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_NAME);
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    const fallPrefs = state.addedCourses.fall.prefs.map(pref => {
      if (pref["displayLang"] === undefined) {
        pref["displayLang"] = "en";
      }
      return pref;
    });
    const springPrefs = state.addedCourses.spring.prefs.map(pref => {
      if (pref["displayLang"] === undefined) {
        pref["displayLang"] = "en";
      }
      return pref;
    });

    state.addedCourses.fall.prefs = fallPrefs;
    state.addedCourses.spring.prefs = springPrefs;
    console.log(state);

    return state;
  } catch (error) {
    console.log(error);
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
