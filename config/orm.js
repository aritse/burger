const connection = require("./connection");

const orm = {
  selectAll: (table, callback) => {
    connection.query("SELECT * FROM ??", [table], (err, records) => {
      if (err) throw err;
      callback(records);
    });
  },
  insertOne: (table, object, callback) => {
    connection.query("INSERT INTO ?? SET ?", [table, object], (err, record) => {
      if (err) throw err;
      callback(record);
    });
  },
  updateOne: function(table, object, id, callback) {
    connection.query("UPDATE ?? SET ? WHERE id=?", [table, object, id], (err, record) => {
      if (err) throw err;
      callback(record);
    });
  }
};

module.exports = orm;
