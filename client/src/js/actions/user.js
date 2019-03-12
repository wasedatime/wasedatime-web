import { CHANGE_USER_LANG, SET_FIRST_TIME_ACCESS_TO_FALSE } from "./types";

export const changeUserLang = lang => ({
  type: CHANGE_USER_LANG,
  payload: {
    lang
  }
});

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false
  }
});
