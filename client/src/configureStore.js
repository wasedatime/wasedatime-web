import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { loadState } from "./localForage";

import app from "./js/reducers/index";

const configureStore = async () => {
  const middlewares = [thunk];
  if (
    process.env.NODE_ENV !== "production" ||
    process.env.REACT_APP_ENV === "staging"
  ) {
    middlewares.push(logger);
  }
  try {
    const preloadedState = await loadState();
    return createStore(app, preloadedState, applyMiddleware(...middlewares));
  } catch (error) {
    console.error(error);
    return createStore(app, undefined, applyMiddleware(...middlewares));
  }
};

export default configureStore;
