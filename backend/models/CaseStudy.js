// models/CaseStudy.js - Mongoose schema for case studies
const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  // Add any additional fields you need, e.g., images, tags, etc.
}, { timestamps: true });

// Index slug for fast lookup
caseStudySchema.index({ slug: 1 });

module.exports = mongoose.model('CaseStudy', caseStudySchema);
