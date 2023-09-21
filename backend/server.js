const express = require("express");
const path = require("path");  
const apolloRoutes = require('./src/apollo/routes');
const resumeRoutes = require('./src/resumes/routes');

const dotenv = require("dotenv").config();
console.log(dotenv);

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');  


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
        const itemsPerPage = 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;
        const searchTerm = req.query.search || ''; 

        const queryResult = await pool.query(
            queries.getResumesWithPaginationAndSearch,
            [itemsPerPage, offset, `%${searchTerm}%`]
        );

        const resumes = queryResult.rows;

        const totalResumesQuery = await pool.query(
            queries.getResumesWithSearchCount,
            [`%${searchTerm}%`]
        );

        const totalResumes = totalResumesQuery.rows[0].count;

        const totalPages = Math.ceil(totalResumes / itemsPerPage);

        res.render('resumes', { resumes, currentPage: page, totalPages, search: searchTerm });
    } catch (error) {
        console.error('Error fetching resumes:', error);
        res.status(500).send('Internal Server Error');
    }
});

const queriesCareers = require('./src/apollo/queries')

app.get("/career", async (req, res) => {

    try {

        const itemsPerPage = 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * itemsPerPage;
        const searchTerm = req.query.search || ''; 

        const queryResult = await pool.query(
            queriesCareers.getCareersWithPaginationAndSearch,
            [itemsPerPage, offset, `%${searchTerm}%`]
        );

        const careers = queryResult.rows;

        const totalResumesQuery = await pool.query(
            queriesCareers.getCareersWithSearchCount,
            [`%${searchTerm}%`]
        );

        const totalResumes = totalResumesQuery.rows[0].count;

        const totalPages = Math.ceil(totalResumes / itemsPerPage);

        res.render('career', { careers, currentPage: page, totalPages, search: searchTerm });
    } catch (error) {


    }

});

app.get("/partners", async (req, res) => {
    res.render('partners',);
});

app.get("/stories", async (req, res) => {
    res.render('stories',);
});

app.use('/api', apolloRoutes);
app.use('/api', resumeRoutes);

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'apollowebsiteojt@gmail.com',
      pass: 'afzr rydg fcdx qxzn',
    },
});
  
  app.post('/api/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;
  
    const mailOptions = {
      from: 'apollowebsiteojt@gmail.com',
      to: 'josiahdeysolong@gmail.com',
      subject: 'Test Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  });