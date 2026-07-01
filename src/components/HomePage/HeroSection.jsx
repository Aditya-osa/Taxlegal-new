import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-badge">A Professional Practice Built on Excellence</p>
          <h1 className="hero-title">
            Integrated Taxation,<br />
            Compliance & <span className="hero-title-highlight">Legal</span><br />
            Advisory Since 1999
          </h1>
          <p className="hero-description">
            Experience professional solutions from a unified platform covering all business needs under one roof. Providing trusted services globally.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Contact Us Now</button>
            <button className="btn-secondary">Our Services</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>2500+</h3>
              <p>Clients Worldwide</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Expert Consultants</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
