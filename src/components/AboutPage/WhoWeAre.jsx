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
            Guiding Businesses Through Growth, Governance and Compliance
          </h2>
          
          <div className="who-we-are-text">
            <p>
              Established in 1996, Tax.Legal is a multidisciplinary professional services firm providing integrated solutions across accounting, taxation, audit, corporate compliance, and legal advisory.
            </p>
            <p>
              For nearly three decades, we have advised businesses, entrepreneurs, institutions, housing societies and charitable organizations on tax, regulatory and legal matters, supporting informed decision-making in an increasingly complex business environment.
            </p>
            <p>
              Our multidisciplinary team combines technical excellence with professional integrity to deliver practical, commercially focused solutions while maintaining the highest standards of quality, ethics and confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
