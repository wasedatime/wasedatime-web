module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",

  overrides: [
    {
      files: ["*.html", "*ejs"],
      options: {
        printWidth: 200,
      },
    },
  ],
};
