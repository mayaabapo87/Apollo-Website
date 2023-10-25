// src/controllers/userController.js
const fs = require('fs');
const path = require('path');
const Users = require('../../models/apolloModels/Users');
const { Sequelize } = require('sequelize');

// Retrieve a user
async function getUser() {
  try {
    const user = await Users.findOne();

    return user;
  } catch (error) {
    throw error;
  }
}

// Update a user
async function updateUser(id, newData) {
  try {
    const [updatedRows] = await Users.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  updateUser,
};