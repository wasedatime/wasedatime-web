import { combineReducers } from "redux";

import {
  SET_FIRST_TIME_ACCESS_TO_FALSE,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "../actions/types";

const isFirstTimeAccess = (state = true, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_ACCESS_TO_FALSE:
      return action.payload.isFirstTimeAccess;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return action.payload;
    case SIGN_IN_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const user = combineReducers({
  isFirstTimeAccess,
  isAuthenticated,
});

export default user;

export const getUserIsFirstTimeAccess = (state) => {
  return state.user.isFirstTimeAccess;
};

export const getUserIsAuthenticated = (state) => {
  return state.user.isAuthenticated;
};
