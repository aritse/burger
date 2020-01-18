const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(records => res.render("index", { burgers: records }));
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body, d => res.json({ id: d.insertId }));
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.body, req.params.id, d => (d.changedRows ? res.status(200).end() : res.status(404).end()));
});

module.exports = router;
