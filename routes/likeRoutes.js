const express = require("express");
const likeRouter = express.Router();

likeRouter.post("/", function(req, res) {
  // post req should have the post id and the liker id.
  res.render("likes");
});

module.exports = likeRouter;
