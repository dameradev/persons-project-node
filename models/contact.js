const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Contact = sequelize.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  contact: Sequelize.STRING
});

module.exports = Contact;
