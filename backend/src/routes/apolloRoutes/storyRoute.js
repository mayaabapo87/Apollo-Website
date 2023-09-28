//src/routes/storyRoute.js
const express = require('express');
const router = express.Router();
const storyController = require('../../controllers/apolloControllers/storyController');
const upload = require('../../files/iconConfig');

// Retrieve a list of all stories
router.get('/all', async (req, res) => {
  try {
    const { page = 1, itemsPerPage, search } = req.query;
    const effectiveItemsPerPage = itemsPerPage || 10000;
    const offset = (page - 1) * effectiveItemsPerPage;
    const stories = await storyController.getAllStories(search, offset, effectiveItemsPerPage);
    const totalStories= await storyController.countStories(search);
    const totalPages = Math.ceil(totalStories / effectiveItemsPerPage);

    res.json({ stories, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new story
router.post('/create', upload.single('fileInput'), async (req, res) => {
  try {
    const storyData = req.body;
    if (req.file) {
      storyData.iconPath = (req.file.path);
    }

    const createdStory = await storyController.createStory(storyData);
    res.status(201).json(createdStory);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create story' });
  }
});

// Retrieve a story by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const story = await storyController.getStoryById(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve story' });
  }
});

// Update a story by id
router.put('/update/:id', upload.single('fileInput'), async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    if (req.file) {
      newData.iconPath = (req.file.path);
    }
    const updatedRows = await storyController.updateStory(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json({ message: 'Story updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update story' });
  }
});

// Delete a story by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await storyController.deleteStory(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete story' });
  }
});

module.exports = router;