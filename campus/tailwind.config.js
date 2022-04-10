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
};
