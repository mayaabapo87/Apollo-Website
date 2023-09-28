const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const routes = require('./src/routes');
const { sendEmail } = require('./src/mailer/contactForm');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const ip = "http://localhost:5001";
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());

app.get("/resume", async (req, res) => {
  res.render('resumes', { BACKEND_URL: ip });
});

app.get("/career", async (req, res) => {
  res.render('careers', { BACKEND_URL: ip });
});

app.get("/partner", async (req, res) => {
  res.render('partners', { BACKEND_URL: ip });
});

app.get("/story", async (req, res) => {
  res.render('stories', { BACKEND_URL: ip });
});

app.post('/api/send-email', sendEmail);

app.use('/api', routes);
app.use("/files/resumes", express.static(path.join(__dirname, "src/files/resumes")));
app.use("/files/icons", express.static(path.join(__dirname, "src/files/icons")));
app.use("/assets", express.static(path.join(__dirname, "src/files/assets")));


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});