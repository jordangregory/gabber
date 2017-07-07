const express = require("express");
const homeRouter = express.Router();
const models = require("../models");

homeRouter.get("/", function(req, res) {
  models.post.findAll().then(function(foundPosts) {
    res.render("homepage", { gabs: foundPosts });
  });
  // join related posts
  // render homepage with posts and likes
  console.log("got home route");
});

module.exports = homeRouter;
