const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

if (process.env.CLOUDINARY_URL) {
  cloudinary.config(true);
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

const getBucket = () =>
  new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'media',
  });

exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Please select an image file.' });

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'portfolio',
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Cloudinary upload failed: ' + error.message });
        }
        
        // Build permanent URL with optimization parameters
        // Using secure_url with f_auto,q_auto for format and quality optimization
        const optimizedUrl = result.secure_url.replace('/image/upload/', '/image/upload/f_auto,q_auto,c_limit,w_2000/');
        
        res.status(201).json({
          url: optimizedUrl,
          publicId: result.public_id,
          secure_url: result.secure_url,
          timestamp: result.created_at,
        });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    next(error);
  }
};


exports.getImage = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ error: 'Image not found.' });
    }

    const bucket = getBucket();
    const id = new mongoose.Types.ObjectId(req.params.id);
    const files = await bucket.find({ _id: id }).limit(1).toArray();
    const file = files[0];

    if (!file) return res.status(404).json({ error: 'Image not found.' });

    res.set({
      'Content-Type': file.metadata?.contentType || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
    });

    bucket.openDownloadStream(id).on('error', () => {
      if (!res.headersSent) res.status(404).json({ error: 'Image not found.' });
      else res.end();
    }).pipe(res);
  } catch (error) {
    console.error('Get uploaded image error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Validate Cloudinary image existence
exports.validateImage = async (req, res) => {
  try {
    const { url, publicId } = req.body;
    
    if (!url && !publicId) {
      return res.status(400).json({ error: 'URL or publicId required' });
    }

    // If publicId provided, check with Cloudinary
    if (publicId) {
      try {
        const result = await cloudinary.api.resource(publicId);
        return res.json({ 
          valid: true, 
          url: result.secure_url,
          message: 'Image found in Cloudinary'
        });
      } catch (err) {
        return res.json({ 
          valid: false, 
          message: 'Image not found in Cloudinary'
        });
      }
    }

    // If URL provided, attempt to fetch it
    if (url) {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return res.json({ 
          valid: response.ok, 
          status: response.status,
          message: response.ok ? 'Image accessible' : 'Image not accessible'
        });
      } catch (err) {
        return res.json({ 
          valid: false, 
          message: 'Image URL not accessible'
        });
      }
    }
  } catch (error) {
    console.error('Image validation error:', error);
    res.status(500).json({ error: 'Validation error' });
  }
};
