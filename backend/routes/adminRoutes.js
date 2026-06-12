// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const uploadImage = require('../middleware/uploadImage');

// Controllers
const { createBlog, getAllBlogs, getBlogBySlug, updateBlog, deleteBlog } = require('../controllers/blogController');
const { createProject, getAllProjects, getProjectBySlug, updateProject, deleteProject } = require('../controllers/projectController');
const { createCaseStudy, getAllCaseStudies, getCaseStudyBySlug, updateCaseStudy, deleteCaseStudy } = require('../controllers/caseStudyController');
const { uploadImage: saveUploadedImage, validateImage } = require('../controllers/uploadController');

router.post('/uploads/images', adminAuth, uploadImage.single('image'), saveUploadedImage);
router.post('/uploads/validate', adminAuth, validateImage);

// Blog CRUD (admin protected)
router.post('/blogs', adminAuth, createBlog);
router.get('/blogs', adminAuth, getAllBlogs);
router.get('/blogs/:slug', adminAuth, getBlogBySlug);
router.put('/blogs/:slug', adminAuth, updateBlog);
router.delete('/blogs/:slug', adminAuth, deleteBlog);

// Project CRUD (admin protected)
router.post('/projects', adminAuth, createProject);
router.get('/projects', adminAuth, getAllProjects);
router.get('/projects/:slug', adminAuth, getProjectBySlug);
router.put('/projects/:slug', adminAuth, updateProject);
router.delete('/projects/:slug', adminAuth, deleteProject);

// CaseStudy CRUD (admin protected)
router.post('/casestudies', adminAuth, createCaseStudy);
router.get('/casestudies', adminAuth, getAllCaseStudies);
router.get('/casestudies/:slug', adminAuth, getCaseStudyBySlug);
router.put('/casestudies/:slug', adminAuth, updateCaseStudy);
router.delete('/casestudies/:slug', adminAuth, deleteCaseStudy);

module.exports = router;
