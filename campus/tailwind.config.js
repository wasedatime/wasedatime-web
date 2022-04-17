const colors = require("@bit/wasedatime.core.theme.colors");
const daisyui = require("daisyui");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColors: colors,
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: [
      {
        myTheme: {
          primary: colors.light.main,
          secondary: colors.light.darker,
          accent: colors.light.secondary,
          neutral: colors.light.text1,
          "base-100": colors.light.bgMain,
          info: "#3ABFF8",
          success: "#123456",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
