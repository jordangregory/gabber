const express = require("express");
const authRouter = express.Router();
const models = require("../models");

// render login page
authRouter.get("/login", function(req, res) {
  res.render("login");
});
// log in the user
authRouter.post("/login", function(req, res) {
  return res.redirect("/login");
});

// create a new user
authRouter.post("/signup", function(req, res) {
  var newUser = models.user
    .build({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      bio: req.body.bio
    })
    .save()
    .then(function(savedUser) {})
    .catch(function(err) {
      console.warn("ERROR ", err);
    });
  return res.redirect("/auth/login");
});

// render signup page
authRouter.get("/signup", function(req, res) {
  res.render("signup");
});

module.exports = authRouter;
