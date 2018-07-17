import axios from 'axios';
import { normalize } from 'normalizr';

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  HYDRATE_ADDED_COURSES,
  ADD_COURSE,
  REMOVE_COURSE,
  CHANGE_COURSE_COLOR,
  TOGGLE_COURSE_VISIBILITY
} from './types';
import * as schema from '../data/schema';
import { wasetimeApiStatic } from '../api/index';

export const fetchCourses = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_COURSES_REQUEST
  });

  try {
    const res = await axios.get(wasetimeApiStatic.courseListAll);
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

//ES6 syntax also allows omitting return statement
export const hydrateAddedCourses = (properties, coursesById) => ({
  type: HYDRATE_ADDED_COURSES,
  payload: {
    properties,
    coursesById
  }
});

export const addCourse = (id, course) => ({
  type: ADD_COURSE,
  payload: {
    id,
    course
  }
});

export const removeCourse = id => ({
  type: REMOVE_COURSE,
  payload: {
    id
  }
});

export const changeCourseColor = (id, color) => ({
  type: CHANGE_COURSE_COLOR,
  payload: {
    id,
    color
  }
});

export const toggleCourseVisibility = id => ({
  type: TOGGLE_COURSE_VISIBILITY,
  payload: {
    id
  }
});
