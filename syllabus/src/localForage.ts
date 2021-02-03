import localForage from "localforage";

export const LNG_KEY = "wasedatime-2020-lng";
const PREV_STATE_NAME = "wasedatime-2019-state";
const STATE_NAME = "wasedatime-2020-state";
const STATE_FETCHED_COURSES_NAME = "wasedatime-2020-state-fc";
const STATE_ADDED_COURSES_NAME = "wasedatime-2020-state-ac";

export const loadState = () => {
  return localForage
    .getItem("wasedatime-2021-state")
    .then((state) => state)
    .catch((err) => console.error(err));
};

export const saveState = (state: object) => {
  localForage
    .setItem("wasedatime-2021-state", state)
    .then((value) => {})
    .catch((error) => {
      console.error(error);
    });
};
