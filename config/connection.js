const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

conn.connect(err => console.log("node connected to mysql as", conn.threadId));

module.exports = conn;
