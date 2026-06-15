// scripts/cleanupGridFS.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const cleanupGridFS = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db;

    // Drop GridFS collections
    try {
      await db.collection('media.files').drop();
      console.log('✓ Dropped media.files collection');
    } catch (err) {
      if (err.code !== 26) { // 26 = collection doesn't exist
        throw err;
      }
    }

    try {
      await db.collection('media.chunks').drop();
      console.log('✓ Dropped media.chunks collection');
    } catch (err) {
      if (err.code !== 26) {
        throw err;
      }
    }

    // List remaining collections
    const collections = await db.listCollections().toArray();
    console.log('\nRemaining collections:');
    collections.forEach(col => console.log(`  - ${col.name}`));

    console.log('\n✓ Cleanup complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

cleanupGridFS();
