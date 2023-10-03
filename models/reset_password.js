const mongoose = require('mongoose');

// Define the schema for the password reset collection
const passwordResetSchema = new mongoose.Schema({
  // User's email for whom the reset token is generated
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Randomly generated reset token
  token: {
    type: String,
    required: true,
  },
  // Expiration date and time for the reset token
  expiration: {
    type: Date,
    required: true,
  },
});

// Create a model for the password reset collection
const PasswordReset = mongoose.model('PasswordReset', passwordResetSchema);

module.exports = PasswordReset;
