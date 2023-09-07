const Sequelize = require("sequelize");

class POST extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        post_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        post_comment: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        post_img: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        likes: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "[]",
        },
        // 이경우 작성자 명을 말한다. nickname이 존재하지만 거의 쓰이지않는다. 인스타와 비슷하다 생각하면 편하다.
        user_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        hash_tag: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "[]",
        },
        callbyuser: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "POST",
        tableName: "post",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.POST.hasMany(db.COMMENTS, {
      foreignKey: "post_primaryKey",
      sourceKey: "id",
    });
    db.POST.hasMany(db.HASHTAG, {
      foreignKey: "HASH_TAG_ID",
      sourceKey: "id",
    });
    db.POST.belongsTo(db.USER, {
      foreignKey: "callbyuser_id",
      targetKey: "id",
    });
  }
}

module.exports = POST;
