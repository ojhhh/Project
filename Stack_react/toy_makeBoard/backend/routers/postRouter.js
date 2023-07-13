const router = require("express").Router();
const {
  AllPosts,
  PostInsert,
  PostUpdate,
  PostDelete,
} = require("../controllers/postController");
const { isLogin } = require("../middleware/isLogin");

router.get("/allposts", isLogin, AllPosts);

router.post("/insert", PostInsert);
router.post("/update", PostUpdate);
router.post("/delete", PostDelete);

module.exports = router;
