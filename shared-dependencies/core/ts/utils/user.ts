import Auth from "@aws-amplify/auth";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

export const configAuth = () => {
  const authRedirectPath =
    window.location.protocol + "//" + window.location.host + "/verify";
  const authSignOutPath =
    window.location.protocol + "//" + window.location.host + "/";

  const config = {
    Auth: {
      // REQUIRED - Amazon Cognito Region
      region: "ap-northeast-1",
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: "ap-northeast-1_dKhj1aZQy",
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: "4i0q5hl5u27mili6fnpvjap8fc",
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,

      oauth: {
        domain: "auth.wasedatime.com",
        scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
        redirectSignIn: authRedirectPath,
        redirectSignOut: authSignOutPath,
        responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
      },
    },
  };

  Auth.configure(config);
};

export const getIdToken = async () => {
  try {
    const session = await Auth.currentSession();
    if (session) return session.getIdToken().getJwtToken();
  } catch (error) {
    return "";
  }
};

export const getAccessToken = async () => {
  try {
    const session = await Auth.currentSession();

    if (session) return session.getAccessToken().getJwtToken();
  } catch (error) {
    return "";
  }
};

export const getRefreshToken = async () => {
  try {
    const session = await Auth.currentSession();
    if (session) return session.getRefreshToken().getToken();
  } catch (error) {
    return "";
  }
};

export const getUserAttr = async () => {
  try {
    const info = await Auth.currentUserInfo();
    return {
      id: info.attributes.sub,
      name: info.attributes.preferred_username,
      picture: info.attributes.picture,
    };
  } catch (error) {
    return null;
  }
};

export const signIn = () => {
  try {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
      customState: window.location.pathname + window.location.search,
    });
  } catch (e) {
    console.log(e);
  }
};

export const signOut = () => {
  Auth.signOut();
};
