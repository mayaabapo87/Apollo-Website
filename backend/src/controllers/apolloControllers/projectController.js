// src/controllers/partnerController.js
const fs = require('fs');
const path = require('path');
const Project = require('../../models/apolloModels/Project');
const { Sequelize } = require('sequelize');


// Retrieve a list of all partners
async function getAllProjects(searchTerm, offset = 0, limit = 10) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const totalCount = await Project.count({
      where: whereClause,
    });

    const projects = await Project.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return {projects, totalCount};
  } catch (error) {
    throw error;
  }
}

// Function to count careers matching the search term efficiently
async function countProjects(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Project.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}


// Create a new partner record
async function createProject(data) {
  try {
    const createProject = await Project.create(data);
    return createProject;
  } catch (error) {
    throw error;
  }
}

// Retrieve a partner by id
async function getProjectById(id) {
  try {
    const project = await Project.findOne({
      where: { id },
    });
    return project;
  } catch (error) {
    throw error;
  }
}

// Update a partner by id
async function updateProject(id, newData) {
  try {

    if (newData.iconPath){
      const project = await Project.findOne({
        where: { id },
      });
  
      if (project) {
        const projectPath = project.iconPath;
        if (fs.existsSync(projectPath)) {
          fs.unlinkSync(projectPath);
        }
      }
    }

 
    const [updatedRows] = await Project.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a partner by id
async function deleteProject(id) {
  try {
    const project = await Project.findOne({
      where: { id },
    });

    if (project) {
      const projectPath = project.iconPath;
      if (fs.existsSync(projectPath)) {
        fs.unlinkSync(projectPath);
      }
    }

    const deletedRows = await Project.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProjects,
  countProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};