const colors = require("@bit/wasedatime.core.theme.colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColors: colors,
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
