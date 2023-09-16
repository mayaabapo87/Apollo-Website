const express = require("express");
const path = require("path"); // Import the 'path' module
const apolloRoutes = require('./src/apollo/routes');
const resumeRoutes = require('./src/resumes/routes');

const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Specify the directory where your EJS files are located


// Enable CORS for all routes (Temporary)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
// Enable CORS for all routes (Temporary)

app.use(express.json());

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
});


const pool = require('./db');
const queries = require('./src/resumes/queries')

app.use("/pdfs/src/resumes/uploads/", express.static(path.join(__dirname, "src", "resumes", "uploads")));

app.get("/", async (req, res) => {
    try {
        // Query the database to get all resumes
        const queryResult = await pool.query(queries.getResumes);

        // Extract the resume data from the query result
        const resumes = queryResult.rows;

        // Render the EJS template and pass the resumes data
        res.render('home', { resumes });
    } catch (error) {
        console.error('Error fetching resumes:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.use('/api', apolloRoutes);
app.use('/api', resumeRoutes);