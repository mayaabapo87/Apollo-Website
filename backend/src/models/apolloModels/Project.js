const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Project = sequelize.define('Projects', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  detail: DataTypes.TEXT,
  iconPath: DataTypes.TEXT,

});

module.exports = Project;
