const Sequelize = require("sequelize");

class CUSTOM extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        t_img: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        t_type: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        t_size: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        t_color: {
          type: Sequelize.STRING,
          allowNull: true,
        },

        t_price: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "CUSTOM",
        tableName: "custom",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = CUSTOM;
