const express = require("express");
const homeRouter = express.Router();
const models = require("../models");

homeRouter.get("/", function(req, res) {
  models.post.findAll().then(function(foundPosts) {
    console.log("foundPosts: ", foundPosts);
    res.render("homepage", { gabs: foundPosts });
  }); // query posts for most recent posts
  // join related posts
  // render homepage with posts and likes
  console.log("got home route");
  // res.send("got it");
});

module.exports = homeRouter;
