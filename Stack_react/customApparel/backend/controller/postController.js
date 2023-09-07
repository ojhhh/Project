const multer = require("multer");
const path = require("path");
const { where, Op } = require("sequelize");
const db = require("../models");
const POST = db.POST;
const COMMENTS = db.COMMENTS;
const RECOMMENTS = db.RECOMMENTS;
const USER = db.USER;

// 전체 post 목록 반환하는 함수
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await POST.findAll({ include: [{ model: USER }] });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// 특정 카테고리 post 목록 반환하는 함수
exports.getPostsByHashtag = async (req, res) => {
  const { hash_tag } = req.params;
  try {
    const posts = await POST.findAll({ where: { hash_tag } });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};
// 상세 post 내용 반환하는 함수
exports.getPostDetail = async (req, res) => {
  const { id } = req.params;
  // console.log(req);
  try {
    const post = await POST.findOne({
      where: { id },
      include: [
        { model: COMMENTS, include: [{ model: RECOMMENTS }] },
        { model: USER },
      ],
    });
    console.log("post :", post);
    res.json(post);
    // res.json();
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// post 등록하는 함수
exports.createPost = async (req, res) => {
  // const {
  //   id,
  //   user_id,
  //   post_title,
  //   post_content,
  //   // post_img,
  //   hash_tag,
  // } = req.body;

  const parsedData = JSON.parse(req.body.data);
  console.log("parsedData", parsedData);
  // title, content 넣어주기 parse 해주기
  try {
    console.log("여기옴?");
    const addpost = await POST.create({
      user_id: parsedData.user_id,
      post_title: "title",
      post_content: parsedData.content,
      post_img: "/img/addpost/" + req.file.filename,
      callbyuser_id: parsedData.id,
      hash_tag: JSON.stringify(parsedData.hash_tag),
    });
    res.json(addpost);
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
// multer
exports.postImgUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, fin) => {
      // console.log("여기 멀터");
      fin(null, "img/addpost");
    },

    filename: (req, file, fin) => {
      // const ext = path.extname(file.originalname);

      // const filename =
      //   path.basename(file.originalname, ext) + "_" + Date.now() + ext;

      // fin(null, filename);
      console.log(file.originalname);
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      const filename = basename + "_" + Date.now() + ext;
      console.log("filename", filename);
      fin(null, filename);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});

exports.postLikes = async (req, res) => {
  try {
    const { action, user_id, post_id, post_title, post_content } = req.body;

    // 특정 게시글을 찾습니다.
    const post = await POST.findOne({ where: { id: post_id } });

    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    let likesArray = post?.likes.length != 0 ? JSON.parse(post.likes) : []; // likes를 배열로 파싱

    if (action === "like") {
      // 중복 좋아요 방지
      if (!likesArray.includes(user_id)) {
        likesArray.push(user_id);
      }
    } else if (action === "unlike") {
      // 사용자 ID를 배열에서 제거
      likesArray = likesArray.filter((id) => id !== user_id);
    }

    // 좋아요 목록을 업데이트
    await post.update({
      likes: JSON.stringify(likesArray),
      post_title: post_title, // 이 부분은 필요한지 재확인이 필요합니다.
      post_content: post_content, // 이 부분은 필요한지 재확인이 필요합니다.
    });

    res.json({ success: true });
  } catch (error) {
    console.log("에러럴", error);
    res.json({ success: false, error: error.message });
  }
};

// 게시글 수정
exports.updatePost = async (req, res) => {
  try {
    const { id, post_content } = JSON.parse(req.body.data);
    const { path } = req.file;

    console.log(id, post_content, path);

    const data = await POST.update(
      { post_content, post_img: `/` + path },
      { where: { id } }
    );

    console.log(data);
    res.json();
  } catch (error) {
    console.error(error);
  }
};

// 게시글 삭제
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await POST.destroy({ where: { id } });
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
