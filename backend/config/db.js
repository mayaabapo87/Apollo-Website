const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'dey123',
  database: 'apollo',
  port: 5432,
});

module.exports = sequelize;
