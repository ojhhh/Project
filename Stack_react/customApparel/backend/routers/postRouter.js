const router = require("express").Router();
const {
  getAllPosts,
  getPostsByHashtag,
  getPostDetail,
  createPost,
  updatePost,
  deletePost,
  postLikes,
  postImgUpload,
  getHashtag,
} = require("../controller/postController");
const { islogin } = require("../middleware/islogin");
// 전체 post 목록 반환
router.get("/posts", getAllPosts);

// 특정 카테고리 post 목록 반환 라우트
router.get("/hashtag/:hash_tag", getPostsByHashtag);

// 상세 Post 내용 반환 라우트
router.get("/detail/:id", getPostDetail);

// post 등록 라우트
router.post("/addpost", postImgUpload.single("post_img"), createPost);

// post 수정 라우트 (동희씨꺼 훔친거 아님)
router.post("/updatepost", postImgUpload.single("post_img"), updatePost);

// post 삭제 라우트
router.post("/deletepost", deletePost);

// 좋아요 라우트
router.post("/postLikes", postLikes);

module.exports = router;
