import { combineReducers } from "redux";
// import fetchedList, * as fromList from "./fetchedList";
import byId from "./byId";
import schools from "./schools";
import isFetching from "./isFetching";
import { SYLLABUS_KEYS } from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

const fetchedCourses = combineReducers({
  byId,
  schools,
  isFetching,
});

export default fetchedCourses;

// todo create type for course
// todo rename files to xxx-xxx

export const getFetchedCoursesList = (syllabusBySchool) => {
  let courses = [];
  for (const school in syllabusBySchool) {
    const coursesById = syllabusBySchool[school];
    for (const courseId in coursesById) {
      courses.push({
        ...coursesById[courseId],
        [SYLLABUS_KEYS.SCHOOL]: school,
      });
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
