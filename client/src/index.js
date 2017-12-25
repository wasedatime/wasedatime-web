import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import app from './reducers/index';
import Root from './components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

let store = createStore(app, applyMiddleware(thunkMiddleware));

render(<Root store={store} />, document.getElementById('root'));
