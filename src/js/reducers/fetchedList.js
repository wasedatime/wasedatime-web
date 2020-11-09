import { combineReducers } from "redux";

const fetchedList = (actionTypes) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        var ids = {};
        const coursesBySchool = action.response["coursesBySchool"];

        Object.keys(coursesBySchool).forEach((school) => {
          if (coursesBySchool[school].result) {
            ids[school] = coursesBySchool[school].result;
          }
        });
        return ids;
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

  const fetchedTime = (state = null, action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        return action.response.fetchedTime;
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
  return combineReducers({ ids, isFetching, fetchedTime, error });
};

export default fetchedList;

export const getIds = (state) => {
  var ids = [];
  const idsBySchool = state.ids;
  Object.keys(idsBySchool).forEach((school) => {
    ids = [...ids, ...idsBySchool[school]];
  });
  return ids;
};

export const getIsFetching = (state) => state.isFetching;
export const getError = (state) => state.error;
