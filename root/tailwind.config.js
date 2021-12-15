module.exports = {
  purge: {
    enabled: true, // process.env.NODE_ENV === "production"
    content: [
      "./src/**/*.ejs",
      "./src/**/*.js",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.html",
    ],
  },
  darkMode: "media", // or 'class' or 'false'
  theme: {
    extend: {
      textColors: (theme) => ({
        primary: "#b51e36",
        primaryDarker: "#8E1728",
        light: {
          text1: "#000000",
          fadetext: "#9E9E9E",
        },
        dark: {
          text1: "#9E9E9E",
          text2: "#757575",
          fadetext: "#9E9E9E",
        },
      }),
      colors: (theme) => ({
        primary: "#b51e36",
        primaryDarker: "#8E1728",
        light: {
          sidebar: "#212121",
          text1: "#000000",
          fadetext: "#9E9E9E",
          button: "#8E1728",
          cell: "#ECF0F1",
          border: "#BDBDBD",
          bg: "#FFFFFF",
          linetop: "#F4F6F7",
        },
        dark: {
          sidebar: "#212121",
          text1: "#9E9E9E",
          text2: "#757575",
          fadetext: "#9E9E9E",
          button: "#8E1728",
          cell: "#424242",
          border: "#757575",
          bg: "#212121",
          linetop: "#424242",
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
