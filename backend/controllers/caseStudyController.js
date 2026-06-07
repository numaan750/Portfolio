// controllers/caseStudyController.js
const CaseStudy = require('../models/CaseStudy');

// Create a new case study (admin protected)
exports.createCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);
    res.status(201).json(caseStudy);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Get all case studies (admin protected)
exports.getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(caseStudies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get a single case study by slug (admin protected)
exports.getCaseStudyBySlug = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug });
    if (!caseStudy) return res.status(404).json({ error: 'Case study not found' });
    res.json(caseStudy);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a case study by slug (admin protected)
exports.updateCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
    if (!caseStudy) return res.status(404).json({ error: 'Case study not found' });
    res.json(caseStudy);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Delete a case study by slug (admin protected)
exports.deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOneAndDelete({ slug: req.params.slug });
    if (!caseStudy) return res.status(404).json({ error: 'Case study not found' });
    res.json({ message: 'Case study deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
