import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";
import {
  FETCH_COURSES_SUCCESS,
  ADD_SCHOOL_FETCH_COURSES_SUCCESS,
  REMOVE_SCHOOL,
} from "../../actions/types";

interface PayloadProps {
  school?: string;
  exp?: string;
  courses?: object[];
  updatedSchools: SchoolsProps;
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

interface SchoolsProps {
  [school: string]: {
    name: string;
    exp: string;
    ids: any[];
    active: boolean;
    timestamp: number;
  };
}

const initialState: SchoolsProps = {};

const schools = (state = initialState, action: ActionProps): SchoolsProps => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.payload.updatedSchools;
    case ADD_SCHOOL_FETCH_COURSES_SUCCESS:
      return {
        ...state,
        [action.payload.school]: {
          name: action.payload.school,
          exp: action.payload.exp,
          ids: action.payload.courses.map((c) => c[SYLLABUS_KEYS.ID]),
          active: true,
          timestamp: Date.now(),
        },
      };
    case REMOVE_SCHOOL:
      return {
        ...state,
        [action.payload.school]: {
          name: action.payload.school,
          exp: "",
          ids: [],
          active: false,
          timestamp: 0,
        },
      };
    default:
      return state;
  }
};

export default schools;

export const getSchools = (schoolsObj) =>
  Object.keys(schoolsObj)
    .filter((school) => schoolsObj[school].active)
    .sort((a, b) => schoolsObj[a].timestamp - schoolsObj[b].timestamp)
    .map((school) => school);
