// serviceController.js
const fs = require('fs');
const path = require('path');
const Service = require('../../models/apolloModels/Service');
const { Sequelize } = require('sequelize');

// Retrieve a list of all services
async function getAllServices(searchTerm, offset = 0, limit = 10) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const totalCount = await Service.count({
      where: whereClause,
    });

    const services = await Service.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return { services, totalCount };
  } catch (error) {
    throw error;
  }
}

// Function to count services matching the search term efficiently
async function countServices(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Service.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}

// Create a new service record
async function createService(data) {
  try {
    const createService = await Service.create(data);
    return createService;
  } catch (error) {
    throw error;
  }
}

// Retrieve a service by id
async function getServiceById(id) {
  try {
    const service = await Service.findOne({
      where: { id },
    });
    return service;
  } catch (error) {
    throw error;
  }
}

// Update a service by id
async function updateService(id, newData) {
  try {
    if (newData.iconPath) {
      const service = await Service.findOne({
        where: { id },
      });

      if (service) {
        const servicePath = service.iconPath;
        if (fs.existsSync(servicePath)) {
          fs.unlinkSync(servicePath);
        }
      }
    }

    const [updatedRows] = await Service.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a service by id
async function deleteService(id) {
  try {
    const service = await Service.findOne({
      where: { id },
    });

    if (service) {
      const servicePath = service.iconPath;
      if (fs.existsSync(servicePath)) {
        fs.unlinkSync(servicePath);
      }
    }

    const deletedRows = await Service.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllServices,
  countServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
};
