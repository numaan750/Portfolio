// controllers/projectController.js
const Project = require('../models/Project');

// Create a new project (admin protected)
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Get all projects (admin protected)
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a single project by slug (admin protected)
exports.getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a project by slug (admin protected)
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Delete a project by slug (admin protected)
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
