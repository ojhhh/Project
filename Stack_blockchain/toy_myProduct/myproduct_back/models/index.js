const config = require("../config");
const Sequelize = require("sequelize");

const seq = new Sequelize(config.dev);

const Products = require("./products");

Products.init(seq);

const db = {};

db.sequelize = seq;
db.Products = Products;

module.exports = db;
