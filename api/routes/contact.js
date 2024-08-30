// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST route to submit contact form data
router.post('/submit', contactController.submitContactForm);

module.exports = router;
