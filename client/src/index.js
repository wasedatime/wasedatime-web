import * as schema from './api/schema';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers/index';
import Root from './components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

let test = 5;

let store = createStore(app, applyMiddleware(thunk.withExtraArgument(schema)));

render(<Root store={store} />, document.getElementById('root'));
