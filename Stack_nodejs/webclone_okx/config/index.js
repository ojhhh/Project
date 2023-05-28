const Sequelize = require("sequelize");

const config = {
  database: "okx",
  username: "root",
  password: "root",
  host: "127.0.0.1",
  dialect: "mysql",
};

const sequelize = new Sequelize(config);
// console.log(seq);
module.exports = sequelize;
