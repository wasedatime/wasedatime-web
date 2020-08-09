import localForage from "localforage";

export const LNG_KEY = "wasedatime-2020-lng";
const STATE_NAME = "wasedatime-2020-state";
const STATE_FECTHED_COURSES_NAME = "wasedatime-2020-state-fc";
const DATA_TO_SAVE = [LNG_KEY, STATE_NAME, STATE_FECTHED_COURSES_NAME];

export const loadState = () => {
  return Promise.all([
    localForage.getItem(STATE_NAME),
    localForage.getItem(STATE_FECTHED_COURSES_NAME),
  ])
    .then((states) => {
      const state = states[0];
      const fetchedCourses = states[1];

      if (state === null || fetchedCourses === null) {
        return undefined;
      }

      const fallPrefs = state.addedCourses.fall.prefs.map((pref) => {
        pref["displayLang"] = pref["displayLang"] || "en";
        return pref;
      });
      const springPrefs = state.addedCourses.spring.prefs.map((pref) => {
        pref["displayLang"] = pref["displayLang"] || "en";
        return pref;
      });

      state.addedCourses.fall.prefs = fallPrefs;
      state.addedCourses.spring.prefs = springPrefs;

      return {
        ...state,
        fetchedCourses,
      };
    })
    .catch((error) => {
      console.error(error);
      // In case of any errors, play safe and let reducers initialize the state.
      return undefined;
    });
};

export const saveState = (state) => {
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    const key = localStorage.key(i);
    if (!DATA_TO_SAVE.includes(key)) {
      localStorage.clear();
      localForage
        .clear()
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const { fetchedCourses, ...rest } = state;
  localForage
    .setItem(STATE_NAME, rest)
    .then((value) => {})
    .catch((error) => {
      console.error(error);
    });
  localForage
    .setItem(STATE_FECTHED_COURSES_NAME, fetchedCourses)
    .then((value) => {})
    .catch((error) => {
      console.error(error);
    });
};
