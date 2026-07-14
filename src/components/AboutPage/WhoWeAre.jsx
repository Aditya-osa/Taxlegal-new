import React from 'react';
import VisionMission from './VisionMission';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="about-section who-we-are-section">
      <div className="about-container">
        {/* Full-width header spanning above both columns */}
        <div className="who-we-are-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">WHO WE ARE</p>
            <div className="subtitle-line"></div>
          </div>

          <h2 className="section-title">
            Shaping Solutions Through   <br /> Experience and Integrity
          </h2>
        </div>

        <div className="who-vision-grid">
          {/* Left Column: Who We Are Text */}
          <div className="who-we-are-content">
            <div className="who-we-are-text">
              <p>
                Established in 1996, <strong>TaxLegal</strong> is a professional services firm providing integrated solutions across accounting, taxation, audit, corporate compliance, and legal advisory.
              </p>
              <p>
                For nearly <strong>THREE DECADES</strong>, we have served businesses, entrepreneurs, institutions, co-operative housing societies, charitable organisations, and individuals by addressing complex legal, tax, and regulatory matters with technical expertise, commercial insight, and practical legal understanding.
              </p>
              <p>
                Our professionals combine legal, tax, financial, and regulatory expertise to provide thoughtful, commercially informed guidance. Guided by professional integrity, ethical practice, and confidentiality, we uphold the highest standards of quality, diligence, and professional responsibility in every engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Vision & Mission */}
          <div className="who-we-are-right">
            <VisionMission />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
