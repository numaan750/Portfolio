// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    url: { type: String },
    imageUrl: { type: String },
    imageAlt: { type: String, default: '' },
    tech: { type: [String], default: [] },
    category: { type: String, default: 'General' },
    gradient: { type: String, default: 'from-purple-500 to-pink-500' },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

projectSchema.index({ slug: 1 });

module.exports = mongoose.model('Project', projectSchema);
