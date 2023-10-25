// src/routes/userRoute.js.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/apolloControllers/userController');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); 
  }
  res.redirect('/login'); 
};

// Retrieve user
router.get('/getData', isAuthenticated, async (req, res) => {
  try {
    const user = await userController.getUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve user' });
  }
});

// Update a user by id
router.put('/update/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
  
    const updatedRows = await userController.updateUser(id, newData);
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update user' });
  }
});

module.exports = router;