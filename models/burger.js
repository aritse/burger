const orm = require("../config/orm");

const Burger = {
  all: function(callback) {
    orm.selectAll("burgers", allBurgers => callback(allBurgers));
  },
  add: function(burger, callback) {
    orm.insertOne("burgers", burger, newBurger => callback(newBurger));
  },
  update: function(burger, id, callback) {
    orm.updateOne("burgers", burger, id, updBurger => callback(updBurger));
  }
};

module.exports = Burger;
