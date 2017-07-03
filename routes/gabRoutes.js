const express = require("express");
const gabRouter = express.Router();

gabRouter.get("/", function(req, res) {
  // get all the gabs
  res.render("newGab");
});

gabRouter.post("/", function(req, res) {
  res.redner("newGab");
});

module.exports = gabRouter;
