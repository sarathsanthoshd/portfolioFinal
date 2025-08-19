import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (options) => {
  // 1. Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or another service
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from .env
      pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env
    },
  });

  // 2. Define the email options
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_USER, // List of receivers (your email)
    subject: options.subject, // Subject line
    html: options.html, // HTML body
  };

  // 3. Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;