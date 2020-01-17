const express = require("express");
var ehb = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;
const app = express();

// serve static content from the 'public' directory
app.use(express.static("public"));

// parse application body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars as view engine
app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => console.log("express listening on http://localhost:" + PORT));
