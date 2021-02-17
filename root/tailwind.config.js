module.exports = {
  purge: {
    mode: 'all',
    enabled: process.env.NODE_ENV === "production",
    content: ['./src/**/*.ejs', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
