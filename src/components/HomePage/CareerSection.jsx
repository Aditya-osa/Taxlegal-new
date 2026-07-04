import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerSection.css';

const CareerSection = () => {
  const navigate = useNavigate();
  return (
    <section className="career-section">
      <div className="career-container">
        <div className="career-content-column">
          <p className="career-subtitle">INTERNSHIP PROGRAM</p>
          <h2 className="career-title">Build Professional Experience While You Learn</h2>
          <p className="career-desc">
            Gain practical exposure through a structured internship programme designed to develop technical, analytical and professional skills across tax, accounting, audit, corporate compliance, legal advisory and business support functions.
          </p>

          <div className="internship-badges">
            <div className="intern-badge"><span className="dot"></span>Accounts & Tax</div>
            <div className="intern-badge"><span className="dot"></span>Audit & Compliance</div>
            <div className="intern-badge"><span className="dot"></span>Legal Internship</div>
            <div className="intern-badge"><span className="dot"></span>Social Media</div>
            <div className="intern-badge"><span className="dot"></span>Graphic Design</div>
            <div className="intern-badge"><span className="dot"></span>Video Editing</div>
          </div>

          <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => navigate('/internship')}>Apply for Internship</button>
        </div>

        <div className="career-criteria-column">
          <div className="criteria-card">
            <h3>Program at a Glance</h3>
            <ul className="criteria-list">
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c42a2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Live Project Experience: Work alongside experienced professionals on live client assignments.</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c42a2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Technical Training: Exposure to Tally, GST, TDS, Income Tax Returns and corporate compliance.</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c42a2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Internship Certificate: Awarded upon successful completion of the programme.</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c42a2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Eligibility: B.Com (First to Third Year) and LL.B. (Second to Fifth Year) students.</span>
              </li>
            </ul>
            <div className="criteria-info-box">
              <p><strong>Duration:</strong>Minimum 3 months, with extended internships based on role, availability, performance and business requirements.</p>
              <p><strong>Stipend:</strong>Applicable for internships of 12 months or longer.</p>
            </div>

            <button className="btn-primary-full" onClick={() => navigate('/internship')}>View Full Program Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
