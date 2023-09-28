// src/controllers/resumeController.js
const fs = require('fs');
const path = require('path');
const Resume = require('../../models/apolloModels/Resume');
const { Sequelize } = require('sequelize');


// Retrieve a list of all resumes
async function getAllResumes(searchTerm, offset = 0, limit = 10) {
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

    const totalCount = await Resume.count({
      where: whereClause,
    });

    const resumes = await Resume.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return {resumes, totalCount};
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
  countResumes,
  createResume,
  getResumeById,
  updateResume,
  deleteResume,
};