const { DataTypes, Model } = require("sequelize");

class posts extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        writer: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "Post",
        tableName: "posts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = posts;
