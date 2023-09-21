const { Router } = require('express');
const controller = require('./controller');
const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'src/apollo/icons/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);  
    },
  });
  
  const upload = multer({ storage: storage });

router.get('/careers', controller.getCareers);
router.get('/careers/:id', controller.getCareerById);
router.post('/career', upload.single('file'), controller.addCareer);
router.put('/career/:id', upload.single('file'), controller.editCareer);
router.delete('/careers/:id', controller.removeCareer);


router.get('/partners', controller.getPartners);
router.get('/partner/:id', controller.getPartnerById);
router.get('/stories', controller.getStories);
router.get('/story/:id', controller.getStoryById);


module.exports = router;