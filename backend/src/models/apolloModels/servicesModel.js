const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Service = sequelize.define('services', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
  details: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false, 
});

module.exports = Service;
