import { combineReducers } from "redux";
import LANGS from "../config/langs";

import {
  CHANGE_USER_DISPLAY_LANG,
  SET_FIRST_TIME_ACCESS_TO_FALSE
} from "../actions/types";

const isFirstTimeAccess = (state = true, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_ACCESS_TO_FALSE:
      return action.payload.isFirstTimeAccess;
    default:
      return state;
  }
};

const displayLang = (state = LANGS.JP, action) => {
  switch (action.type) {
    case CHANGE_USER_DISPLAY_LANG:
      return action.payload.displayLang;
    default:
      return state;
  }
};

const user = combineReducers({
  isFirstTimeAccess,
  displayLang
});

export default user;

export const getUserIsFirstTimeAccess = state => {
  return state.user.isFirstTimeAccess;
};

export const getUserDisplayLang = state => {
  return state.user.displayLang;
};
