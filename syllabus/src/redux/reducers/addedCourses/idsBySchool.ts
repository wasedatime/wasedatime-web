import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import { ADD_COURSE, REMOVE_COURSE, SAVE_TIMETABLE } from "../actions/types";

interface courseAndPrefTypes {
  id: string;
  color: number;
  displayLang: string;
  course: object;
}

interface PayloadProps {
  course?: object;
  coursesAndPrefs?: courseAndPrefTypes[];
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

const initialState: SchoolsProps = {};

const schools = (state = initialState, action: ActionProps): SchoolsProps => {
  switch (action.type) {
    case ADD_COURSE:
      const school = action.payload.course[SYLLABUS_KEYS.SCHOOL];
      const id = action.payload.course[SYLLABUS_KEYS.ID];
      const newIds = state[school] ? [...state[school].ids, id] : [id];
      return {
        ...state,
        [school]: {
          ids: newIds,
        },
      };
    case REMOVE_COURSE:
      const school = action.payload.course[SYLLABUS_KEYS.SCHOOL];
      return {
        ...state,
        [school]: {
          ids: state[school].ids.filter(
            (id) => id !== action.payload.course[SYLLABUS_KEYS.ID]
          ),
        },
      };
    case SAVE_TIMETABLE:
      let newCoursesAndPrefs = {};
      action.payload.coursesAndPrefs.forEach((cp) => {
        const school = cp.course[SYLLABUS_KEYS.SCHOOL];
        const id = cp.course[SYLLABUS_KEYS.ID];
        newCoursesAndPrefs[school] = {
          ids: newCoursesAndPrefs[school]
            ? [...newCoursesAndPrefs[school].ids, id]
            : [id],
        };
      });
      return newCoursesAndPrefs;
    default:
      return state;
  }
};

export default schools;
