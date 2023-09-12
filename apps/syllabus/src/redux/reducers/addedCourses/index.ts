import { combineReducers } from "redux"

import { SyllabusKey } from "@app/constants/syllabus-data"
import byId from "@app/redux/reducers/addedCourses/byId"
import idsBySchool from "@app/redux/reducers/addedCourses/idsBySchool"
import orderedIds from "@app/redux/reducers/addedCourses/orderedIds"
import sortingOption from "@app/redux/reducers/addedCourses/sorting-option"

const addedCourses = combineReducers({
  byId,
  idsBySchool,
  orderedIds,
  sortingOption,
})

export default addedCourses

export const getAddedCoursesListWithLang = (addedCoursesAndPrefs) =>
  Object.keys(addedCoursesAndPrefs).map((courseId) => ({
    ...addedCoursesAndPrefs[courseId].course,
    displayLang: addedCoursesAndPrefs[courseId].pref.displayLang,
  }))

export const getAddedCoursesAndPrefsByTerm = (byId) => {
  const byTerm = {
    springSem: [],
    fallSem: [],
    springQuart: [],
    summerQuart: [],
    fallQuart: [],
    winterQuart: [],
  }
  for (const courseId in byId) {
    const courseAndPref = byId[courseId]
    const term = courseAndPref.course[SyllabusKey.TERM]
    if (term.match(/0|f/g)) byTerm.springQuart.push(courseAndPref)
    if (term.match(/1|f|0s/g)) byTerm.summerQuart.push(courseAndPref)
    if (term.match(/2|f/g)) byTerm.fallQuart.push(courseAndPref)
    if (term.match(/3|f|2s/g)) byTerm.winterQuart.push(courseAndPref)
    if (term.match(/0|1|f/g)) byTerm.springSem.push(courseAndPref)
    if (term.match(/2|3|f/g)) byTerm.fallSem.push(courseAndPref)
  }

  return byTerm
}

export const getAddedCoursesById = (byId) => {
  const coursesById = {}
  for (const courseId in byId) {
    coursesById[courseId] = byId[courseId].course
  }

  return coursesById
}

export const getAddedCoursePrefs = (byId) => {
  return Object.keys(byId).map((id) => ({
    id,
    color: byId[id].color,
    displayLang: byId[id].displayLang,
  }))
}
