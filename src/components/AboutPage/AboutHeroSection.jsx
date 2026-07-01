import React from 'react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-container">
        <div className="about-hero-content">
          <p className="hero-badge-simple">ABOUT TAXLEGAL</p>
          <h1 className="hero-title">Multidisciplinary Professional Services Since 1996</h1>
          <p className="hero-description">
            Advocates, Chartered Accountants and Company Secretaries working together<br />
            to deliver integrated professional services to businesses across sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
