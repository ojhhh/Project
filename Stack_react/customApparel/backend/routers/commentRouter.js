const router = require("express").Router();
const {
  comment,
  reComment,
  getComments,
  getRecomments,
} = require("../controller/commnetsController");
const { islogin } = require("../middleware/islogin");

router.get("/comments/:postId", getComments);
router.get("/recomments/:commentId", getRecomments);
// router.post("/recomments", islogin, reComment);
router.post("/recomments", reComment);
// router.post("/comments", islogin, comment);
router.post("/comments", comment);

module.exports = router;
