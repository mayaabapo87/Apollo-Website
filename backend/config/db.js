const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'qwerty12731.',
  database: 'apollo',
  port: 5432,
});

module.exports = sequelize;