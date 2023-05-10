const mysql2 = require("mysql2/promise");
const mysql = mysql2.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "ohstoryBoard",
  multipleStatements: true,
});

mysql.getConnection((err, res) => {
  try {
    console.log("database connect");
  } catch (error) {
    console.log("config error");
    console.error(err);
  }
});

module.exports = mysql;
