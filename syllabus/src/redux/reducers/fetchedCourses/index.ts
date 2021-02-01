import { combineReducers } from "redux";
// import fetchedList, * as fromList from "./fetchedList";
import byId from "./byId";
import schools from "./schools";
import isFetching from "./isFetching";
// import { SYLLABUS_KEYS } from "../config/syllabusKeys";

const fetchedCourses = combineReducers({
  byId,
  schools,
  isFetching,
});

export default fetchedCourses;

export const getFetchedCoursesList = (coursesBySchool) => {
  let courses = [];
  for (const school in coursesBySchool) {
    const coursesById = coursesBySchool[school];
    for (const courseId in coursesById) {
      courses.push(coursesById[courseId]);
    }
  }
  return courses;
};

// export const getFetchedIds = (state) => fromList.getIds(state.list);
//
// export const getFetchedById = (state) => {
//   var courses = {};
//   const coursesBySchool = JSON.parse(JSON.stringify(state.byId));
//   Object.keys(coursesBySchool).forEach((school) => {
//     var coursesById = coursesBySchool[school];
//     if (coursesById) {
//       Object.keys(coursesById).forEach((id) => {
//         coursesById[id][SYLLABUS_KEYS.SCHOOL] = school;
//       });
//
//       courses = {
//         ...courses,
//         ...coursesById,
//       };
//     }
//   });
//   return courses;
// };
//
// export const getIsFetching = (state) => {
//   return fromList.getIsFetching(state.list);
// };
//
// export const getError = (state) => {
//   return fromList.getError(state.list);
// };
