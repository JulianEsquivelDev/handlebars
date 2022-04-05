const express = require("express");
const app = express();
const port = 3000;

// coin JSON data
const { coins } = require("./models/coins");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.set("view engine", "handlebars");

app.engine("handlebars", hbs.engine);

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("main", { layout: "index", coins: coins });
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
