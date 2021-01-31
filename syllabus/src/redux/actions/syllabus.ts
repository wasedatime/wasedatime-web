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
  ADD_SCHOOL_FETCH_COURSES_FAILURE,
  ADD_SCHOOL_FETCH_COURSES_REQUEST,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
  SAVE_TIMETABLE,
} from "./types";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import { schoolCodeMap } from "@bit/wasedatime.syllabus.ts.constants.school-code-map";

export const removeSchool = (school: string) => ({
  type: REMOVE_SCHOOL,
  payload: {
    school: school,
  },
});

export const fetchCoursesBySchool = (school: string) => async (
  dispatch: (x: any) => void,
  getState: any
) => {
  dispatch({
    type: ADD_SCHOOL_FETCH_COURSES_REQUEST,
  });
  try {
    const res = await API.get("wasedatime-dev", `/syllabus/${school}`, {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    });
    dispatch({
      type: ADD_SCHOOL_FETCH_COURSES_SUCCESS,
      payload: {
        courses: res.data,
        school: school,
        exp: res.headers["expires"],
      },
    });
  } catch (error) {
    dispatch({
      type: ADD_SCHOOL_FETCH_COURSES_FAILURE,
      error: error.response || {
        status: 501,
        statusText: "Not Implemented",
      },
    });
  }
};

export const fetchCourses = () => async (
  dispatch: (x: any) => void,
  getState: any
) => {
  dispatch({
    type: FETCH_COURSES_REQUEST,
  });

  const schools = getState().fetchedCourses.schools;
  var coursesBySchool = {};
  var updatedSchools = {};

  try {
    Promise.all(
      Object.keys(schools).map(async (schoolKey) => {
        const school = schools[schoolKey];
        if (!school.exp || Date.parse(school.exp) <= Date.now()) {
          const res = await API.get(
            "wasedatime-dev",
            `/syllabus/${school.name}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              response: true,
            }
          );
          coursesBySchool[school.name] = res.data;
          updatedSchools[school.name] = {
            name: school.name,
            exp: res.headers["expires"],
            ids: res.data.map((c) => c[SYLLABUS_KEYS.ID]),
          };
        }
        return;
      })
    ).then(() => {
      // const normalizedCourses = normalize(courses, schema.coursesSchema);
      dispatch({
        type: FETCH_COURSES_SUCCESS,
        payload: {
          coursesBySchool,
          updatedSchools,
        },
      });
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSES_FAILURE,
      error: error.message || {
        status: 501,
        statusText: "Not Implemented",
      },
    });
  }
};
