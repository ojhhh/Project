const Sequelize = require("sequelize");

class PAYMENTVIEW extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Unique_payment_number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        custom_img: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        count: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "PAYMENTVIEW",
        tableName: "paymentview",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.PAYMENTVIEW.belongsTo(db.USER, {
      foreignKey: "paymentview_id",
      targetKey: "id",
    });
  }
}

module.exports = PAYMENTVIEW;
