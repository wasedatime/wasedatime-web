import { combineReducers } from "redux";

import {
  CHANGE_USER_LANG,
  SET_FIRST_TIME_ACCESS_TO_FALSE
} from "../actions/types";
import LANGS from "../config/langs";

//TODO Change 'en' to null after the initial modal for setting up user profile is done.
const displayLang = (state = LANGS.EN, action) => {
  switch (action.type) {
    case CHANGE_USER_LANG:
      return action.payload.displayLang;
    default:
      return state;
  }
};

const isFirstTimeAccess = (state = true, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_ACCESS_TO_FALSE:
      return action.payload.isFirstTimeAccess;
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
