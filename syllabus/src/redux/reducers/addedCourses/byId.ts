import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import { ADD_COURSE, REMOVE_COURSE, SAVE_TIMETABLE } from "../../actions/types";

interface courseAndPrefTypes {
  id: string;
  color: number;
  displayLang: string;
  course: object;
}

interface PayloadProps {
  course?: object;
  coursesAndPrefs?: courseAndPrefTypes[];
  displayLang?: string;
  id?: string;
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

interface byIdProps {
  [id: string]: object;
}

const initialState: byIdProps = {};

const byId = (state = initialState, action: ActionProps): byIdProps => {
  switch (action.type) {
    case ADD_COURSE:
      const id: string = action.payload.course[SYLLABUS_KEYS.ID];
      return {
        ...state,
        [id]: {
          pref: {
            color: Object.keys(state).length % 8,
            visibility: true,
            displayLang: action.payload.displayLang,
          },
          course: action.payload.course,
        },
      };
    case REMOVE_COURSE:
      let restCourses = { ...state };
      delete restCourses[action.payload.id];
      return restCourses;
    case SAVE_TIMETABLE:
      let newCoursesAndPrefs = {};
      action.payload.coursesAndPrefs.forEach((cp) => {
        newCoursesAndPrefs[cp.id] = {
          pref: {
            color: cp.color,
            visibility: true,
            displayLang: cp.displayLang,
          },
          course: cp.course,
        };
      });
      return newCoursesAndPrefs;
    default:
      return state;
  }
};

export default byId;
