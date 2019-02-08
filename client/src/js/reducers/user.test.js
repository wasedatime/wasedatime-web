import user from './user';
import { CHANGE_USER_LANG } from '../actions/types';

describe('>>>REDUCER --- Test user', () => {
  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual({
      displayLang: 'en'
    });
  });

  it('should handle CHANGE_USER_LANG', () => {
    const action = {
      type: CHANGE_USER_LANG,
      payload: {
        displayLang: 'jp'
      }
    };
    expect(user('en', action)).toEqual({
      displayLang: 'jp'
    });
  });
});
