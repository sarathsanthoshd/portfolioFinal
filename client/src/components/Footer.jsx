import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Dokala Sarath Santhosh</h3>
        <p>Thank you for visiting my portfolio!</p>
        <div className="social-icons">
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/in/sarath-santhosh-dokala-200a722b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          
          {/* GitHub Icon */}
          <a href="https://github.com/sarathsanthoshd" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com/_.qvickkyy.__?igsh=cnpqbzZ2Nno0bGs2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Dokala Sarath Santhosh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
