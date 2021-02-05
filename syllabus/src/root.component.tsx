import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import App from "./App";
import API from "@aws-amplify/api";
import configureStore from "./configureStore";
import { saveState } from "./localForage";
import throttle from "lodash/throttle";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";

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
API.configure(config);

configAuth();
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
      <App />
    </Provider>
  ) : (
    <div>Loading...</div>
  );
};

export default Root;
