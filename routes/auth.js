const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get("/auth/google/callback", passport.authenticate("google"));

module.exports = authRouter;
