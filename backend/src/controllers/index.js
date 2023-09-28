// src/controllers/index.js
const resumeController = require('./apolloControllers/resumeController');
const careerController = require('./apolloControllers/careerController');
const storyController = require('./apolloControllers/storyController');
const partnerController = require('./apolloControllers/partnerController');

module.exports = {
  resumeController,
  careerController,
  storyController,
  partnerController,
};
