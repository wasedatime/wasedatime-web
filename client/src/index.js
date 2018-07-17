import React from 'react';
import { render } from 'react-dom';
import throttle from 'lodash/throttle';

import configureStore from './configureStore';
import { saveState } from './localStorage';
import Root from './js/components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

const store = configureStore();

store.subscribe(throttle(() => {
  saveState({
    addedCourses: {
      prefs: store.getState().addedCourses.prefs
    }
  });
}, 800));

render(<Root store={store} />, document.getElementById('root'));
