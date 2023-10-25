const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const routes = require('./src/routes');
const { sendEmail } = require('./src/mailer/contactForm');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./src/models/apolloModels/Users');
const session = require('express-session')

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
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// -

app.use(express.json());

const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');

app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();  
  }
  res.redirect('/login');
};

app.get('/api/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/login');
  });
});


app.post('/api/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/resume');
});

app.get("/login", async (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/resume');
  }
  res.render('admin-login', { BACKEND_URL: ip });
});

app.get("/resume", isAuthenticated, async (req, res) => {
  res.render('admin-resumes', { BACKEND_URL: ip });
});

app.get("/career", isAuthenticated, async (req, res) => {
  res.render('admin-careers', { BACKEND_URL: ip });
});

app.get("/partner", isAuthenticated, async (req, res) => {
  res.render('admin-partners', { BACKEND_URL: ip });
});

app.get("/story", isAuthenticated, async (req, res) => {
  res.render('admin-stories', { BACKEND_URL: ip });
});

app.get("/service", isAuthenticated, async (req, res) => {
  res.render('admin-services', { BACKEND_URL: ip });
});
app.get("/project", isAuthenticated, async (req, res) => {
  res.render('admin-projects', { BACKEND_URL: ip });
});
app.get("/settings", isAuthenticated, async (req, res) => {
  res.render('admin-settings', { BACKEND_URL: ip });
});

app.post('/api/send-email', sendEmail);
app.use('/api', routes);
app.use("/files/resumes", isAuthenticated, express.static(path.join(__dirname, "src/files/resumes")));
app.use("/files/icons", express.static(path.join(__dirname, "src/files/icons")));
app.use("/assets", express.static(path.join(__dirname, "src/files/assets")));



app.listen(port, () => {
  console.log(`Server running at: ${ip}`);
});