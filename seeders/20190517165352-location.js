'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('locations', [{
        city: 'Brno',
        street_name: 'Kohutova',
        street_number: '3',
        zip: '60014',
        country: 'Czezh Republic',
        name: 'Dormitory',
        latitude: '49.216080',
        longitude: '16.631370',
      },
      {
        city: 'Praha',
        street_name: 'Ruzveltova',
        street_number: '3',
        zip: '15154',
        country: 'Czezh Republic',
        name: 'Restaurant',
        latitude: '47.216080',
        longitude: '16.631370',
      },
      {
        city: 'Skopje',
        street_name: 'Kukush',
        street_number: '6',
        zip: '1000',
        country: 'Macedonia',
        name: 'Dormitory',
        latitude: '44.216080',
        longitude: '22.631370',
      },
      {
        city: 'Berlin',
        street_name: 'burgasse',
        street_number: '6',
        zip: '10202',
        country: 'Germany',
        name: 'Microsoft office',
        latitude: '45.216080',
        longitude: '18.631370',
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
