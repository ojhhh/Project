const Sequelize = require("sequelize");

class USER extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        profile_img: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "/img/default_img.png",
        },
        Nick: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Accept: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: "0",
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "USER",
        tableName: "user",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.USER.hasMany(db.POST, {
      foreignKey: "callbyuser_id",
      sourceKey: "id",
    });
    db.USER.hasMany(db.PAYMENTVIEW, {
      foreignKey: "paymentview_id",
      sourceKey: "id",
    });
  }
}

module.exports = USER;
