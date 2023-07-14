const router = require("express").Router();
const {
  AllPosts,
  PostInsert,
  PostUpdate,
  PostDelete,
} = require("../controllers/postController");
const { isLogin } = require("../middleware/isLogin");

router.get("/allposts", isLogin, AllPosts);

router.post("/insert", isLogin, PostInsert);
router.post("/update", isLogin, PostUpdate);
router.post("/delete", isLogin, PostDelete);

module.exports = router;
