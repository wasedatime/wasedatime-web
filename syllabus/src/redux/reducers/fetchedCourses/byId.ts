import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

interface PayloadProps {
  coursesBySchool?: {
    [school: string]: object[];
  };
  courses?: object[];
  school?: string;
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

interface byIdProps {
  [school: string]: object;
}

const initialState: byIdProps = {};

const byId = (actionTypes: { [key: string]: string }) => {
  return (state = initialState, action: ActionProps): byIdProps => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        let coursesByIdSchool = { ...state };
        const coursesBySchool = { ...action.payload.coursesBySchool };

        Object.keys(coursesBySchool).forEach((school) => {
          coursesBySchool[school].forEach((course) => {
            const courseId = course[SYLLABUS_KEYS.ID];
            coursesByIdSchool[school][courseId] = course;
          });
        });
        return coursesByIdSchool || {};
      case actionTypes.addSchoolFetchSuccess:
        const courses = [...action.payload.courses];
        const school = action.payload.school;
        let coursesById = {};
        courses.forEach((course) => {
          const courseId = course[SYLLABUS_KEYS.ID];
          coursesById[courseId] = course;
        });
        return {
          ...state,
          [school]: coursesById || {},
        };
      case actionTypes.removeSchool:
        return { ...state, [action.payload.school]: {} };
      default:
        return state;
    }
  };
};

export default byId;

export const getCourse = (flattenCourses, id) => flattenCourses[id];
