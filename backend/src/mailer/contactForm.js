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