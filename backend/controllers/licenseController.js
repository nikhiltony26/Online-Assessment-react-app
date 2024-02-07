// licenseController.js

const License = require('e:/Internship/backend/models/License');

// Create a new license
exports.createLicense = async (req, res) => {
  try {
    const { userId, expirationDate } = req.body;

    // Check if a license already exists for the user
    const existingLicense = await License.findOne({ userId });
    if (existingLicense) {
      return res.status(400).json({ message: 'License already exists for this user' });
    }

    // Create a new license
    const license = new License({
      userId,
      expirationDate,
    });

    // Save the license to the database
    await license.save();

    res.status(201).json({ message: 'License created successfully', license });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get license by user ID
exports.getLicenseByUserId = async (req, res) => {
  try {
    const license = await License.findOne({ userId: req.params.userId });
    if (!license) {
      return res.status(404).json({ message: 'License not found for this user' });
    }
    res.status(200).json(license);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update license by user ID
exports.updateLicenseByUserId = async (req, res) => {
  try {
    const { expirationDate } = req.body;

    // Find the license by user ID and update it
    const updatedLicense = await License.findOneAndUpdate(
      { userId: req.params.userId },
      { expirationDate },
      { new: true }
    );

    if (!updatedLicense) {
      return res.status(404).json({ message: 'License not found for this user' });
    }

    res.status(200).json({ message: 'License updated successfully', updatedLicense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete license by user ID
exports.deleteLicenseByUserId = async (req, res) => {
  try {
    // Find the license by user ID and delete it
    const deletedLicense = await License.findOneAndDelete({ userId: req.params.userId });

    if (!deletedLicense) {
      return res.status(404).json({ message: 'License not found for this user' });
    }

    res.status(200).json({ message: 'License deleted successfully', deletedLicense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
