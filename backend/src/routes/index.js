// src/routes/index.js
const express = require('express');
const router = express.Router();

const resumeRoutes = require('./apolloRoutes/resumeRoute');
const careerRoutes = require('./apolloRoutes/careerRoute');
const storyRoutes = require('./apolloRoutes/storyRoute');
const partnerRoutes = require('./apolloRoutes/partnerRoute');

router.use('/resume', resumeRoutes);
router.use('/career', careerRoutes);
router.use('/story', storyRoutes);
router.use('/partner', partnerRoutes);

module.exports = router;