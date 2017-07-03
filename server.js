const express = require("express");
const app = express();
const expressValidator = require("express-validator");
const session = require("express-session");
const models = require("./models");
const port = process.env.PORT || 6000;

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
