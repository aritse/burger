const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(allBurgers => res.render("index", { burgers: allBurgers }));
});

router.post("/api/burgers", function(req, res) {
  const newBurger = { burger_name: req.body.burger_name };
  burger.add(newBurger, data => res.json({ id: data.insertId }));
});

router.put("/api/burgers/:id", function(req, res) {
  const id = req.params.id;
  const burger_name = req.body.burger_name;
  const devoured = req.body.devoured.toLowerCase() === "true";
  const updBurger = { burger_name: burger_name, devoured: devoured };
  burger.update(updBurger, id, data => {
    if (data.changedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

module.exports = router;
