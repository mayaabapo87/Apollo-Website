//src/routes/partnerRoute.js
const express = require('express');
const router = express.Router();
const partnerController = require('../../controllers/apolloControllers/partnerController');
const upload = require('../../files/iconConfig');

// Retrieve a list of all partners
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const partners = await partnerController.getAllPartners(search, offset, effectiveItemsPerPage);
    const totalPartners= await partnerController.countPartners(search);
    const totalPages = Math.ceil(totalPartners / effectiveItemsPerPage);

    res.json({ partners, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new partner
router.post('/create', upload.single('fileInput'), async (req, res) => {
  try {
    const partnerData = req.body;
    if (req.file) {
      partnerData.iconPath = (req.file.path);
    }

    const createdPartner = await partnerController.createPartner(partnerData);
    res.status(201).json(createdPartner);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create partner' });
  }
});

// Retrieve a partner by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await partnerController.getPartnerById(id);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve partner' });
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
    const updatedRows = await partnerController.updatePartner(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json({ message: 'Partner updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update partner' });
  }
});

// Delete a partner by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await partnerController.deletePartner(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete partner' });
  }
});

module.exports = router;