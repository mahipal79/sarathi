const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs'); // Add this for file system operations

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure nodemailer for email functionality
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: 'kdb314515@hotmail.com',
    pass: 'qwerty123456?',
  },
});

// Endpoint to handle 'Contact Us' form submissions
app.post('/send-email', (req, res) => {
  const { message } = req.body;

  const mailOptions = {
    from: 'kdb314515@hotmail.com',
    to: 'notes.sarathi@gmail.com',
    subject: 'New Message from Contact Form',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send message.');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Message sent successfully!');
  });
});

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint to handle 'Join Us' form submissions
app.post('/join-us', upload.array('notes'), (req, res) => {
  const { name, email, comments } = req.body;
  const files = req.files;

  const mailOptions = {
    from: 'kdb314515@hotmail.com',
    to: 'notes.sarathi@gmail.com',
    subject: 'New Submission from Join Us Form',
    text: `Name: ${name}\nEmail: ${email}\nComments: ${comments}`,
    attachments: files.map((file) => ({
      filename: file.originalname,
      path: file.path,
    })),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send message.');
    }
    console.log('Email sent:', info.response);

    // Clean up uploaded files
    files.forEach((file) => fs.unlinkSync(file.path));

    res.status(200).send('Form submitted successfully!');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
