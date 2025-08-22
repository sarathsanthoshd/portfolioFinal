// server.js

// Import required packages
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from a .env file

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
// Enable CORS (Cross-Origin Resource Sharing) to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Change to your frontend URL if needed
  credentials: true,
})); 
// Parse incoming JSON requests
app.use(express.json()); 

// Check required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
  console.error('Missing required environment variables: EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL');
  process.exit(1);
}

// --- API Endpoint for the Contact Form ---
app.post('/api/contact', (req, res) => {
  // Destructure the form data from the request body
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // --- Nodemailer Transporter Setup ---
  // This is the service that will send the email.
  // We are using Gmail as an example.
  // IMPORTANT: For Gmail, you must use an "App Password" if you have 2-Factor Authentication enabled.
  // Do not use your regular password.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env file
      pass: process.env.EMAIL_PASS, // Your email app password from .env file
    },
  });

  // --- Mail Options ---
  // This defines the content of the email.
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email
    to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive messages
    subject: `New Contact Form Message from ${name}`,
    text: `You have received a new message from your website contact form.
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}`,
  };

  // --- Send the Email ---
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      // Send a failure response back to the frontend
      return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
    console.log('Email sent: ' + info.response);
    // Send a success response back to the frontend
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
