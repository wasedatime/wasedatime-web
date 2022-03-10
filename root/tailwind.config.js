const colors = require("./colors.json");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ejs,js,jsx,ts,tsx,html}"],
  safelist:
    process.env.PURGE_TAILWIND_CSS === "true" ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {
      textColors: colors,
      colors,
    },
  },
  plugins: [],
};
