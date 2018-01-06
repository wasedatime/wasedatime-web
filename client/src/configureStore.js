import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import app from './reducers';
import * as schema from './api/schema';

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(schema)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return createStore(app, applyMiddleware(...middlewares));
};

export default configureStore;
