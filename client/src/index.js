import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import app from './reducers/index';
import Root from './components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

let store = createStore(app);

render(<Root store={store} />, document.getElementById('root'));
