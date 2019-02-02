'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Burgers", [
      {
        burger_name: "Impossible Burger",
        devoured: true
      },

      {
        burger_name: "Cheeseburger",
        devoured: false
      },

      {
        burger_name: "Double cheeseburger",
        devoured: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Burgers", null, {});
  }
};