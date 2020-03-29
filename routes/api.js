const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

apiRouter.get("/me", (req, res) => {
  res.send(req.user);
});

module.exports = apiRouter;
