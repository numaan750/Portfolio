// controllers/blogController.js
const Blog = require('../models/Blog');

// Create a new blog (admin)
exports.createBlog = async (req, res) => {
  try {
    const { title, slug, content, author, imageUrl, imageAlt } = req.body;
    const blog = await Blog.create({ title, slug, content, author, imageUrl, imageAlt });
    res.status(201).json(blog);
  } catch (err) {
    console.error('Create blog error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all blogs (public)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    res.json(blogs);
  } catch (err) {
    console.error('Get blogs error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single blog by slug (public)
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).lean();
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    console.error('Get blog error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a blog (admin)
exports.updateBlog = async (req, res) => {
  try {
    const updated = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Blog not found' });
    res.json(updated);
  } catch (err) {
    console.error('Update blog error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a blog (admin)
exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    console.error('Delete blog error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
