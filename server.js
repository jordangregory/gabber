const express = require("express");
const app = express();
const expressValidator = require("express-validator");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const models = require("./models");
const port = process.env.PORT || 6000;

app.engine("mustache", mustacheExpress());
app.set("views", "./public");
app.set("view engine", "mustache");

app.use("/", express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "joey pants",
    resave: true,
    saveUninitialized: true,
    cookies: {
      maxAge: 600000
    }
  })
);

app.get("/homepage", function(req, res) {
  console.log("session", req.session);
  res.render("homepage");
});
app.get("/signup", function(req, res) {
  res.render("signup");
});
app.get("/login", function(req, res) {
  res.render("login");
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
