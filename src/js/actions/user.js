import {
  SET_FIRST_TIME_ACCESS_TO_FALSE,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "./types";
import { Auth } from "aws-amplify";

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false,
  },
});

export const checkAuthentication = () => {
  Auth.currentAuthenticatedUser()
    .then(() => ({
      type: SIGN_IN_SUCCESS,
      payload: true,
    }))
    .catch(() => ({
      type: SIGN_IN_FAILURE,
      payload: false,
    }));
};
