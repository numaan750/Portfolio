const mongoose = require('mongoose');

const getBucket = () =>
  new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'media',
  });

exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Please select an image file.' });

    const bucket = getBucket();
    const uploadStream = bucket.openUploadStream(req.file.originalname, {
      metadata: {
        contentType: req.file.mimetype,
        uploadedBy: req.user?.id || null,
      },
    });

    uploadStream.on('error', next);
    uploadStream.on('finish', () => {
      const baseUrl = `${req.protocol}://${req.get('host')}`;
      res.status(201).json({
        url: `${baseUrl}/api/uploads/${uploadStream.id}`,
        id: uploadStream.id,
      });
    });

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
