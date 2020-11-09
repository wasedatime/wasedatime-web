import axios from "axios";
import { normalize } from "normalizr";

import {
  ADD_COURSE,
  CHANGE_COURSE_COLOR,
  CHANGE_COURSES_SORTING_OPTION,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  HYDRATE_ADDED_COURSES,
  REMOVE_COURSE,
  TOGGLE_COURSE_VISIBILITY,
  ADD_SCHOOL,
  REMOVE_SCHOOL,
} from "./types";
import * as schema from "../data/schema";

export const addSchool = (school) => ({
  type: ADD_SCHOOL,
  payload: school,
});

export const removeSchool = (school) => ({
  type: REMOVE_SCHOOL,
  payload: school,
});

export const fetchCourses = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_COURSES_REQUEST,
  });
  // const res = await axios.get(
  //   `https://api.wasedatime.com/staging/syllabus/`
  // );
  // const normalizedCourses = normalize(res.data, schema.coursesSchema);

  const schools = getState().fetchedCourses.schools;
  var coursesBySchool = {};

  try {
    Promise.all(
      schools.map(async (school) => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/syllabus/${school}`
        );
        coursesBySchool[school] = normalize(res.data, schema.coursesSchema);
        return;
      })
    ).then(() => {
      // const normalizedCourses = normalize(courses, schema.coursesSchema);
      const fetchedTime = new Date().toISOString();
      dispatch({
        type: FETCH_COURSES_SUCCESS,
        response: {
          coursesBySchool,
          fetchedTime,
        },
      });
    });
  } catch (error) {
    const response = error.response || {
      status: 501,
      statusText: "Not Implemented",
    };
    dispatch({
      type: FETCH_COURSES_FAILURE,
      error: response,
    });
  }
};

//ES6 syntax also allows omitting return statement
export const hydrateAddedCourses = (prefs, fetchedCoursesById) => ({
  type: HYDRATE_ADDED_COURSES,
  payload: {
    prefs,
    fetchedCoursesById,
  },
});

export const addCourse = (course, displayLang) => ({
  type: ADD_COURSE,
  payload: {
    id: course._id,
    semester: course.tm,
    course: course,
    displayLang: displayLang,
  },
});

export const removeCourse = (id) => ({
  type: REMOVE_COURSE,
  payload: {
    id,
  },
});

export const changeCourseColor = (id, color) => ({
  type: CHANGE_COURSE_COLOR,
  payload: {
    id,
    color,
  },
});

export const toggleCourseVisibility = (id) => ({
  type: TOGGLE_COURSE_VISIBILITY,
  payload: {
    id,
  },
});

export const changeCoursesSortingOption = (sortingOption, semester) => ({
  type: CHANGE_COURSES_SORTING_OPTION,
  payload: {
    sortingOption,
    semester,
  },
});
