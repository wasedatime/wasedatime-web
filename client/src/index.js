import * as schema from './api/schema';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import configureStore from './configureStore';
import Root from './components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
