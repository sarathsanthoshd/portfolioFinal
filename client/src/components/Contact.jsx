// src/Contact.jsx

import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
// Import the new API service function
import { sendContactForm } from "../api/apiService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // New state to handle submission status and feedback
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending...'); // Provide immediate feedback

    try {
      // Use the imported function to send the form data
      const data = await sendContactForm(formData);

      setStatusMessage(data.message); // Display the success message from the server

      if (data.success) {
        setFormData({ name: '', email: '', message: '' }); // Clear the form on success
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display a user-friendly error message
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  useEffect(() => {
    ScrollReveal().reveal('.contact-section', {
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
        {/* Display the status message to the user */}
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
