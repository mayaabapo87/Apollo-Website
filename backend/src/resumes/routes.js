const { Router } = require('express');
const controller = require('./controller');
const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/resumes/uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename the uploaded file (optional)
  },
});

const upload = multer({ storage: storage });

router.get('/resumes', controller.getResumes);
router.get('/resumes/:id', controller.getResumeById);
router.post('/resumes', upload.single('file'), controller.addResume);
router.delete('/resumes/:id', controller.removeResume);

module.exports = router;
