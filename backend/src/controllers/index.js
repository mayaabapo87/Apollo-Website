// src/controllers/index.js
const resumeController = require('./apolloControllers/resumeController');
const careerController = require('./apolloControllers/careerController');
const storyController = require('./apolloControllers/storyController');
const partnerController = require('./apolloControllers/partnerController');
const servicesController = require('./apolloControllers/servicesController');
const projectController = require('./apolloControllers/projectController');

module.exports = {
  resumeController,
  careerController,
  storyController,
  partnerController,
  servicesController,
  projectController,
};
