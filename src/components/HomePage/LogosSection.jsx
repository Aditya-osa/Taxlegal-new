import React from 'react';
import './LogosSection.css';

const LogosSection = () => {
  // Array of existing logo file numbers in public/assets/Logoo/
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 19, 20, 22, 23, 24, 25, 26];

  return (
    <section className="logos-section">
      <div className="logos-container">
        <h2 className="logos-title">A Legacy of Trusted Client Relationships</h2>
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
