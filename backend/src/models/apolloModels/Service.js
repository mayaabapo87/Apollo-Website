const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Service = sequelize.define('Services', {
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
 
  iconPath: DataTypes.TEXT,

});

module.exports = Service;
