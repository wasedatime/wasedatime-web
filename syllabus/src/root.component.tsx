import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import App from "./App";
import Amplify from "aws-amplify";
import configureStore from "./configureStore";
import { saveState } from "./localForage";
import throttle from "lodash/throttle";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";

const config = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: process.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
};
Amplify.configure(config);

i18nConfig();

const Root = ({ name, fetchCourses, fetchCoursesBySchool }) => {
  const [reduxStore, setReduxStore] = useState(null);

  useEffect(() => {
    if (!reduxStore) {
      storeConfig();
    }
  }, []);

  const storeConfig = async () => {
    const store = await configureStore();
    store.subscribe(
      throttle(() => {
        const state = store.getState();
        saveState(state);
      }, 800)
    );
    setReduxStore(store);
  };

  return reduxStore ? (
    <Provider store={reduxStore}>
      <section>{name} is mounted!</section>
      <App />
    </Provider>
  ) : (
    <div>Loading...</div>
  );
};

export default Root;
