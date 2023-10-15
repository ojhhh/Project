const { DataTypes, Model } = require("sequelize");

class Product extends Model {
  static init(seq) {
    return super.init(
      {
        product_number: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        product_img: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize: seq,
        underscored: false,
        modelName: "Products",
        tableName: "Products",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Product;
