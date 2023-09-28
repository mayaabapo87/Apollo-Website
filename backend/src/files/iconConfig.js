const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const iconStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/files/icons/');
  },
  filename: (req, file, cb) => {
    const { name } = req.body;
    const extname = path.extname(file.originalname);
    const uuid = uuidv4();
    const uniqueFileName = `${name}-${uuid}${extname}`; 
    cb(null, uniqueFileName);
  },
});

const iconUpload = multer({ storage: iconStorage });

module.exports = iconUpload;
