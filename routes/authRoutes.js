const express = require("express");
const authRouter = express.Router();
const models = require("../models");

// render login page
authRouter.get("/login", function(req, res) {
  res.render("login");
});
// log in the user
authRouter.post("/login", function(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.redirect("/login");
  }
  var userRecord = req.body;
  models.user
    .find({
      where: { username: req.body.username }
    })
    .then(function(foundUser) {
      console.log("foundUser: ", foundUser);
      if (!foundUser) {
        return res.redirect("/auth/login"); //user not found
      }
      //check if the req.body.password matches the foundUser password.
      // if they match, add a user property to the req.session.
      if (req.body.password === foundUser.password) {
        req.session.user = foundUser;
        return res.redirect("/");
      } else {
        return res.redirect("/auth/login");
      }
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
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
