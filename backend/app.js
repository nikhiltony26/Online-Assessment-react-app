const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Import db.js for MongoDB connection

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const examRoutes = require('./routes/examRoutes');
const licenseRoutes = require('./routes/licenseRoutes');

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/exams', examRoutes);
app.use('/licenses', licenseRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/driving_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongoose connected to MongoDB');
    // Start the server after successful connection to MongoDB
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// MongoDB connection error handler
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Export the app for testing
module.exports = app;
