const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const PersonMeeting = sequelize.define('personMeeting', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
});

module.exports = PersonMeeting;