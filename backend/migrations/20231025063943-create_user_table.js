'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
       allowNull: false,
       type: Sequelize.DATE,
     },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE,
     },
     deletedAt: {
       type: Sequelize.DATE,
     },
     username: {
       type: Sequelize.STRING,
       allowNull: false
     },
     email: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     to_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    auth_passkey: {
      type: Sequelize.STRING,
      allowNull: false,
    },
     password: {
       type: Sequelize.STRING,
       allowNull: false
     },
    });

    const uuid = uuidv4();
    const salt = await bcrypt.genSalt(10);
    let pass = await bcrypt.hash("apolloadmin123", salt);
 
    const data = [
      {
        "id": uuid,
        "username": "apollo_admin",
        "password": pass,
        "auth_passkey": "afzr rydg fcdx qxzn",
        "email": "apollowebsiteojt@gmail.com",
        "to_email": "apollowebsiteojt@gmail.com",
      }
    ]
    
    await queryInterface.bulkInsert('Users', data.map(userData => ({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};