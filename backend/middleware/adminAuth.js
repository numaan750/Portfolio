// middleware/adminAuth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function adminAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '').trim();
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // ensure role is admin
    const user = await User.findById(decoded.id);
    if (!user || user.role !== 'admin') throw new Error('Not admin');
    req.user = user; // attach user to request
    next();
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(401).json({ error: 'Invalid token' });
  }
};
