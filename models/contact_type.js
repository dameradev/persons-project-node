const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const ContactType = sequelize.define('contactType', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  validation_regexp: Sequelize.STRING
});

module.exports = ContactType;