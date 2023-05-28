const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config");

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    user_pw: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false,
    modelName: "User",
    tableName: "users",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

module.exports = User;
