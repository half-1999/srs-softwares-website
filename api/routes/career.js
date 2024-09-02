// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

// POST route to submit contact form data
router.post('/submit', careerController.submitCareerForm);
router.post('/positions', careerController.currentPositions);

module.exports = router;
