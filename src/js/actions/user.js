import {
  SET_FIRST_TIME_ACCESS_TO_FALSE,
  IS_AUTHENTICATED,
  NOT_AUTHENTICATED,
} from "./types";
import { Auth } from "aws-amplify";

export const setFirstTimeAccessToFalse = () => ({
  type: SET_FIRST_TIME_ACCESS_TO_FALSE,
  payload: {
    isFirstTimeAccess: false,
  },
});

export const setUserInfo = () => async (dispatch) => {
  await Auth.currentSession();
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: { ...user.attributes, ...user.signInUserSession },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: NOT_AUTHENTICATED,
      });
    });
};

export const clearUserInfo = () => ({
  type: NOT_AUTHENTICATED,
});
