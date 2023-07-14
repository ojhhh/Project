const { posts } = require("../models");

exports.AllPosts = async (req, res) => {
  try {
    const data = await posts.findAll({ raw: true });
    const response = {
      data,
      user_id: req.decoded.id,
    };
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

exports.PostInsert = async (req, res) => {
  try {
    // console.log(req);
    const { title, content, writer } = req.body;
    await posts.create({ title, content, writer });
    res.send(true);
  } catch (error) {
    console.error(error);
  }
};

exports.PostUpdate = async (req, res) => {
  try {
    console.log("postController req.session");
    console.log(req);
    const { id, title, content } = req.body;
    await posts.update({ title, content }, { where: { id } });
    res.send("update");
  } catch (error) {
    console.error(error);
  }
};

exports.PostDelete = async (req, res) => {
  try {
    const { id } = req.body;
    await posts.destroy({ where: { id } });
    res.send("destroy");
  } catch (error) {
    console.error(error);
  }
};
