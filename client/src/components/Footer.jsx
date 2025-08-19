import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Dokala Sarath Santhosh</h3>
        <p>Thank you for visiting my portfolio!</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/sarath-santhosh-dokala-200a722b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* You'll need to link Font Awesome in index.html */}
          </a>
          {/* Add other social media links as needed */}
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Dokala Sarath Santhosh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;