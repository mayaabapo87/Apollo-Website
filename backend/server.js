const express = require("express");
const careerRoutes = require('./src/careers/routes');

const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use(express.json());

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("HI");
})

app.use('/api', careerRoutes);

//test
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Rename the uploaded file (optional)
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route for uploading files
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Check if no file was uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Handle the uploaded file as needed (e.g., save it to a database, process it, etc.)
    // You can access file information like req.file.originalname, req.file.filename, etc.

    // Respond with a success message
    res.send('File uploaded successfully.');
  } catch (error) {
    // Handle any errors that occur during file upload or processing
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error');
  }
});

    //route
//test