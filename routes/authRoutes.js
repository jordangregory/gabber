const express = require("express");
const authRouter = express.Router();
// render login page
authRouter.get("/login", function(req, res) {
  res.render("login");
});
// log in the user
authRouter.post("/login", function(req, res) {
  res.render("login");
});

// render signup page
authRouter.get("/signup", function(req, res) {
  res.render("signup");
});

// create a new user
authRouter.post("/signup", function(req, res) {
  res.render("signup");
});

module.exports = authRouter;
