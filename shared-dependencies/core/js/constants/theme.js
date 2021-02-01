import {
  headerHeight,
  searchBarHeight,
  addedCourseListSwitchHeight,
  fetchedCourseListSwitchHeight,
} from "@bit/wasedatime.core.ts.constants.size-variables";

// Adapted from https://medium.com/codyhouse/create-your-design-system-part-3-colors-798e4729921f
const sizes = {
  headerHeight,
  searchBarHeight,
  addedCourseListSwitchHeight,
  fetchedCourseListSwitchHeight,
};

const shades = {
  black: "#000",
  grey2: "#222",
  grey4: "#444",
  grey7: "#777",
  grey12: "#ccc",
  grey14: "#eee",
  white: "#fff",
};

export const normalTheme = {
  ...sizes,
  ...shades,

  //main colors
  colorPrimary: "#b51e36",
};
