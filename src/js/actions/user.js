import {SET_FIRST_TIME_ACCESS_TO_FALSE} from "./types";

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false,
  },
});
