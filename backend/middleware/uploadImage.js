const multer = require('multer');

const allowedTypes = {
  'image/jpeg': true,
  'image/png': true,
  'image/webp': true,
  'image/gif': true,
  'image/avif': true,
};

module.exports = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    if (!allowedTypes[file.mimetype]) {
      return callback(new Error('Only JPG, PNG, WebP, GIF and AVIF images are allowed.'));
    }
    callback(null, true);
  },
});
