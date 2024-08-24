const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

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
    user: 'kdb314515@hotmail.com', // Your Hotmail email
    pass: 'qwerty123456?', // Your email password or app password
  },
});

// Endpoint to handle 'Contact Us' form submissions
app.post('/send-email', (req, res) => {
  const { message } = req.body;

  const mailOptions = {
    from: 'kdb314515@hotmail.com', // Sender address
    to: 'notes.sarathi@gmail.com', // Recipient address
    subject: 'New Message from Contact Form',
    text: message, // Email body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log error details
      return res.status(500).send('Failed to send message.');
    }
    console.log('Email sent:', info.response); // Log successful email sending
    res.status(200).send('Message sent successfully!');
  });
});

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be temporarily stored in 'uploads/' folder

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
      console.error('Error sending email:', error); // Log error details
      return res.status(500).send('Failed to send message.');
    }
    console.log('Email sent:', info.response); // Log successful email sending

    // Clean up uploaded files
    files.forEach((file) => fs.unlinkSync(file.path));

    res.status(200).send('Form submitted successfully!');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
