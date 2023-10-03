'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the 'Services' table
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      iconPath: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  
    const dataFilePath = path.join(__dirname, '..', 'data', 'services-data.json');
    const rawData = fs.readFileSync(dataFilePath);
    const servicesData = JSON.parse(rawData);

    await queryInterface.bulkInsert('Services', servicesData.map(service => ({
      ...service,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down(queryInterface, Sequelize) {
    // Drop the 'Services' table
    await queryInterface.dropTable('Services');
  }
};
