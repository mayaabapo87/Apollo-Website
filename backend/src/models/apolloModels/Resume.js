// src/models/resume.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Resume = sequelize.define('Resume', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: DataTypes.STRING,
  position: DataTypes.STRING,
  resumePath: DataTypes.TEXT,
});

module.exports = Resume;