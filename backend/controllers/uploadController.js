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
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Cloudinary upload failed: ' + error.message });
        }
        
        // Optimize the secure URL by inserting f_auto,q_auto
        const optimizedUrl = result.secure_url.replace('/image/upload/', '/image/upload/f_auto,q_auto/');
        
        res.status(201).json({
          url: optimizedUrl,
          id: result.public_id,
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
