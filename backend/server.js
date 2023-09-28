const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const routes = require('./src/routes');
const { sendEmail } = require('./src/mailer/contactForm');

const app = express();
const port = process.env.PORT || 5000;
const ip = `http://localhost:${port}`;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// -
const cors = require('cors');
const bodyParser = require('body-parser');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// -






// -
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// -



// -
const projectsRoutes = require('./src/routes/apolloRoutes/projects');
const servicesRoutes = require('./src/routes/apolloRoutes/services');

app.use('/', projectsRoutes);
app.use('/', servicesRoutes);

app.get('/manage-services', (req, res) => {
  const notification = req.query.notification;
  res.render('admin-dashboard', { notification });
});
app.get('/manage-projects', (req, res) => {
  const notification = req.query.notification;
  res.render('admin-dashboard', { notification });
  
});
// -

app.use(express.json());

app.get("/resume", async (req, res) => {
  res.render('admin-resumes', { BACKEND_URL: ip });
});

app.get("/career", async (req, res) => {
  res.render('admin-careers', { BACKEND_URL: ip });
});

app.get("/partner", async (req, res) => {
  res.render('admin-partners', { BACKEND_URL: ip });
});

app.get("/story", async (req, res) => {
  res.render('admin-stories', { BACKEND_URL: ip });
});

app.post('/api/send-email', sendEmail);

app.use('/api', routes);
app.use("/files/resumes", express.static(path.join(__dirname, "src/files/resumes")));
app.use("/files/icons", express.static(path.join(__dirname, "src/files/icons")));
app.use("/assets", express.static(path.join(__dirname, "src/files/assets")));



app.listen(port, () => {
  console.log(`Server running at: ${ip}`);
});
