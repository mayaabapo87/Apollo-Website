const nodemailer = require('nodemailer');
const Users = require('../models/apolloModels/Users');

async function sendEmail(req, res) {
  const { name, email, phone, message } = req.body;

  try {
    const user = await Users.findOne();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user.email,
        pass: user.auth_passkey,
      },
    });

    const mailOptions = {
      from: user.email,
      to: user.to_email,
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
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { sendEmail };
