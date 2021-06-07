const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
routes(app);

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.listen("3000", () => {
  console.log("escuchandi puerto 3000");
});
