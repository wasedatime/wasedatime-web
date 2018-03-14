import axios from 'axios';
import { normalize } from 'normalizr';

import {
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_BUILDINGS_FAILURE,
  SEARCH_COURSES
} from './types';
import * as schema from '../data/schema';

export const fetchStats = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_STATS_REQUEST
  });

  try {
    const res = await axios.get('/api/stats');
    const stats = res.data;
    dispatch({
      type: FETCH_STATS_SUCCESS,
      response: stats
    });
  } catch (error) {
    dispatch({
      type: FETCH_STATS_FAILURE,
      response: error.response
    });
  }
}

export const fetchCourses = filter => async (dispatch, getState) => {
  dispatch({
    type: FETCH_COURSES_REQUEST
  });

  try {
    const res = await axios.get('/api/courses');
    const courses = res.data;
    const normalizedCourses = normalize(courses, schema.coursesSchema);
    dispatch({
      type: FETCH_COURSES_SUCCESS,
      response: normalizedCourses
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSES_FAILURE,
      error: error.response
    });
  }
};

export const searchCourses = searchTerm => {
  return { type: SEARCH_COURSES, searchTerm };
};

export const fetchBuildings = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_BUILDINGS_REQUEST
  });

  try {
    const res = await axios.get('/api/buildings');
    const buildings = res.data;
    const normalizedBuildings = normalize(buildings, schema.buildingsSchema);
    dispatch({
      type: FETCH_BUILDINGS_SUCCESS,
      response: normalizedBuildings
    });
  } catch (error) {
    dispatch({
      type: FETCH_BUILDINGS_FAILURE,
      error: error.response
    });
  }
};
