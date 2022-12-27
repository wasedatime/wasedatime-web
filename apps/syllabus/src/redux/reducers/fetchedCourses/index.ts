import { combineReducers } from "redux";

import { SyllabusKey } from "@app/constants/syllabus-data";
import coursesBySchool from "@app/redux/reducers/fetchedCourses/coursesBySchool";
import isFetching from "@app/redux/reducers/fetchedCourses/isFetching";
import schools from "@app/redux/reducers/fetchedCourses/schools";
import Course from "@app/types/course";

const fetchedCourses = combineReducers({
  coursesBySchool,
  schools,
  isFetching,
});

interface coursesBySchoolTypes {
  [school: string]: Course[];
}

export default fetchedCourses;

export const getFetchedCoursesList = (
  coursesBySchool: coursesBySchoolTypes
) => {
  let courses = [];
  for (const school in coursesBySchool) {
    courses = courses.concat(
      coursesBySchool[school].map((c) => ({
        ...c,
        [SyllabusKey.SCHOOL]: school,
      }))
    );
  }

  return courses;
};
