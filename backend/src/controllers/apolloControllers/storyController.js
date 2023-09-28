// src/controllers/storyController.js
const fs = require('fs');
const path = require('path');
const Story = require('../../models/apolloModels/Story');
const { Sequelize } = require('sequelize');


// Retrieve a list of all stories
async function getAllStories(searchTerm, offset = 0, limit = 10) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const totalCount = await Story.count({
      where: whereClause,
    });

    const stories = await Story.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return {stories, totalCount};
  } catch (error) {
    throw error;
  }
}

// Function to count careers matching the search term efficiently
async function countStories(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Story.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}


// Create a new story record
async function createStory(data) {
  try {
    const createdStory = await Story.create(data);
    return createdStory;
  } catch (error) {
    throw error;
  }
}

// Retrieve a story by id
async function getStoryById(id) {
  try {
    const story = await Story.findOne({
      where: { id },
    });
    return story;
  } catch (error) {
    throw error;
  }
}

// Update a story by id
async function updateStory(id, newData) {
  try {

    if (newData.iconPath){
      const story = await Story.findOne({
        where: { id },
      });
  
      if (story) {
        
      }
    }

 
    const [updatedRows] = await Story.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a story by id
async function deleteStory(id) {
  try {
    const story = await Story.findOne({
      where: { id },
    });

    if (story) {
       
    }

    const deletedRows = await Story.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllStories,
  countStories,
  createStory,
  getStoryById,
  updateStory,
  deleteStory,
};