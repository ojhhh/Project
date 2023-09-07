const router = require("express").Router();
const {
  paymentdetail,
  paymentsucceeded,
  paymenthistorydetails,
  paymentcancel,
} = require("../controller/paymentController");
const { islogin } = require("../middleware/islogin");

router.get("/paymentdetail", islogin, paymentdetail);
router.post("/paymentsucceeded", islogin, paymentsucceeded);
router.post("/paymenthistorydetails", islogin, paymenthistorydetails);
router.post("/paymentcancel", islogin, paymentcancel);

module.exports = router;
