const Sequelize = require("sequelize");

class RECOMMENTS extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        recomments: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        profile_img: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "RECOMMENTS",
        tableName: "recomments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.RECOMMENTS.belongsTo(db.COMMENTS, {
      foreignKey: "recomment_id",
      targetKey: "id",
    });
  }
}

module.exports = RECOMMENTS;
