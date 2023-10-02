//src/routes/partnerRoute.js
const express = require('express');
const router = express.Router();
const serviceController = require('../../controllers/apolloControllers/servicesController');
const upload = require('../../files/iconConfig');

// Retrieve a list of all s
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const services = await serviceController.getAllServices(search, offset, effectiveItemsPerPage);
    const totalServices= await serviceController.countServices(search);
    const totalPages = Math.ceil(totalServices / effectiveItemsPerPage);

    res.json({ services, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new partner
router.post('/create', upload.single('fileInput'), async (req, res) => {
  try {
    const serviceData = req.body;
    if (req.file) {
      serviceData.iconPath = (req.file.path);
    }

    const createdService = await serviceController.createService(serviceData);
    res.status(201).json(createdService);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create service' });
  }
});

// Retrieve a partner by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceController.getServiceById(id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve service' });
  }
});

// Update a partner by id
router.put('/update/:id', upload.single('fileInput'), async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    if (req.file) {
      newData.iconPath = (req.file.path);
    }
    const updatedRows = await serviceController.updateService(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update service' });
  }
});

// Delete a partner by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await serviceController.deleteService(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete services' });
  }
});

module.exports = router;