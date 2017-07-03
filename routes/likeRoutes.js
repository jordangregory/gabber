const express = require("express");
const likeRouter = express.Router();

likeRouter.get("/", function(req, res) {
  res.render("likes");
});

module.exports = likeRouter;
