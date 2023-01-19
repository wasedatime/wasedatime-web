import { ThemeTypes } from "@app/utils/theme-context";

export const gaSetLanguage = "Set Language";
export const gaChangeLanguage = "Change Language";
export const gaChangeTheme = "Change Theme";
export const gaUserSignIn = "User Sign In";
export const gaUserSignOut = "User Sign Out";
export const gaUserSignInFailure = "User Sign In Failure";
export const gaAppendActionWithLng = (action, lng) => `${action} - ${lng} user`;
export const gaAppendActionWithTheme = (action, theme: ThemeTypes) =>
  `${action} - ${theme} user`;
