// userRoutes.js

const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('e:/Internship/backend/controllers/userController');
const { authenticateToken } = require('e:/Internship/backend/middleware/authMiddleware');

// Get all users (protected route)
router.get('/', authenticateToken, getAllUsers);

// Get user by ID (protected route)
router.get('/:id', authenticateToken, getUserById);

// Update user by ID (protected route)
router.put('/:id', authenticateToken, updateUserById);

// Delete user by ID (protected route)
router.delete('/:id', authenticateToken, deleteUserById);

module.exports = router;
