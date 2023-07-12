const sequelize = require("sequelize");

exports.AllPosts = async (req, res) => {
  try {
    console.log(req.query);
  } catch (error) {
    console.error(error);
  }
};
