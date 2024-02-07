// License.js

const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

const License = mongoose.model('License', licenseSchema);

module.exports = License;
