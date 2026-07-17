import React from 'react';
import './BlogsHeroSection.css';
import { Link } from 'react-router-dom';

const BlogsHeroSection = () => {
  return (
    <section className="blogs-hero-section">
      <div className="blogs-hero-overlay"></div>
      <div className="container blogs-hero-container">
        <div className="blogs-hero-content">
          <h1 className="hero-title">Insights That Drive<br/>Better Decisions</h1>
          <p className="hero-description">
            Explore expert perspectives, regulatory developments, industry trends, and practical guidance designed to help businesses and professionals navigate change with confidence.
          </p>
          <div className="hero-actions">
            <button 
              className="hero-btn" 
              onClick={() => {
                const searchSection = document.querySelector('.blogs-search-section');
                if (searchSection) {
                  const offset = 100;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = searchSection.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Explore Insights &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHeroSection;
