const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const models = require("./models");

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
