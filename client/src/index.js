import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';
import Root from './js/components/Root';
import registerServiceWorker from './registerServiceWorker'

import 'normalize-css/normalize.css';
import './styles/styles.css';

const store = configureStore();
registerServiceWorker()

render(<Root store={store} />, document.getElementById('root'));
