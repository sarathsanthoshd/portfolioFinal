import express from 'express';
import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js'; // Import the new email utility

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  try {
    // Save the message to the database
    const newContactMessage = new Contact({
      name,
      email,
      message,
    });
    await newContactMessage.save();

    // --- NODEMAILER INTEGRATION ---
    // After saving, send an email notification
    try {
      const emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from your portfolio website.</p>
        <h2>Message Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
      `;

      await sendEmail({
        subject: `New Portfolio Message from ${name}`,
        html: emailHtml,
      });
    } catch (emailError) {
      // Log the email error but don't block the user response
      console.error('Email failed to send:', emailError);
    }
    // --- END NODEMAILER INTEGRATION ---

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

export default router;