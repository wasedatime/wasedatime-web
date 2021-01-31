import SYLLABUS_KEYS from "@bit/wasedatime.syllabus.ts.constants.syllabus-keys";

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
  };
}

const initialState: SchoolsProps = {};

const schools = (actionTypes: { [key: string]: string }) => {
  return (state = initialState, action: ActionProps): SchoolsProps => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        return action.payload.updatedSchools;
      case actionTypes.addSchoolFetchSuccess:
        return {
          ...state,
          [action.payload.school]: {
            name: action.payload.school,
            exp: action.payload.exp,
            ids: action.payload.courses.map((c) => c[SYLLABUS_KEYS.ID]),
            active: true,
          },
        };
      case actionTypes.removeSchool:
        return {
          ...state,
          [action.payload.school]: {
            name: action.payload.school,
            exp: "",
            ids: [],
            active: false,
          },
        };
      default:
        return state;
    }
  };
};

export default schools;
