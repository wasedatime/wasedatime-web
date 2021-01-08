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
  SAVE_TIMETABLE,
} from "./types";
import { SYLLABUS_KEYS } from "../config/syllabusKeys";
import * as schema from "../data/schema";

export const addSchool = (school, lastMod = "") => ({
  type: ADD_SCHOOL,
  payload: {
    school: school,
    lastMod: lastMod,
  },
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
  var lastModBySchool = {};

  try {
    Promise.all(
      schools.map(async (school) => {
        // HEAD
        const resOfHead = await API.head(
          "wasedatime-dev",
          `/syllabus/${school}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            response: true,
          }
        );
        lastModBySchool[school] = resOfHead.headers["last-modified"];

        // if lastMod different: GET
        // else: remain the local syllabus
        const oldModifiedTime = getState().fetchedCourses.lastModBySchool[
          school
        ];
        if (
          !oldModifiedTime ||
          oldModifiedTime !== resOfHead.headers["last-modified"] ||
          !getState().fetchedCourses.list.ids[school]
        ) {
          const res = await API.get("wasedatime-dev", `/syllabus/${school}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          coursesBySchool[school] = normalize(res, schema.coursesSchema);
        }

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
                lastMod: lastModBySchool[schoolToLoad],
              },
            }
          : {
              type: FETCH_COURSES_SUCCESS,
              response: {
                coursesBySchool,
                fetchedTime,
                lastModBySchool,
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

export const addCourse = (course, displayLang) => (dispatch, getState) => {
  try {
    API.patch("wasedatime-dev", "/timetable", {
      body: {
        data: {
          operation: "append",
          course: {
            id: course[SYLLABUS_KEYS.ID],
            color: 0,
            displayLang: displayLang,
            school: course[SYLLABUS_KEYS.SCHOOL],
          },
        },
      },
      headers: {
        Authorization: getState().user.info
          ? getState().user.info.idToken.jwtToken
          : "",
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    dispatch({
      type: ADD_COURSE,
      payload: {
        id: course[SYLLABUS_KEYS.ID],
        semester: course[SYLLABUS_KEYS.TERM],
        course: course,
        displayLang: displayLang,
      },
    });
  }
};

export const removeCourse = (id) => (dispatch, getState) => {
  try {
    API.patch("wasedatime-dev", "/timetable", {
      body: {
        data: {
          operation: "remove",
          index: getState().addedCourses.ids.indexOf(id),
        },
      },
      headers: {
        Authorization: getState().user.info
          ? getState().user.info.idToken.jwtToken
          : "",
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    dispatch({
      type: REMOVE_COURSE,
      payload: {
        id,
      },
    });
  }
};

export const saveTimetable = (idsAndPrefs, fetchedCoursesById) => async (
  dispatch,
  getState
) => {
  let coursesAndPrefsByTerm = {
    fall: [],
    spring: [],
  };
  let idsBySchool = {};

  Promise.all(
    idsAndPrefs.map(async (idAndPref) => {
      // get course details from fetchedCourses
      let course = fetchedCoursesById[idAndPref.id];

      // if course not exists in fetchedCourses:
      if (!course) {
        // load course details directly through API
        course = await API.get(
          "wasedatime-dev",
          `/syllabus?key=${idAndPref.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // load school syllabus if there are spaces
        if (course && getState().fetchedCourses.schools.length < 10) {
          const school = course[SYLLABUS_KEYS.SCHOOL];
          const schoolCourses = await API.get(
            "wasedatime-dev",
            `/syllabus/${school}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const normalizedSchoolCourses = normalize(
            schoolCourses,
            schema.coursesSchema
          );
          dispatch({
            type: ADD_SCHOOL,
            payload: {
              school: school,
              lastMod: "",
            },
          });
          dispatch({
            type: ADD_SCHOOL_FETCH_COURSES_SUCCESS,
            response: {
              courses: normalizedSchoolCourses,
              school: school,
              fetchedTime: new Date().toISOString(),
            },
          });
        }
      }

      // if course details retrieved successfully
      if (course) {
        // push school to addedCourses
        const school = course[SYLLABUS_KEYS.SCHOOL];
        if (idsBySchool[school]) {
          idsBySchool[school].ids.push(idAndPref.id);
        } else {
          idsBySchool[school] = {
            lastMod: "",
            ids: [idAndPref.id],
          };
        }

        // push course details to addedCourses
        if (course[SYLLABUS_KEYS.TERM].match(/2|3|f/g)) {
          coursesAndPrefsByTerm.fall.push({
            ...idAndPref,
            course: course,
          });
        }
        if (course[SYLLABUS_KEYS.TERM].match(/0|1|f/g)) {
          coursesAndPrefsByTerm.spring.push({
            ...idAndPref,
            course: course,
          });
        }
      }
      return;
    })
  )
    .then(() => {
      // save addedCourses
      dispatch({
        type: SAVE_TIMETABLE,
        payload: {
          coursesAndPrefsByTerm: coursesAndPrefsByTerm,
          ids: idsAndPrefs.map((ip) => ip.id),
          idsBySchool: idsBySchool,
        },
      });
    })
    .catch((e) => console.error(e));
};

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
