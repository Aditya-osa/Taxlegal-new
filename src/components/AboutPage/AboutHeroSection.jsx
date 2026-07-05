import React from 'react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-overlay"></div>
      <div className="container about-hero-container">
        <div className="about-hero-content">
          <p className="tl-hero-badge-pill">ABOUT TAXLEGAL</p>
          <h1 className="hero-title">Trusted Advisors.<br/> Practical Solutions.<br/> Lasting Relationships.</h1>
          <p className="hero-description">
            For over three decades, TaxLegal has helped businesses navigate complex tax, legal, regulatory, and compliance matters with clarity, precision, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
