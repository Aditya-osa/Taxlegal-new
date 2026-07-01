import React from 'react';
import './WhyTrustUs.css';

const trustData = [
  {
    id: "01",
    title: "25+ Years Experience",
    description: "Decades of proven expertise in resolving complex taxation, compliance, and corporate matters for diverse clients."
  },
  {
    id: "02",
    title: "Integrated Advisory",
    description: "A cohesive team of CAs, CSs, and Advocates providing end-to-end solutions under a single roof."
  },
  {
    id: "03",
    title: "Client-Centric",
    description: "We prioritize your business objectives, offering customized, practical, and highly responsive advisory services."
  },
  {
    id: "04",
    title: "Ethical Standards",
    description: "Uncompromising integrity and transparency in all professional engagements and regulatory representations."
  }
];

const WhyTrustUs = () => {
  return (
    <section className="why-trust-us-section tl-section">
      <div className="about-container">
        
        <div className="features-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">WHY CLIENTS TRUST US</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">A Legacy of Excellence & Trust</h2>
        </div>

        <div className="features-grid">
          {trustData.map((feature) => (
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

export default WhyTrustUs;
