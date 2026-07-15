import React from 'react';
import './LogosSection.css';

const LogosSection = () => {
  const logos = [
    "aayansh.jpeg", "bms-manpower.png", "celcius.jpeg", "dhanlaxmi.jpeg", 
    "gupta-sandwich.jpeg", "hcf.jpeg", "jyoti-publicity.png", "mahesh-transport.png", 
    "makwise.png", "mits.jpeg", "new-tech.png", "nitra.png", 
    "pawan-carriers.jpeg", "pmcpl.jpeg", "pn.jpeg", "proxima.png", 
    "raman-electricals.jpeg", "rankkit.png", "realtech.jpeg", "sasarwadi.jpeg", 
    "scientific.png", "srf.jpeg", "unique-enterprises.png", 
    "universal-earthmoving.png", "universal-logistics.jpeg"
  ];

  return (
    <section className="logos-section">
      <div className="logos-container">
        <h2 className="logos-title" style={{ color: "#F32F37", fontWeight: "bold", fontSize: "24px" }}>A Legacy of Trusted Client Relationships</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="logo-placeholder">
              <img src={`/assets/Logoo/${logo}`} alt={`Client Logo ${logo.split('.')[0]}`} className="logo-img" />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="logo-placeholder">
              <img src={`/assets/Logoo/${logo}`} alt={`Client Logo ${logo.split('.')[0]}`} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
