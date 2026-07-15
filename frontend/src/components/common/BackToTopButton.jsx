import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './BackToTopButton.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Lenis will catch this or use native smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="back-to-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} strokeWidth={3} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
