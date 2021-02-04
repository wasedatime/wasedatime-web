import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import {
  FETCH_COURSES_SUCCESS,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
} from "../../actions/types";
import Course from "../../../types/course";

interface PayloadProps {
  coursesBySchool?: {
    [school: string]: Course[];
  };
  courses?: Course[];
  school?: string;
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

interface byIdProps {
  [school: string]: {
    [courseId: string]: Course;
  };
}

const initialState: byIdProps = {};

const byId = (state = initialState, action: ActionProps): byIdProps => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      let coursesByIdSchool = { ...state };
      const coursesBySchool = { ...action.payload.coursesBySchool };

      Object.keys(coursesBySchool).forEach((school) => {
        coursesBySchool[school].forEach((course) => {
          const courseId = course[SyllabusKey.ID];
          coursesByIdSchool[school][courseId] = course;
        });
      });
      return coursesByIdSchool || {};
    case ADD_SCHOOL_FETCH_COURSES_SUCCESS:
      const courses = [...action.payload.courses];
      const school = action.payload.school;
      let coursesById = {};
      courses.forEach((course) => {
        const courseId = course[SyllabusKey.ID];
        coursesById[courseId] = course;
      });
      return {
        ...state,
        [school]: coursesById || {},
      };
    case REMOVE_SCHOOL:
      return { ...state, [action.payload.school]: {} };
    default:
      return state;
  }
};

export default byId;

export const getCourse = (flattenCourses, id) => flattenCourses[id];
