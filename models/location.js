const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Location = sequelize.define('location', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  city: Sequelize.STRING,
  street_name: Sequelize.STRING,
  street_number: Sequelize.INTEGER,
  zip: Sequelize.STRING,
  country: Sequelize.STRING,
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE
});

module.exports = Location;