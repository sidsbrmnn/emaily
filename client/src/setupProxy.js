const { createProxyMiddleware } = require("http-proxy-middleware");

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
if (!REACT_APP_BASE_URL) {
  console.error("REACT_APP_BASE_URL cannot be undefined");

  process.exit(1);
}

module.exports = function (app) {
  app.use("/api", createProxyMiddleware({ target: REACT_APP_BASE_URL }));
  app.use(
    "/auth/google",
    createProxyMiddleware({ target: REACT_APP_BASE_URL })
  );
};
