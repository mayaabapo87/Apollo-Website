// src/routes/index.js
const express = require('express');
const router = express.Router();

const resumeRoutes = require('./apolloRoutes/resumeRoute');
const careerRoutes = require('./apolloRoutes/careerRoute');
const storyRoutes = require('./apolloRoutes/storyRoute');
const partnerRoutes = require('./apolloRoutes/partnerRoute');
const serviceRoutes = require('./apolloRoutes/serviceRoute');
const projectRoutes = require('./apolloRoutes/projectRoute');
const userRoutes = require('./apolloRoutes/userRoute');

router.use('/resume', resumeRoutes);
router.use('/career', careerRoutes);
router.use('/story', storyRoutes);
router.use('/partner', partnerRoutes);
router.use('/service', serviceRoutes);
router.use('/project', projectRoutes);
router.use('/user', userRoutes);

module.exports = router;