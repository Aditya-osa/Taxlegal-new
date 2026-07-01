import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="about-section who-we-are-section">
      <div className="about-container">
        <div className="who-we-are-content">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">WHO WE ARE</p>
            <div className="subtitle-line"></div>
          </div>
          
          <h2 className="section-title">
            Guiding Businesses Through Every Stage of Growth and Compliance.
          </h2>
          
          <div className="who-we-are-text">
            <p>
              Established in 1996, Tax.Legal is a multidisciplinary professional services firm providing integrated solutions across accounting, taxation, audit, corporate compliance, and legal advisory.
            </p>
            <p>
              For nearly three decades, we have worked with entrepreneurs, businesses, institutions, housing societies, and charitable organizations, helping them navigate statutory obligations, regulatory requirements, and evolving business challenges with clarity and confidence.
            </p>
            <p>
              Our practice brings together expertise across company formation, business registrations, accounting, audit, payroll, corporate compliance, direct and indirect taxation, litigation support, regulatory representation, and legal advisory. This integrated approach enables clients to access coordinated professional services through a single point of engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
