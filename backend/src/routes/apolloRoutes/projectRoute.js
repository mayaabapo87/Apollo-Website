//src/routes/partnerRoute.js
const express = require('express');
const router = express.Router();
const projectController = require('../../controllers/apolloControllers/projectController');
const upload = require('../../files/iconConfig');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.redirect('/login'); 
};

// Retrieve a list of all partners
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const projects = await projectController.getAllProjects(search, offset, effectiveItemsPerPage);
    const totalProjects= await projectController.countProjects(search);
    const totalPages = Math.ceil(totalProjects / effectiveItemsPerPage);

    res.json({ projects, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new partner
router.post('/create', isAuthenticated, upload.single('fileInput'), async (req, res) => {
  try {
    const projectData = req.body;
    if (req.file) {
      projectData.iconPath = (req.file.path);
    }

    const createdProject = await projectController.createProject(projectData);
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create partner' });
  }
});

// Retrieve a partner by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectController.getProjectById(id);
    if (!project) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve partner' });
  }
});

// Update a partner by id
router.put('/update/:id', isAuthenticated, upload.single('fileInput'), async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    if (req.file) {
      newData.iconPath = (req.file.path);
    }
    const updatedRows = await projectController.updateProject(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json({ message: 'Partner updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update partner' });
  }
});

// Delete a partner by id
router.delete('/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await projectController.deleteProject(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete partner' });
  }
});

module.exports = router;