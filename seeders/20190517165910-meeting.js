'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('meetings', [{
        start: new Date(),
        description: "PHP programming conference",
        duration: 8,
        locationId:1
      },
      {
        start: new Date(),
        description: "JavaScript basics",
        duration: 4,
        locationId:1
      },
      {
        start: new Date(),
        description: "JavaScript ES6 Syntax",
        duration: 10,
        locationId:1
      },
      {
        start: new Date(),
        description: "Using bootstrap",
        duration: 2,
        locationId:1
      }], {});
    
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
