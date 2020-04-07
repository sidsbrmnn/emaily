const express = require("express");

const apiRouter = express.Router();

apiRouter.post("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

apiRouter.get("/me", (req, res) => {
  res.send(req.user);
});

module.exports = apiRouter;
