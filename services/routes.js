const cookieSession = require("cookie-session");
const passport = require("passport");

module.exports = function (app) {
  const COOKIE_KEY = process.env.COOKIE_KEY || "some_key";
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [COOKIE_KEY],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", require("../routes/api"));
  app.use("/auth", require("../routes/auth"));
};
