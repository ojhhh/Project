const { DataTypes, Model } = require("sequelize");

class users extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        user_pw: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        user_name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = users;
