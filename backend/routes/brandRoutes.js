const express = require('express');
const { getBrands } = require('../controllers/brandController');

const router = express.Router();

// Define routes for Brands
router.get('/brands', getBrands);

module.exports = router;
