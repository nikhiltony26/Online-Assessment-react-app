// examRoutes.js

const express = require('express');
const router = express.Router();
const { getAllExams, getExamById, createExam, updateExamById, deleteExamById } = require('e:/Internship/backend/controllers/examController');
const { authenticateToken } = require('e:/Internship/backend/middleware/authMiddleware');

// Get all exams
router.get('/', getAllExams);

// Get exam by ID
router.get('/:id', getExamById);

// Create a new exam (protected route)
router.post('/', authenticateToken, createExam);

// Update exam by ID (protected route)
router.put('/:id', authenticateToken, updateExamById);

// Delete exam by ID (protected route)
router.delete('/:id', authenticateToken, deleteExamById);

module.exports = router;
