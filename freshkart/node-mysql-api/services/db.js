const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "WebTechTalk1!",
  database: "webtechtalk",
});

conn.connect();

module.exports = conn;
