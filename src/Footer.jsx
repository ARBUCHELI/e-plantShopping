import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">🌿</span>
          <span className="footer-name">Paradise Nursery</span>
        </div>
        <p className="footer-text">
          Andres R. Bucheli • IBM Professional Certification 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
