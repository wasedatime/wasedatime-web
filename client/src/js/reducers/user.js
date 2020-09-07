import { combineReducers } from "redux";

import { SET_FIRST_TIME_ACCESS_TO_FALSE } from "../actions/types";

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
});

export default user;

export const getUserIsFirstTimeAccess = (state) => {
  return state.user.isFirstTimeAccess;
};
