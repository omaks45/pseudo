const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  classType: {
    type: String,
    required: true,
    enum: ['YOGA', 'CHISEL_IT', 'ACTION_SPORTS', 'THE_RIDE', 'CARDIO_DANCE', 'ADVANCED_HIIT'], // Specify allowed values
  },
  status: {
    type: String,
    required: true,
    enum: ['scheduled', 'completed', 'canceled'], // Specify allowed values
  },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return /^[0-9]{10}$/.test(value); // Matches a 10-digit number
      },
      message: 'Invalid phone number format',
    },
  },
  leve: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
}, {timestamps: true}, {collection: 'class'});

module.exports = mongoose.model('Class', classSchema);
