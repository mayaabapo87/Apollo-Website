const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Story = sequelize.define('Story', {
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
 
 });

module.exports = Story;