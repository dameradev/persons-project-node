const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const PersonMeeting = sequelize.define('personMeeting', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  }
});

module.exports = PersonMeeting;