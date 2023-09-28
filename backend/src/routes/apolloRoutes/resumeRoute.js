// src/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const resumeController = require('../../controllers/apolloControllers/resumeController');
const upload = require('../../files/fileConfig');


// Retrieve a list of all resumes with pagination and search
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const resumes = await resumeController.getAllResumes(search, offset, effectiveItemsPerPage);
    const totalResumes = await resumeController.countResumes(search);
    const totalPages = Math.ceil(totalResumes / effectiveItemsPerPage);

    res.json({ resumes, totalPages });
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
router.get('/:id', async (req, res) => {
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
router.put('/update/:id', async (req, res) => {
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
router.delete('/delete/:id', async (req, res) => {
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