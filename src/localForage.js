import localForage from "src/localForage";

export const LNG_KEY = "wasedatime-2020-lng";
const PREV_STATE_NAME = "wasedatime-2019-state";
const STATE_NAME = "wasedatime-2020-state";
const STATE_FETCHED_COURSES_NAME = "wasedatime-2020-state-fc";
const STATE_ADDED_COURSES_NAME = "wasedatime-2020-state-ac";
const DATA_TO_SAVE = [
  LNG_KEY,
  STATE_NAME,
  STATE_FETCHED_COURSES_NAME,
  STATE_ADDED_COURSES_NAME,
];

export const loadState = () => {
  let prevState = null;
  try {
    const serializedPrevState = localStorage.getItem(PREV_STATE_NAME);
    if (serializedPrevState !== null) {
      prevState = JSON.parse(serializedPrevState);
    }
  } catch (error) {
    console.error(error);
  }

  return Promise.all([
    localForage.getItem(STATE_NAME),
    localForage.getItem(STATE_FETCHED_COURSES_NAME),
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

        let needsUpdate = false;
        if (fetchedCourses !== null) {
          const fetchedTime = fetchedCourses.list.fetchedTime;

          let nextUpdateTime = new Date(fetchedTime);
          // Courses are updated at 7am everyday
          // if the last fetched time is 0 - 6 o'clock, the next update time is the same day, 7am
          // if the last fetched time is 7 - 23 o'clock, the next update time is the next day, 7am
          if (nextUpdateTime.getHours() >= 7) {
            nextUpdateTime.setDate(nextUpdateTime.getDate() + 1);
          }
          nextUpdateTime.setHours(7, 0, 0, 0);

          const currentTime = new Date();
          needsUpdate = currentTime >= nextUpdateTime;
        }

        if (fetchedCourses === null || needsUpdate) {
          fetchedCourses = {
            byId: {},
            list: {},
          };
        }
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
  localStorage.setItem(
    STATE_ADDED_COURSES_NAME,
    JSON.stringify(rest.addedCourses)
  );
  localForage
    .setItem(STATE_NAME, rest)
    .then((value) => {})
    .catch((error) => {
      console.error(error);
    });
  localForage
    .setItem(STATE_FETCHED_COURSES_NAME, fetchedCourses)
    .then((value) => {})
    .catch((error) => {
      console.error(error);
    });
};
