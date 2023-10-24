// src/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const careerController = require('../../controllers/apolloControllers/careerController');
const upload = require('../../files/iconConfig');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.redirect('/login'); 
};

// Retrieve a list of all careers with pagination and search
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const careers = await careerController.getAllCareers(search, offset, effectiveItemsPerPage);
    const totalCareers= await careerController.countCareers(search);
    const totalPages = Math.ceil(totalCareers / effectiveItemsPerPage);

    res.json({ careers, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new career
router.post('/create', isAuthenticated, upload.single('fileInput'), async (req, res) => {
  try {
    const careerData = req.body;
    if (req.file) {
      careerData.iconPath = (req.file.path);
    }

    const createdCareer = await careerController.createCareer(careerData);
    res.status(201).json(createdCareer);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create career' });
  }
});

// Retrieve a career by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await careerController.getCareerById(id);
    if (!resume) {
      return res.status(404).json({ error: 'Career not found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve career' });
  }
});

// Update a resume by id
router.put('/update/:id', isAuthenticated,  upload.single('fileInput'), async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    if (req.file) {
      newData.iconPath = (req.file.path);
    }
    const updatedRows = await careerController.updateCareer(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update career' });
  }
});

// Delete a career by id
router.delete('/delete/:id', isAuthenticated,  async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await careerController.deleteCareer(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Career not found' });
    }
    res.json({ message: 'Career deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete career' });
  }
});

module.exports = router;