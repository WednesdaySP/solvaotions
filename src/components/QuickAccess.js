import React from 'react';
import './QuickAccess.css';

const QuickAccess = () => {
  return (
    <section className="quick-access">
      <div className="quick-access-container">
        <div className="quick-access-description">
          <h3>Solvaotions</h3>
          <p>We specialize in software, firmware, electronics, and app development, turning ideas into reality.</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://github.com/Solvoations" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/company/solvation-tech/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/solvaotion/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;