import { combineReducers } from "redux";

import { UPDATE_LANGUAGE } from "../actions/types";

const getLanguage = (state = {}, action) => {
  switch (action.type) {
    case GET_LANGUAGE:
      return state;
    default:
      return state;
  }
};
export default getLanguage;
