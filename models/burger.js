const orm = require("../config/orm");

const burger = {
  selectAll: callback => orm.selectAll("burgers", data => callback(data)),
  insertOne: (newBurger, callback) => orm.insertOne("burgers", newBurger, data => callback(data)),
  updateOne: (updBurger, id, callback) => orm.updateOne("burgers", updBurger, id, data => callback(data))
};

module.exports = burger;
