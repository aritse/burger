const express = require("express");
const ehb = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => console.log("express listening on port", PORT));
