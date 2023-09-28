const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Partner = sequelize.define('Partner', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
 
  iconPath: DataTypes.TEXT,
});

module.exports = Partner;