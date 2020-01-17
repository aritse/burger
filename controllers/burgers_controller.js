const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all(data => {
    const ehbObj = { burgers: data };
    res.render("index", ehbObj);
  });
});

router.post("/api/create", (req, res) => {
  const newBurger = { burger_name: req.body.burger_name, devoured: req.body.devoured };
  burger.create(newBurger, data => {
    res.json({ id: data.insertId });
  });
});

router.put("/api/update", (req, res) => {
  const updBurger = { burger_name: req.body.burger_name, devoured: req.body.devoured };
  const id = req.params.id;
  burger.update(updBurger, id, data => {
    if (data.changedRows === 0) return res.status(404).end();
    res.status(200).end();
  });
});

module.exports = router;
