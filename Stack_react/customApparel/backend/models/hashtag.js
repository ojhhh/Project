const Sequelize = require("sequelize");

class HASHTAG extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        hashtag: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        post_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "HASHTAG",
        tableName: "hashtag",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.HASHTAG.belongsTo(db.POST, {
      foreignKey: "HASH_TAG_ID",
      targetKey: "id",
    });
  }
}

module.exports = HASHTAG;
