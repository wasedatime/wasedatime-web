import API from "@aws-amplify/api"
import { getIdToken } from "wasedatime-ui"

import { schoolCodeMap } from "@app/constants/school-code"
import { SyllabusKey } from "@app/constants/syllabus-data"
import {
  ADD_COURSE,
  CHANGE_COURSE_COLOR,
  CHANGE_COURSES_SORTING_OPTION,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  REMOVE_COURSE,
  TOGGLE_COURSE_VISIBILITY,
  ADD_SCHOOL_FETCH_COURSES_FAILURE,
  ADD_SCHOOL_FETCH_COURSES_REQUEST,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
  SAVE_TIMETABLE,
} from "@app/redux/actions/types"
import Course from "@app/types/course"
import { courseSchemaFullToShort } from "@app/utils/map-single-course-schema"

export const removeSchool = (school: string) => ({
  type: REMOVE_SCHOOL,
  payload: {
    school,
  },
})

export const fetchCoursesBySchool =
  (school: string) => async (dispatch: (x: any) => void, getState: any) => {
    const bySchool = getState().fetchedCourses.schools
    const schoolKeys = Object.keys(bySchool).filter(
      (school) => bySchool[school].active
    )
    if (schoolKeys.length >= 10) {
      dispatch(
        removeSchool(
          schoolKeys.sort(
            (a, b) => bySchool[a].timestamp - bySchool[b].timestamp
          )[0]
        )
      )
    }
    dispatch({
      type: ADD_SCHOOL_FETCH_COURSES_REQUEST,
    })
    try {
      const res = await API.get("wasedatime-dev", `/syllabus/${school}`, {
        headers: {
          "Content-Type": "application/json",
        },
        response: true,
      })
      dispatch({
        type: ADD_SCHOOL_FETCH_COURSES_SUCCESS,
        payload: {
          courses: res.data,
          school,
          exp: res.headers.expires,
        },
      })
    } catch (error) {
      dispatch({
        type: ADD_SCHOOL_FETCH_COURSES_FAILURE,
        error: error.response || {
          status: 501,
          statusText: "Not Implemented",
        },
      })
    }
  }

export const fetchCourses =
  () => async (dispatch: (x: any) => void, getState: any) => {
    const { schools } = getState().fetchedCourses
    const coursesBySchool = {}
    const updatedSchools = {}
    const schoolKeys = Object.keys(schools).filter((schoolKey) => {
      const { exp } = schools[schoolKey]

      return (
        schools[schoolKey].active && (!exp || Date.parse(exp) <= Date.now())
      )
    })

    if (schoolKeys.length === 0) return

    dispatch({
      type: FETCH_COURSES_REQUEST,
    })

    try {
      Promise.all(
        schoolKeys.map(async (schoolKey) => {
          const school = schools[schoolKey]
          const res = await API.get(
            "wasedatime-dev",
            `/syllabus/${school.name}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              response: true,
            }
          )
          coursesBySchool[school.name] = res.data
          updatedSchools[school.name] = {
            name: school.name,
            exp: res.headers.expires,
            ids: res.data.map((c) => c[SyllabusKey.ID]),
            active: true,
          }
        })
      ).then(() => {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: {
            coursesBySchool: {
              ...getState().fetchedCourses.coursesBySchool,
              ...coursesBySchool,
            },
            updatedSchools: { ...schools, ...updatedSchools },
          },
        })
      })
    } catch (error) {
      dispatch({
        type: FETCH_COURSES_FAILURE,
        error: error.message || {
          status: 501,
          statusText: "Not Implemented",
        },
      })
    }
  }

export const addCourse =
  (course: Course, displayLang: string) =>
  async (dispatch: (x: any) => void, getState: any) => {
    dispatch({
      type: ADD_COURSE,
      payload: {
        course,
        displayLang,
      },
    })

    try {
      const idToken = await getIdToken()
      if (idToken) {
        await API.patch("wasedatime-dev", "/timetable", {
          body: {
            data: {
              operation: "append",
              course: {
                id: course[SyllabusKey.ID],
                color: getState().addedCourses.orderedIds.length % 8,
                displayLang,
              },
            },
          },
          headers: {
            Authorization: idToken,
          },
        })
      }
    } catch (e) {
      if (e.response && e.response.status === 500) {
        try {
          const idToken = await getIdToken()
          const { byId } = getState().addedCourses
          const idsAndPrefs =
            byId &&
            Object.keys(byId).map((id) => ({
              id,
              color: byId[id].color,
              displayLang: byId[id].displayLang,
            }))
          await API.post("wasedatime-dev", "/timetable", {
            body: { data: { courses: idsAndPrefs || [] } },
            headers: {
              Authorization: idToken,
            },
          })
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error(e)
      }
    }
  }

export const removeCourse =
  (id: string) => async (dispatch: (x: any) => void, getState: any) => {
    const removedCourseIndex = getState().addedCourses.orderedIds.indexOf(id)

    dispatch({
      type: REMOVE_COURSE,
      payload: {
        id,
      },
    })

    try {
      const idToken = await getIdToken()
      if (idToken) {
        await API.patch("wasedatime-dev", "/timetable", {
          body: {
            data: {
              operation: "remove",
              index: removedCourseIndex,
            },
          },
          headers: {
            Authorization: idToken,
          },
        })
      }
    } catch (e) {
      if (e.response && e.response.status === 500) {
        try {
          const idToken = await getIdToken()
          const { byId } = getState().addedCourses
          const idsAndPrefs =
            byId &&
            Object.keys(byId).map((id) => ({
              id,
              color: byId[id].color,
              displayLang: byId[id].displayLang,
            }))
          await API.post("wasedatime-dev", "/timetable", {
            body: { data: { courses: idsAndPrefs || [] } },
            headers: {
              Authorization: idToken,
            },
          })
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error(e)
      }
    }
  }

export const saveTimetable = (idsAndPrefs) => async (dispatch, getState) => {
  const unloadSchools = []
  const { schools } = getState().fetchedCourses
  idsAndPrefs.forEach((ip) => {
    const school = schoolCodeMap[ip.id.substring(0, 2)]
    if (
      (!schools[school] || !schools[school].active) &&
      !unloadSchools.includes(school)
    )
      unloadSchools.push(school)
  })

  dispatch({
    type: FETCH_COURSES_REQUEST,
  })

  Promise.all(
    unloadSchools.map(async (school) => {
      await dispatch(fetchCoursesBySchool(school))
    })
  ).then(() => {
    const { coursesBySchool } = getState().fetchedCourses
    let coursesAndPrefs = []
    const oldCourseIdPrefs = []

    idsAndPrefs.forEach((ip, i) => {
      const school = schoolCodeMap[ip.id.substring(0, 2)]
      const course =
        coursesBySchool[school] &&
        coursesBySchool[school].find((c) => c[SyllabusKey.ID] === ip.id)
      if (course) {
        const existingPref =
          getState().addedCourses.byId[ip.id] &&
          getState().addedCourses.byId[ip.id].pref
        coursesAndPrefs.push({
          id: ip.id,
          color: (existingPref && existingPref.color) || ip.color || i % 8,
          displayLang: ip.displayLang === "jp" ? "ja" : ip.displayLang || "en",
          course: {
            ...course,
            [SyllabusKey.SCHOOL]: school,
          },
        })
      } else {
        const savedOldCourseIdPref = getState().addedCourses.byId[ip.id]
        if (savedOldCourseIdPref) {
          coursesAndPrefs.push({
            id: ip.id,
            color: savedOldCourseIdPref.pref.color || i % 8,
            displayLang:
              savedOldCourseIdPref.pref.displayLang === "jp"
                ? "ja"
                : savedOldCourseIdPref.pref.displayLang || "en",
            course: savedOldCourseIdPref.course,
          })
        } else {
          oldCourseIdPrefs.push(ip)
        }
      }
    })

    Promise.all(
      oldCourseIdPrefs.map(async (ip, i) => {
        try {
          const res = await API.get("wasedatime-dev", `/syllabus?id=${ip.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
            response: true,
          })
          if (!res.data.data) return null

          return {
            id: ip.id,
            color:
              ip.color ||
              (idsAndPrefs.length - oldCourseIdPrefs.length + i) % 8,
            displayLang:
              ip.displayLang === "jp" ? "ja" : ip.displayLang || "en",
            course: {
              ...courseSchemaFullToShort(res.data.data),
              [SyllabusKey.SCHOOL]: schoolCodeMap[ip.id.substring(0, 2)],
            },
          }
        } catch (error) {
          return null
        }
      })
    ).then((oldCoursesAndPrefs) => {
      coursesAndPrefs = coursesAndPrefs.concat(oldCoursesAndPrefs)
      dispatch({
        type: SAVE_TIMETABLE,
        payload: {
          coursesAndPrefs,
        },
      })
    })
  })
}

export const changeCourseColor = (id, color) => ({
  type: CHANGE_COURSE_COLOR,
  payload: {
    id,
    color,
  },
})

export const toggleCourseVisibility = (id: string) => ({
  type: TOGGLE_COURSE_VISIBILITY,
  payload: {
    id,
  },
})

export const changeSortingOption = (sortingOption: string) => ({
  type: CHANGE_COURSES_SORTING_OPTION,
  payload: {
    sortingOption,
  },
})
