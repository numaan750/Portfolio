// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, default: 'Admin' },
    imageUrl: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaImage: { type: String, default: '' },
    metaImageAlt: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// index for fast lookup by slug
blogSchema.index({ slug: 1 });

module.exports = mongoose.model('Blog', blogSchema);
