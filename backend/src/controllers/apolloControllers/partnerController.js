// src/controllers/partnerController.js
const fs = require('fs');
const path = require('path');
const Partner = require('../../models/apolloModels/Partner');
const { Sequelize } = require('sequelize');


// Retrieve a list of all partners
async function getAllPartners(searchTerm, offset = 0, limit = 10) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const totalCount = await Partner.count({
      where: whereClause,
    });

    const partners = await Partner.findAll({
      where: whereClause,
      offset: offset,
      limit: limit,
    });

    return {partners, totalCount};
  } catch (error) {
    throw error;
  }
}

// Function to count careers matching the search term efficiently
async function countPartners(searchTerm) {
  try {
    let whereClause = {};

    if (searchTerm) {
      whereClause = {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        ],
      };
    }

    const count = await Partner.count({
      where: whereClause,
    });

    return count;
  } catch (error) {
    throw error;
  }
}


// Create a new partner record
async function createPartner(data) {
  try {
    const createPartner = await Partner.create(data);
    return createPartner;
  } catch (error) {
    throw error;
  }
}

// Retrieve a partner by id
async function getPartnerById(id) {
  try {
    const partner = await Partner.findOne({
      where: { id },
    });
    return partner;
  } catch (error) {
    throw error;
  }
}

// Update a partner by id
async function updatePartner(id, newData) {
  try {

    if (newData.iconPath){
      const partner = await Partner.findOne({
        where: { id },
      });
  
      if (partner) {
        const partnerPath = partner.iconPath;
        if (fs.existsSync(partnerPath)) {
          fs.unlinkSync(partnerPath);
        }
      }
    }

 
    const [updatedRows] = await Partner.update(newData, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

// Delete a partner by id
async function deletePartner(id) {
  try {
    const partner = await Partner.findOne({
      where: { id },
    });

    if (partner) {
      const partnerPath = partner.iconPath;
      if (fs.existsSync(partnerPath)) {
        fs.unlinkSync(partnerPath);
      }
    }

    const deletedRows = await Partner.destroy({
      where: { id },
    });

    return deletedRows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPartners,
  countPartners,
  createPartner,
  getPartnerById,
  updatePartner,
  deletePartner,
};