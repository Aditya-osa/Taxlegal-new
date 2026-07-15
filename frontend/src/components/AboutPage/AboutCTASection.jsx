import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutCTASection.css';

const AboutCTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <h2 className="about-cta-title">Ready to discuss your requirements?</h2>
        <p className="about-cta-desc">
          Our team is available to assist with taxation, compliance, audit, corporate, and legal matters.
        </p>
        <button className="btn-primary" onClick={handleContactClick}>
          Connect With Our Team
        </button>
      </div>
    </section>
  );
};

export default AboutCTASection;
