import { combineReducers } from "redux";

import { CHANGE_USER_LANG } from "../actions/types";
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

const user = combineReducers({
  displayLang
});

export default user;

export const getUserDisplayLang = state => {
  return state.user.displayLang;
};
