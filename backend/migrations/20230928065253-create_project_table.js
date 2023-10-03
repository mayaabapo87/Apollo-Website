'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
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
      detail: {
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
    const dataFilePath = path.join(__dirname, '..', 'data', 'projects-data.json');
    const rawData = fs.readFileSync(dataFilePath);
    const projectsData = JSON.parse(rawData);

    await queryInterface.bulkInsert('Projects', projectsData.map(project => ({
      ...project,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};
