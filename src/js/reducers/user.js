import { combineReducers } from "redux";

import {
  SET_FIRST_TIME_ACCESS_TO_FALSE,
  IS_AUTHENTICATED,
  NOT_AUTHENTICATED,
} from "../actions/types";

const isFirstTimeAccess = (state = true, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_ACCESS_TO_FALSE:
      return action.payload.isFirstTimeAccess;
    default:
      return state;
  }
};

const info = (state = null, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return action.payload;
    case NOT_AUTHENTICATED:
      return null;
    default:
      return state;
  }
};

const user = combineReducers({
  isFirstTimeAccess,
  info,
});

export default user;

export const getUserIsFirstTimeAccess = (state) => {
  return state.user.isFirstTimeAccess;
};

export const getUserInfo = (state) => {
  return state.user.info;
};
