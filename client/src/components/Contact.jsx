import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending form data to your Node.js/Express backend
      const response = await fetch('/api/contact', { // The "proxy" handles the full URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Use JSON for Express backend
        },
        body: JSON.stringify(formData), // Convert formData object to a JSON string
      });

      const data = await response.json(); // Get the JSON response from the server

      alert(data.message); // Display the success or error message from the server

      if (data.success) {
        setFormData({ name: '', email: '', message: '' }); // Clear the form on success
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please check your connection and try again.');
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
      </div>
    </section>
  );
};

export default Contact;