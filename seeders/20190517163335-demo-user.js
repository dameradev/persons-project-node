'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [{
      first_name: 'John',
      last_name: 'Doe',
      nickname: 'demo@demo.com',
      birth_day: new Date(),
      height: 193,
      locationId: 1
    },{
      first_name: 'Marko',
      last_name: 'Polo',
      nickname: 'polo@demo.com',
      birth_day: new Date(),
      height: 196,
      locationId: 1
    },
    {
      first_name: 'Damjan',
      last_name: 'Radev',
      nickname: 'polo@demo.com',
      birth_day: new Date(),
      height: 188,
      locationId: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
  return queryInterface.bulkDelete('people', null, {});
  
  }
};
