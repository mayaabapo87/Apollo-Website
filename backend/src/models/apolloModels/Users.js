const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Users = sequelize.define('Users', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auth_passkey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Users;