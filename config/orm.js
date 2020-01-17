const conn = require("./connection");

const orm = {
  selectAll: function(table, callback) {
    const queryString = "SELECT * FROM ??";
    conn.query(queryString, [table], (err, records) => {
      if (err) throw err;
      callback(records);
    });
  },
  insertOne: function(table, object, callback) {
    const queryString = "INSERT INTO ?? SET ?";
    conn.query(queryString, [table, object], (err, record) => {
      if (err) throw err;
      callback(record);
    });
  },
  updateOne: function(table, object, id, callback) {
    const queryString = "UPDATE ?? SET ? WHERE id=?";
    conn.query(queryString, [table, object, id], (err, record) => {
      if (err) throw err;
      callback(record);
    });
  }
};

module.exports = orm;
