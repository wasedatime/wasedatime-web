import { normalize } from "normalizr";
import API from "@aws-amplify/api";

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
  ADD_SCHOOL_FETCH_COURSES_FAILURE,
  ADD_SCHOOL_FETCH_COURSES_REQUEST,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
} from "./types";
import { SYLLABUS_KEYS } from "../config/syllabusKeys";
import * as schema from "../data/schema";

export const addSchool = (school) => ({
  type: ADD_SCHOOL,
  payload: school,
});

export const removeSchool = (school) => ({
  type: REMOVE_SCHOOL,
  payload: school,
});

export const fetchCourses = (schoolToLoad = null) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: schoolToLoad
      ? ADD_SCHOOL_FETCH_COURSES_REQUEST
      : FETCH_COURSES_REQUEST,
  });
  // const res = await axios.get(
  //   `https://api.wasedatime.com/staging/syllabus/`
  // );
  // const normalizedCourses = normalize(res.data, schema.coursesSchema);

  const schools = schoolToLoad
    ? [schoolToLoad]
    : getState().fetchedCourses.schools;
  var coursesBySchool = {};

  try {
    Promise.all(
      schools.map(async (school) => {
        const res = await API.get("wasedatime-dev", `/syllabus/${school}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        coursesBySchool[school] = normalize(res, schema.coursesSchema);
        return;
      })
    ).then(() => {
      // const normalizedCourses = normalize(courses, schema.coursesSchema);
      const fetchedTime = new Date().toISOString();
      dispatch(
        schoolToLoad
          ? {
              type: ADD_SCHOOL_FETCH_COURSES_SUCCESS,
              response: {
                courses: coursesBySchool[schoolToLoad],
                school: schoolToLoad,
                fetchedTime,
              },
            }
          : {
              type: FETCH_COURSES_SUCCESS,
              response: {
                coursesBySchool,
                fetchedTime,
              },
            }
      );
    });
  } catch (error) {
    const response = error.response || {
      status: 501,
      statusText: "Not Implemented",
    };
    dispatch({
      type: schoolToLoad
        ? ADD_SCHOOL_FETCH_COURSES_FAILURE
        : FETCH_COURSES_FAILURE,
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
    id: course[SYLLABUS_KEYS.ID],
    semester: course[SYLLABUS_KEYS.TERM],
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
