const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) throw err;
  console.log("node connected to mysql as", connection.threadId);
});

module.exports = connection;
