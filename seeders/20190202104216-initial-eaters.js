'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Burgers", [
      {
        eater_name: "Ima Burger Eater"
      },

      {
        eater_name: "Burger King"
      },

      {
        eater_name: "Wendy Carlson"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
