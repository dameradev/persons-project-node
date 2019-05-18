const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Meeting = sequelize.define('meeting', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  },
  start: Sequelize.DATE,
  description: Sequelize.STRING,
  duration: Sequelize.TIME
});

module.exports = Meeting;