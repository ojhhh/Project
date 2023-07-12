const router = require("express").Router();

router.get("/", () => {
  console.log("hi");
});

module.exports = router;
