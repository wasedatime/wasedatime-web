import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { loadState } from './localStorage';

import app from './js/reducers/index';

const configureStore = () => {
  const middlewares = [thunk];
  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.REACT_APP_ENV === 'staging'
  ) {
    middlewares.push(logger);
  }

  const preloadedState = loadState();

  return createStore(app, preloadedState, applyMiddleware(...middlewares));
};

export default configureStore;
