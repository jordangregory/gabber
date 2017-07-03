const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", function(req, res) {
  console.log("got home route");
  res.render("homepage");
  // res.send("got it");
});

module.exports = homeRouter;
