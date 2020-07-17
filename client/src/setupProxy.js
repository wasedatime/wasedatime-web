// A required file for create-react-app proxy configuration after 2.0.3

const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
};
