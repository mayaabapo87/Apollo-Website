// src/controllers/resumeController.js
const fs = require('fs');
const path = require('path');
const Resume = require('../../models/apolloModels/Resume');
const { Sequelize } = require('sequelize');

// Function to fetch distinct positions
async function getDistinctPositions() {
  try {
    // Fetch distinct positions from the Resume model
    const distinctPositions = await Resume.findAll({
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('position')), 'position']],
    });

    // Extract the distinct positions and create an array
    const positionsArray = distinctPositions.map((position) => position.position);

    return positionsArray;
  } catch (error) {
    throw error;
  }
}

// Retrieve a list of all resumes
async function getAllResumes(searchTerm, offset = 0, limit = 10, filter) {
  try {
    let whereClause = {};

    if (searchTerm && filter) {
      whereClause = {
        [Sequelize.Op.and]: [
          {
            [Sequelize.Op.or]: [
              { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
              { email: { [Sequelize.Op.like]: `%${searchTerm}%` } },
              { number: { [Sequelize.Op.like]: `%${searchTerm}%` } },
              { position: { [Sequelize.Op.like]: `%${searchTerm}%` } },
            ],
          },
          { position: { [Sequelize.Op.like]: `%${filter}%` } },
        ],
      };
    } else if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { email: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { number: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { position: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    } else if (filter) {
      whereClause = { position: { [Sequelize.Op.like]: `%${filter}%` } };
    }
    


    const totalCount = await Resume.count({
      where: whereClause,
    });

    const resumes = await Resume.findAll({
      where: whereClause,
      offset,
      limit,
    });

    // Fetch distinct positions using the controller function
    const distinctPositions = await getDistinctPositions();

    return { resumes, totalResumes: totalCount, distinctPositions  };
  } catch (error) {
    throw error;
  }
}

// Function to fetch valid positions and create valid filters
async function getValidFilters() {
  try {
    // Fetch the list of valid positions from the Resume model
    const validPositions = await Resume.findAll({
      attributes: ['position'],
      group: ['position'],
    });

    // Extract the positions and create an array of valid filters
    const validFilters = validPositions.map((position) => position.position);

    return validFilters;
  } catch (error) {
    throw error;
  }
}

// Function to count resumes matching the search term efficiently
async function countResumes(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { email: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { number: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { position: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Resume.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}

// Create a new resume record
async function createResume(data) {
  try {
    const createdResume = await Resume.create(data);
    return createdResume;
  } catch (error) {
    throw error;
  }
}



// Retrieve a resume by id
async function getResumeById(id) {
  try {
    const resume = await Resume.findOne({
      where: { id },
    });
    return resume;
  } catch (error) {
    throw error;
  }
}

// Update a resume by id
async function updateResume(id, newData) {
  try {
    const [updatedRows] = await Resume.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a resume by custom_id
async function deleteResume(id) {
  try {
    const resume = await Resume.findOne({
      where: { id },
    });

    if (resume) {
      const resumePath = resume.resumePath;
      if (fs.existsSync(resumePath)) {
        fs.unlinkSync(resumePath);
      }
    }

    const deletedRows = await Resume.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllResumes,
  getDistinctPositions,
  getValidFilters,
  countResumes,
  createResume,
  getResumeById,
  updateResume,
  deleteResume,
};