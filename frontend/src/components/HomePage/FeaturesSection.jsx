import React from 'react';
import './FeaturesSection.css';

const featuresData = [
  {
    id: "01",
    title: "Dedicated Experts",
    description: "Our multidisciplinary team comprises Chartered Accountants, Company Secretaries, and Advocates with decades of collective experience across tax, legal, regulatory, and compliance matters."
  },
  {
    id: "02",
    title: "Client-Centric Approach",
    description: "We prioritize your business needs, offering customized solutions tailored to your specific industry and goals."
  },
  {
    id: "03",
    title: "Pan-India Services",
    description: "Our professionals deliver consistent, high-quality end-to-end solutions tailored to the evolving business and compliance needs of businesses and individuals across India."
  },
  {
    id: "04",
    title: "End-to-End Solutions",
    description: "Integrated accounting, audit, tax, legal, and regulatory solutions under one roof.Delivering seamless support from strategy to execution across every stage of your business journey."
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
