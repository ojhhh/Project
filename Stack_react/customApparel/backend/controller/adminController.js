const db = require("../models");
const User = db.USER;

// 모든 유저의 정보를 어드민 페이지로 보냄
exports.AllUserInfo = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: [
        "id",
        "user_id",
        "profile_img",
        "Nick",
        "createdAt",
        "Accept",
      ],
      raw: true,
    });

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

// 미가입 유저 보기
exports.Unsubscriber = async (req, res) => {
  try {
    const data = await User.findAll({ where: { Accept: 0 } });
    res.json(data);
  } catch (error) {
    console.erorr(error);
  }
};

// 가입된 유저 보기
exports.Subscriber = async (req, res) => {
  try {
    const data = await User.findAll({ where: { Accept: 1 } });
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

// 가입 승인
exports.Accept = async (req, res) => {
  try {
    const { user_id } = req.body;
    await User.update({ Accept: 1 }, { where: { user_id } });
    res.send();
  } catch (error) {
    console.error(error);
  }
};

// 승인 철회
exports.Reject = async (req, res) => {
  try {
    const { user_id } = req.body;
    await User.update({ Accept: 0 }, { where: { user_id } });
    res.send();
  } catch (error) {
    console.error(error);
  }
};
