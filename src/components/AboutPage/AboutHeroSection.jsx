import React from 'react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-overlay"></div>
      <div className="about-hero-container">
        <div className="about-hero-content">
          <p className="hero-badge-simple">ABOUT TAXLEGAL</p>
          <h1 className="hero-title">Multidisciplinary Professional <br /> Services Since 1995</h1>
          <p className="hero-description">
            Bringing together Chartered Accountants, Company Secretaries and Advocates <br />to deliver integrated tax, regulatory and legal solutions with a commercial perspective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
