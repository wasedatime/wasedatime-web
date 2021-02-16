module.exports = {
  "globDirectory": __dirname,
  "globPatterns": [
    "**/*.{html,ejs,js,ts,tsx}"
  ],
  "swDest": "/sw.js",
  "swSrc": "/service-worker.js",
  "exclude": [/\.map$/, /manifest\.json$/, /sw\.js$/]
};