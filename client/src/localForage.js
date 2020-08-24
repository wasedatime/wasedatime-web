import localForage from "localforage";

export const LNG_KEY = "wasedatime-2020-lng";
const PREV_STATE_NAME = "wasedatime-2019-state";
const STATE_NAME = "wasedatime-2020-state";
const STATE_FECTHED_COURSES_NAME = "wasedatime-2020-state-fc";
const DATA_TO_SAVE = [LNG_KEY, STATE_NAME, STATE_FECTHED_COURSES_NAME];

export const loadState = () => {
  let prevState = null;
  try {
    const serializedPrevState = localStorage.getItem(PREV_STATE_NAME);
    if (serializedPrevState !== null) {
      prevState = JSON.parse(serializedPrevState);
    }
  } catch (error) {
    console.log(error);
  }

  return Promise.all([
    localForage.getItem(STATE_NAME),
    localForage.getItem(STATE_FECTHED_COURSES_NAME),
  ])
    .then((states) => {
      let state;
      let fetchedCourses;
      if (prevState !== null) {
        state = prevState;
        state.user.isFirstTimeAccess = true;
        fetchedCourses = {
          byId: {},
          list: {},
        };
      } else {
        state = states[0];
        fetchedCourses = states[1];
      }

      if (prevState === null && (state === null || fetchedCourses === null)) {
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
