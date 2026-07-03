import React from 'react';
import './LogosSection.css';

const LogosSection = () => {
  // Array of 26 items for the actual logo files
  const logos = Array.from({ length: 26 }, (_, i) => i + 1);

  return (
    <section className="logos-section">
      <div className="logos-container">
        <h2 className="logos-title" style={{ color: "#F32F37", fontWeight: "bold", fontSize: "24px" }}>A Legacy of Trusted Client Relationships</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="logo-placeholder">
              <img src={`/assets/Logoo/logo${logo}.jpeg`} alt={`Client Logo ${logo}`} className="logo-img" />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="logo-placeholder">
              <img src={`/assets/Logoo/logo${logo}.jpeg`} alt={`Client Logo ${logo}`} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
