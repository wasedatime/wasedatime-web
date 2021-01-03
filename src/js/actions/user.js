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
      userDataKey: user.userDataKey,
      username: user.username,
    },
  };
};

export const updateUserSession = () => async (dispatch) => {
  await Auth.currentSession().then((session) => {
    dispatch({
      type: SESSION_UPDATED,
      payload: session,
    });
  });
};

export const updateUserInfo = () => async (dispatch) => {
  await Auth.currentSession();
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: { ...user.attributes, ...user.signInUserSession },
      });
    })
    .catch((e) => {
      dispatch({
        type: NOT_AUTHENTICATED,
      });
    });
};

export const clearUserInfo = () => ({
  type: NOT_AUTHENTICATED,
});
