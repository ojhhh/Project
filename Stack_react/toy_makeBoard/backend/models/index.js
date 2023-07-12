const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.dev);

const users = require("./users");
const posts = require("./posts");

users.init(sequelize);
posts.init(sequelize);

const db = {};

db.users = users;
db.posts = posts;
db.sequelize = sequelize;

module.exports = db;
