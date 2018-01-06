import { combineReducers } from 'redux';

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE
} from '../actions/types';

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.response.result;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return true;
    case FETCH_COURSES_SUCCESS:
    case FETCH_COURSES_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_COURSES_FAILURE:
      return action.message;
    case FETCH_COURSES_REQUEST:
    case FETCH_COURSES_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ ids, isFetching, errorMessage });

//Export selectors
export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
