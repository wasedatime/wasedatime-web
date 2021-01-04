import {
  SET_FIRST_TIME_ACCESS_TO_FALSE,
  IS_AUTHENTICATED,
  NOT_AUTHENTICATED,
  SESSION_UPDATED,
} from "./types";
import { Auth } from "aws-amplify";

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false,
  },
});

export const setUserInfo = (user) => {
  console.log(user);
  return {
    type: IS_AUTHENTICATED,
    payload: {
      ...user.signInUserSession,
    },
  };
};

export const clearUserInfo = () => ({
  type: NOT_AUTHENTICATED,
});
