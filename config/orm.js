const conn = require("./connection");

const orm = {
  selectAll: (table, cols, cb) => {
    const query = "SELECT ?? FROM ??";
    conn.query(query, [cols, table], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: (table, burger, cb) => {
    const query = "INSERT INTO ?? SET ?";
    conn.query(query, [table, burger], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  updateOne: (table, burger, id, cb) => {
    const query = "UPDATE ?? SET ? WHERE id=?";
    conn.query(query, [table, burger, id], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
