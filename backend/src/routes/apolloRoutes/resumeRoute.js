// src/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const resumeController = require('../../controllers/apolloControllers/resumeController');
const upload = require('../../files/fileConfig');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.redirect('/login'); 
};

// Retrieve a list of all resumes with pagination and search
router.get('/all', isAuthenticated, async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search, filter } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;

    // Fetch the list of valid filters using the controller function
    const validFilters = await resumeController.getValidFilters();

    // Check if the filter value is valid
    if (filter && !validFilters.includes(filter)) {
      return res.status(400).json({ message: 'Invalid filter value' });
    }

    const resumesData = await resumeController.getAllResumes(search, offset, effectiveItemsPerPage, filter);
    const totalResumes = await resumeController.countResumes(search);
    const totalPages = Math.ceil(totalResumes / effectiveItemsPerPage);

    // Include the distinct positions array in the JSON response
    const response = {
      resumes: resumesData.resumes,
      totalResumes: resumesData.totalResumes,
      totalPages,
      distinctPositions: resumesData.distinctPositions,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



// Create a new resume
router.post('/create', upload.single('fileInput'), async (req, res) => {
  try {
    const resumeData = req.body;
    if (req.file) {
      resumeData.resumePath = (req.file.path);
    }

    const createdResume = await resumeController.createResume(resumeData);
    res.status(201).json(createdResume);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create resume' });
  }
});

// Retrieve a resume by id
router.get('/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await resumeController.getResumeById(id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve resume' });
  }
});

// Update a resume by custom_id
router.put('/update/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedRows = await resumeController.updateResume(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update resume' });
  }
});

// Delete a resume by custom_id
router.delete('/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await resumeController.deleteResume(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete resume' });
  }
});

module.exports = router;