import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">LifeCycle.</div>
            <div className="footer-copyright">
              2025 © LifeCycle<br />
              All rights reserved.
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/pricing" className="footer-link">Pricing</Link>
              <Link to="/about" className="footer-link">About us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-column">
              <a href="#" className="footer-link">Facebook</a>
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Linkedin</a>
            </div>
            <div className="footer-column">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms Of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

