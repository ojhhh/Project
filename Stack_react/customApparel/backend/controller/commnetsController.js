const db = require("../models");
const COMMENTS = db.COMMENTS;
const RECOMMENTS = db.RECOMMENTS;

// 상세 - 댓글 추가해주는 함수
exports.comment = async (req, res) => {
  // const { id } = req.body;
  // const user_id = 123;
  console.log(req.body);
  const { user_id, profile_img, addComments, postId } = req.body;
  try {
    const comment = await COMMENTS.create({
      user_id,
      // comment_id,
      comments_content: addComments,
      profile_img,
      post_primaryKey: postId,
    });
    res.json({ success: true, comment });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 대댓글
exports.reComment = async (req, res) => {
  // const user_id = 1; // 임시 user_id
  const { user_id, recomments, profile_img, recomment_id } = req.body;
  try {
    const recomment = await RECOMMENTS.create({
      user_id,
      // comment_id,
      recomments,
      profile_img,
      recomment_id,
    });
    res.json({ success: true, recomment });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

exports.getComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await COMMENTS.findAll({
      where: { post_primaryKey: postId },
      order: [["createdAt"]],
    });
    res.json({ success: true, comments });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

exports.getRecomments = async (req, res) => {
  const { commentId } = req.params; // 대댓글을 가져올 댓글의 ID
  try {
    const recomments = await RECOMMENTS.findAll({
      where: { recomment_id: commentId }, // 대댓글을 가져올 댓글의 ID와 일치하는 recomment_id 값 찾기
      order: [["createdAt"]],
    });
    res.json({ success: true, recomments });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
