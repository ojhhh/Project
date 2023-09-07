const router = require("express").Router();
const { CustomInfo01 } = require("../controller/customController");

router.get("/", CustomInfo01);

module.exports = router;
