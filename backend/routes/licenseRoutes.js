// licenseRoutes.js

const express = require('express');
const router = express.Router();
const { createLicense, getLicenseByUserId, updateLicenseByUserId, deleteLicenseByUserId } = require('../controllers/licenseController');
const { authenticateToken } = require('e:/Internship/backend/middleware/authMiddleware');

// Create a new license (protected route)
router.post('/', authenticateToken, createLicense);

// Get license by user ID (protected route)
router.get('/:userId', authenticateToken, getLicenseByUserId);

// Update license by user ID (protected route)
router.put('/:userId', authenticateToken, updateLicenseByUserId);

// Delete license by user ID (protected route)
router.delete('/:userId', authenticateToken, deleteLicenseByUserId);

module.exports = router;
