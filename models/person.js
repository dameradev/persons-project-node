const Sequalize = require('sequelize');

const sequalize = require('../helpers/database');

const Person = sequalize.define('person', {
  id: {
    type: Sequalize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nickname: Sequalize.STRING,
  first_name: Sequalize.STRING,
  last_name: Sequalize.STRING,
  birth_day: Sequalize.DATE,
  height: Sequalize.INTEGER,
  gender: Sequalize.ENUM('male', 'female', 'other')
});

module.exports = Person;

