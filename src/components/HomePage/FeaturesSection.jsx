import React from 'react';
import './FeaturesSection.css';

const featuresData = [
  {
    id: "01",
    title: "Dedicated Experts",
    description: "Our team consists of highly qualified professionals with decades of combined experience in legal, tax, and compliance matters."
  },
  {
    id: "02",
    title: "Client-Centric Approach",
    description: "We prioritize your business needs, offering customized solutions tailored to your specific industry and goals."
  },
  {
    id: "03",
    title: "Global Reach",
    description: "With a presence across multiple jurisdictions, we assist businesses in navigating complex international regulations."
  },
  {
    id: "04",
    title: "End-to-End Solutions",
    description: "From company incorporation to ongoing tax filings, we provide a unified platform for all your compliance requirements."
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">WHY CHOOSE US</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">A Professional Practice Built on Excellence</h2>
          <p className="features-subtitle">
            A comprehensive range of services across various business sectors.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-number">{feature.id}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
