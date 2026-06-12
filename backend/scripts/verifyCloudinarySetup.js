// backend/scripts/verifyCloudinarySetup.js
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log('\n📋 Cloudinary Configuration Verification\n');

const missingVars = [];
const envVars = {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

Object.entries(envVars).forEach(([key, value]) => {
  if (!value) {
    missingVars.push(key);
    console.log(`❌ ${key}: NOT SET`);
  } else {
    console.log(`✅ ${key}: ${value.substring(0, 5)}...${value.substring(value.length - 5)}`);
  }
});

if (missingVars.length > 0) {
  console.log(`\n❌ Missing environment variables: ${missingVars.join(', ')}`);
  console.log('Please set these in your .env file.\n');
  process.exit(1);
}

// Configure Cloudinary
if (process.env.CLOUDINARY_URL) {
  cloudinary.config(true);
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

// Test connection
(async () => {
  try {
    console.log('\n🧪 Testing Cloudinary connection...\n');
    
    const result = await cloudinary.api.resources({ 
      type: 'upload',
      max_results: 1,
      prefix: 'portfolio/'
    });
    
    console.log(`✅ Connection successful!`);
    console.log(`📁 Found ${result.total_count || 0} images in portfolio folder`);
    
    if (result.resources.length > 0) {
      console.log(`\n📸 Sample image:`);
      console.log(`   URL: ${result.resources[0].secure_url}`);
      console.log(`   Size: ${result.resources[0].bytes} bytes`);
      console.log(`   Uploaded: ${result.resources[0].created_at}`);
    }
    
    console.log('\n✅ Cloudinary setup is valid!\n');
  } catch (error) {
    console.log(`❌ Connection failed: ${error.message}\n`);
    process.exit(1);
  }
})();
