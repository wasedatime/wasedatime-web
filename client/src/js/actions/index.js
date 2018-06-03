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
  FETCH_BUILDINGS_FAILURE
} from './types';
import * as schema from '../data/schema';

// temporary floating ip
const API_BASE_URL = 'http://139.59.216.161/';
const YEAR = '2018-2019/'
const API_URL = API_BASE_URL + YEAR;

export const fetchStats = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_STATS_REQUEST
  });

  try {
    // const res = await axios.get(API_URL + 'scraper_stats/index.json');
    const res = await axios.get('/api/stats');
    const stats = res.data;
    dispatch({
      type: FETCH_STATS_SUCCESS,
      response: stats
    });
  } catch (error) {
    const response = error.response || {status: 501, statusText: "Not Implemented"};
    dispatch({
      type: FETCH_STATS_FAILURE,
      error: response
    });
  }
}

export const fetchCourses = filter => async (dispatch, getState) => {
  dispatch({
    type: FETCH_COURSES_REQUEST
  });

  try {
    // const res = await axios.get(API_URL + 'course_list_sci_eng.json');
    const res = await axios.get('/api/courses');
    const courses = res.data;
    const normalizedCourses = normalize(courses, schema.coursesSchema);
    dispatch({
      type: FETCH_COURSES_SUCCESS,
      response: normalizedCourses
    });
  } catch (error) {
    const response = error.response || {status: 501, statusText: "Not Implemented"};
    dispatch({
      type: FETCH_COURSES_FAILURE,
      error: response
    });
  }
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
