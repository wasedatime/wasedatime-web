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

  //declarative colors
  red: "#ce0115",
  green: "#48af37",
  blue: "#6495ed",
  orange: "ffa500",
  deeperBrown: "#580505",
  lightRed: "#ef9a9a",
  deepBrown: "#862505",
  lightOrange: "#ffcc80",
  brown: "#845125",
  lightYellow: "#fff59d",
  deepGreen: "#114615",
  lightGreen: "#a5d6a7",
  deepBlue: "#0c2a58",
  lightBlue: "#90caf9",
  deepPurple: "#221361",
  lightPurple: "#b39ddb",
  deepestBrown: "#3e2723",
  lightBrown: "#c7a59a",
  deepGrey: "#222",
  lightGrey: "#aaa",

  //semantic colors
  timetableBgColor: shades.white,
};

export const darkTheme = {
  ...sizes,
  ...shades,

  //main colors
  colorPrimary: "#b51e36",

  //declarative colors
  red: "#ce0115",
  green: "#48af37",
  blue: "#6495ed",
};

export const timetableTheme = {
  /*
  Incredibly useful site:
  https://www.materialpalette.com/colors
  */
  color0: "#580505",
  bgColor0: "#ef9a9a",
  color1: "#862505",
  bgColor1: "#ffcc80",
  color2: "#845125",
  bgColor2: "#fff59d",
  color3: "#114615",
  bgColor3: "#a5d6a7",
  color4: "#0c2a58",
  bgColor4: "#90caf9",
  color5: "#221361",
  bgColor5: "#b39ddb",
  color6: "#3e2723",
  bgColor6: "#c7a59a",
  color7: "#222",
  bgColor7: "#aaa",
};
