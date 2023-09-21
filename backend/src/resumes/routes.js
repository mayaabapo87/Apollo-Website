const { Router } = require('express');
const controller = require('./controller');
const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/resumes/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get('/resumes', controller.getResumes);
router.get('/resumes/:id', controller.getResumeById);
router.post('/resumes', upload.single('file'), controller.addResume);
router.delete('/resumes/:id', controller.removeResume);

module.exports = router;