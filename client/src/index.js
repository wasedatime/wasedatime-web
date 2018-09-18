import React from 'react';
import { render } from 'react-dom';
import throttle from 'lodash/throttle';

import configureStore from './configureStore';
import { saveState } from './localStorage';
import Root from './js/components/Root';

import 'normalize-css/normalize.css';
import './styles/styles.css';

const store = configureStore();

store.subscribe(
  throttle(() => {
    const addedCourses = store.getState().addedCourses;
    saveState({
      addedCourses: {
        fall: {
          prefs: addedCourses.fall.prefs,
          sortingOption: addedCourses.fall.sortingOption
        },
        spring: {
          prefs: addedCourses.spring.prefs,
          sortingOption: addedCourses.spring.sortingOption
        }
      }
    });
  }, 800)
);

render(<Root store={store} />, document.getElementById('root'));
