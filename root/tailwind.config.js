module.exports = {
  content: [
    "./src/**/*.ejs",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.html",
  ],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      textColors: (theme) => ({
        light: {
          text1: "#333333",
          text2: "#606060",
          text3: "#B4B4B4",
        },
        dark: {
          text1: "#E1E1E1",
          text2: "#9E9E9E",
          text3: "#606060",
        },
        icon: {
          sun: "#FFC000",
          moon: "#F7E7CE",
        },
      }),
      colors: (theme) => ({
        light: {
          primary: "#8E1728",
          light: "#E4E4E4",
          natural: "#CFCFCF",
          dark: "#696969",
          darker: "#424242",
          bgMain: "#FFFFFF",
          bgSide: "#FAFAFA",
        },
        dark: {
          primary: "#B51E36",
          light: "#323842",
          natural: "#38393B",
          dark: "#C8C8C8",
          darker: "#A1A1A1",
          bgMain: "#1F2022",
          bgSide: "#242527",
        },
        icon: {
          sun: "#FFC000",
          moon: "#F7E7CE",
        },
      }),
    },
  },
  plugins: [],
};
