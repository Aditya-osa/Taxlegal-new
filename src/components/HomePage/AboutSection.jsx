import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-top-row">
          <div className="about-content-column">
            <div className="subtitle-wrapper">
              <p className="section-eyebrow">ABOUT TAXLEGAL</p>
              <div className="subtitle-line"></div>
            </div>
            <h2 className="section-title">
              Guiding Businesses Through Every Stage of Growth and Compliance.
            </h2>
            <div className="about-description">
              <p>Established in 1996, TaxLegal is a multidisciplinary professional services firm providing integrated solutions across accounting, taxation, audit, corporate compliance, and legal advisory.</p>
              <p>For nearly three decades, we have worked with entrepreneurs, businesses, institutions, housing societies, and charitable organizations, helping them navigate statutory obligations, regulatory requirements, and evolving business challenges with clarity and confidence.</p>
              <p>Every assignment is approached with a strong emphasis on technical competence, professional ethics, confidentiality, and practical problem-solving.</p>
            </div>

          </div>
        </div>

        <div className="about-features-grid">
          <div className="feature-box">
            <div className="feature-box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h4 className="feature-box-title">Three Decades</h4>
            <p className="feature-box-desc">Serving clients since 1996 across tax, regulatory and legal matters.</p>
          </div>

          <div className="feature-box">
            <div className="feature-box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h4 className="feature-box-title">Technical Excellence</h4>
            <p className="feature-box-desc">Combining deep technical knowledge with practical commercial insight.</p>
          </div>

          <div className="feature-box">
            <div className="feature-box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h4 className="feature-box-title">Integrated Advisory</h4>
            <p className="feature-box-desc">Tax, legal and compliance solutions delivered through one integrated practice.</p>
          </div>

          <div className="feature-box">
            <div className="feature-box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4 className="feature-box-title">Quality & Integrity</h4>
            <p className="feature-box-desc">Maintaining the highest standards of professionalism, ethics and confidentiality.</p>
          </div>
        </div>
        <button className="btn-navy" style={{ marginTop: '10px', alignSelf: 'center' }} onClick={() => navigate('/about')}>Read More About Us</button>

      </div>
    </section>
  );
};

export default AboutSection;
