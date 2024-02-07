// Exam.js

const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [{
    type: String,
    required: true,
    trim: true,
  }],
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
