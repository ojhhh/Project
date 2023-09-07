const router = require("express").Router();
const {
  AllUserInfo,
  Accept,
  Reject,
  Subscriber,
  Unsubscriber,
} = require("../controller/adminController");

router.get("/", AllUserInfo);

router.get("/subscriber", Subscriber);
router.get("/unsubscriber", Unsubscriber);

router.post("/accept", Accept);
router.post("/reject", Reject);

module.exports = router;
