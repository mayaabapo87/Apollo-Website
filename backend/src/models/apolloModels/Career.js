const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Career = sequelize.define('Career', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: DataTypes.TEXT,
  qualifications: DataTypes.TEXT,
  iconPath: DataTypes.TEXT,
});

module.exports = Career;