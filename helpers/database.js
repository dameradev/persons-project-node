const Sequelize = require('sequelize');

const sequelize = new Sequelize('persons', 'root', '523970Aa', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;