const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, default: 'Client', trim: true },
    company: { type: String, default: '', trim: true },
    content: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    image: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);