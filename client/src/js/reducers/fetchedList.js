import { combineReducers } from "redux";

const fetchedList = (actionTypes) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        return action.response.result;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case actionTypes.fetchRequest:
        return true;
      case actionTypes.fetchSuccess:
      case actionTypes.fetchFailure:
        return false;
      default:
        return state;
    }
  };

  const error = (state = null, action) => {
    switch (action.type) {
      case actionTypes.fetchFailure:
        return action.error;
      case actionTypes.fetchRequest:
      case actionTypes.fetchSuccess:
        return null;
      default:
        return state;
    }
  };
  return combineReducers({ ids, isFetching, error });
};

export default fetchedList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getError = (state) => state.error;
