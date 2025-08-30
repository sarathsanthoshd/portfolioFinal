// server.js

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

if (
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS ||
  !process.env.RECIPIENT_EMAIL ||
  !process.env.FRONTEND_URL
) {
  console.error(
    "Missing required environment variables: EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL, FRONTEND_URL"
  );
  process.exit(1);
}

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: `You have received a new message from your website contact form.
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({
          success: false,
          message: "Failed to send message. Please try again later.",
        });
    }
    console.log("Email sent: " + info.response);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
