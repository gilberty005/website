const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'gilberty020@gmail.com',
    pass: 'puxp mbht deyv yebx',
  },
});

// Handle POST request to send email
app.post('/', (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: formData.email,
    to: 'gilberty005@gmail.com',
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('success');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});