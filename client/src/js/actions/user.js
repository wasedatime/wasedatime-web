import {
  CHANGE_USER_DISPLAY_LANG,
  SET_FIRST_TIME_ACCESS_TO_FALSE
} from "./types";

export const changeUserDisplayLang = lang => ({
  type: CHANGE_USER_DISPLAY_LANG,
  payload: {
    displayLang: lang
  }
});

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false
  }
});
