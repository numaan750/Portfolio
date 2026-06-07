// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Controllers (public read‑only)
const { getAllBlogs, getBlogBySlug } = require('../controllers/blogController');
const { getAllProjects, getProjectBySlug } = require('../controllers/projectController');
const { getAllCaseStudies, getCaseStudyBySlug } = require('../controllers/caseStudyController');
const { getImage } = require('../controllers/uploadController');

router.get('/uploads/:id', getImage);

// Public Blog routes
router.get('/blogs', getAllBlogs);
router.get('/blogs/:slug', getBlogBySlug);

// Public Project routes
router.get('/projects', getAllProjects);
router.get('/projects/:slug', getProjectBySlug);

// Public CaseStudy routes
router.get('/casestudies', getAllCaseStudies);
router.get('/casestudies/:slug', getCaseStudyBySlug);

module.exports = router;
