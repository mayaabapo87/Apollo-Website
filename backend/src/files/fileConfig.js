const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/files/resumes/');
  },
  filename: (req, file, cb) => {
    const { name } = req.body;
    const extname = path.extname(file.originalname);
    const uuid = uuidv4();
    const uniqueFileName = `${name}-${uuid}${extname}`; 
    cb(null, uniqueFileName);
  },
});

const resumeUpload = multer({ storage: resumeStorage });

module.exports = resumeUpload;
