// scripts/seedAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'alinumaan35@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'uk112233';

const seed = async () => {
  try {
    await connectDB();
    const existing = await User.findOne({ email: ADMIN_EMAIL });
    if (existing) {
      console.log('Admin user already exists');
      process.exit(0);
    }
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    const adminUser = new User({
      email: ADMIN_EMAIL,
      passwordHash,
      role: 'admin',
    });
    await adminUser.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding admin user:', err);
    process.exit(1);
  }
};

seed();
