import React from "react";
import { render } from "react-dom";
import throttle from "lodash/throttle";

import configureStore from "./configureStore";
import { saveState } from "./localForage";
import Root from "./js/components/Root";

import "normalize-css/normalize.css";
import "./styles/styles.css";
import "./js/components/i18n";

import Amplify from "aws-amplify";

Amplify.configure({
  // OPTIONAL - if your API requires authentication
  // Auth: {
  //     // REQUIRED - Amazon Cognito Identity Pool ID
  //     identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
  //     // REQUIRED - Amazon Cognito Region
  //     region: 'XX-XXXX-X',
  //     // OPTIONAL - Amazon Cognito User Pool ID
  //     userPoolId: 'XX-XXXX-X_abcd1234',
  //     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  //     userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
  // },
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: process.env.REACT_APP_REVIEWS_API_BASE_URL,
      },
    ],
  },
});

configureStore().then((store) => {
  store.subscribe(
    throttle(() => {
      const state = store.getState();
      saveState(state);
    }, 800)
  );

  render(<Root store={store} />, document.getElementById("root"));
});
