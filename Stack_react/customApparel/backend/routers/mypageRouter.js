const router = require("express").Router();
const {
  postImg,
  imgUpdate,
  mypage,
  updateuserpw,
  updateusernick,
  getmypostsIliked,
  postWrittenbyme,
} = require("../controller/mypageController");
const { islogin } = require("../middleware/islogin");

router.get("/", islogin, mypage);

router.post("/postimg", islogin, postImg.single("image"));
router.post("/imgUpdate", postImg.single("profile_img"), islogin, imgUpdate);
router.post("/updateuserpw", islogin, updateuserpw);
router.post("/updateusernick", islogin, updateusernick);
router.get("/getmypostsIliked", islogin, getmypostsIliked);
router.get("/postWrittenbyme", islogin, postWrittenbyme);
module.exports = router;
