// examController.js

const Exam = require('e:/Internship/backend/models/Exam');

// Get all exams
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get exam by ID
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new exam
exports.createExam = async (req, res) => {
  try {
    const { title, questions } = req.body;

    // Create a new exam
    const exam = new Exam({
      title,
      questions,
    });

    // Save the exam to the database
    await exam.save();

    res.status(201).json({ message: 'Exam created successfully', exam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update exam by ID
exports.updateExamById = async (req, res) => {
  try {
    const { title, questions } = req.body;

    // Find the exam by ID and update it
    const updatedExam = await Exam.findByIdAndUpdate(
      req.params.id,
      { title, questions },
      { new: true }
    );

    if (!updatedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.status(200).json({ message: 'Exam updated successfully', updatedExam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete exam by ID
exports.deleteExamById = async (req, res) => {
  try {
    // Find the exam by ID and delete it
    const deletedExam = await Exam.findByIdAndDelete(req.params.id);

    if (!deletedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.status(200).json({ message: 'Exam deleted successfully', deletedExam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
