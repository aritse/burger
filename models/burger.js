const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll("burger", "*", data => cb(data));
  },
  create: function(burger, cb) {
    orm.insertOne("burgers", burger, data => cb(data));
  },
  update: function(burger, id, cb) {
    orm.updateOne("burgers", burger, id, data => cb(data));
  }
};

module.exports = burger;
