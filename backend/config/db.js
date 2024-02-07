// db.js

const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://nikhilranga43:SfNeVcQR4L4f1s6G@cluster0.pdmdpv2.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Listen for MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Export the Mongoose connection
module.exports = mongoose.connection;
