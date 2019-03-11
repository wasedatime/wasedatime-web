import user, { getUserDisplayLang } from "./user";
import { CHANGE_USER_LANG } from "../actions/types";
import LANGS from "../config/langs";

describe(">>>REDUCER --- Test user", () => {
  test("should return the initial state", () => {
    expect(user(undefined, {})).toEqual({
      displayLang: "en"
    });
  });

  test("should handle CHANGE_USER_LANG", () => {
    const action = {
      type: CHANGE_USER_LANG,
      payload: {
        displayLang: "jp"
      }
    };
    expect(user({ displayLang: "en" }, action)).toEqual({
      displayLang: "jp"
    });
  });
});

describe(">>>SELECTOR --- Test getUserDisplayLang", () => {
  test("should return LANGS.JP given state with displayLang as 'jp'", () => {
    const userSubState = user({ displayLang: "jp" }, {});
    expect(getUserDisplayLang({ user: userSubState })).toEqual(LANGS.JP);
  });

  test("should return LANGS.EN given state with displayLang as 'en'", () => {
    const userSubState = user({ displayLang: "en" }, {});
    expect(getUserDisplayLang({ user: userSubState })).toEqual(LANGS.EN);
  });
});
