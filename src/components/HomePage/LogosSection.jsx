import React from 'react';
import './LogosSection.css';

const LogosSection = () => {
  // Array of 12 items for the logo placeholders
  const logos = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="logos-section">
      <div className="logos-container">
        <h2 className="logos-title">A Legacy of Trusted Client Relationships</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="logo-placeholder">
              <div className="logo-box">Logo {logo}</div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="logo-placeholder">
              <div className="logo-box">Logo {logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
