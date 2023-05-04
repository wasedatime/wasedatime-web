module.exports = {
  extends: [
    "next",
    "turbo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
