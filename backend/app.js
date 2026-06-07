// app.js - Main entry point for backend
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.set('trust proxy', 1);
// const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many login attempts, please try again later.',
});
app.use('/auth', authLimiter);

// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'Image must be smaller than 5 MB.' });
  }
  if (err.message?.includes('images are allowed')) {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'Server error' });
});

// Start server after DB connection
// connectDB().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

app.get("/", (req, res) => {
  res.send("Soulmate Backend is running");
});

module.exports = app;