const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.render("index");
});

module.exports = router;
