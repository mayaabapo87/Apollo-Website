// src/controllers/careerController.js
const fs = require('fs');
const path = require('path');
const Career = require('../../models/apolloModels/Career');
const { Sequelize } = require('sequelize');


// Retrieve a list of all careers
async function getAllCareers(searchTerm, offset = 0, limit = 10) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { location: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const totalCount = await Career.count({
      where: whereClause,
    });

    const careers = await Career.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return {careers, totalCount};
  } catch (error) {
    throw error;
  }
}

// Function to count careers matching the search term efficiently
async function countCareers(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { location: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Career.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}

// Create a new career record
async function createCareer(data) {
  try {
    const createdCareer = await Career.create(data);
    return createdCareer;
  } catch (error) {
    throw error;
  }
}

// Retrieve a career by id
async function getCareerById(id) {
  try {
    const career = await Career.findOne({
      where: { id },
    });
    return career;
  } catch (error) {
    throw error;
  }
}

// Update a career by id
async function updateCareer(id, newData) {
  try {

    if (newData.iconPath){
      const career = await Career.findOne({
        where: { id },
      });
  
      if (career) {
        const careerPath = career.iconPath;
        if (fs.existsSync(careerPath)) {
          fs.unlinkSync(careerPath);
        }
      }
    }

 
    const [updatedRows] = await Career.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a career by id
async function deleteCareer(id) {
  try {
    const career = await Career.findOne({
      where: { id },
    });

    if (career) {
      const careerPath = career.iconPath;
      if (fs.existsSync(careerPath)) {
        fs.unlinkSync(careerPath);
      }
    }

    const deletedRows = await Career.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCareers,
  countCareers,
  createCareer,
  getCareerById,
  updateCareer,
  deleteCareer,
};