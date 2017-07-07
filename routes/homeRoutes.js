const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", function(req, res) {
  // query posts for most recent posts
  // join related posts
  // render homepage with posts and likes
  //const queryEndResult
  console.log("got home route");
  res.render(
    "homepage",
    {
      // gabs: queryEndResult
    }
  );
  // res.send("got it");
});

module.exports = homeRouter;
