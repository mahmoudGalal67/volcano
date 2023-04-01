const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "seriallkiller",
  database: "volcano",
});

module.exports = { db };