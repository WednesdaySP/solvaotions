// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      id="scroll-to-top"
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default ScrollToTop;
