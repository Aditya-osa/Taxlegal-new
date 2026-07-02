import React from 'react';
import './CareerSection.css';

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        <div className="career-content-column">
          <p className="career-subtitle">INTERNSHIP PROGRAM</p>
          <h2 className="career-title">Build Professional Experience While You Learn</h2>
          <p className="career-italic">Practice. Perform. Prosper.</p>
          <p className="career-desc">
            Gain practical exposure through a structured internship programme designed to develop technical, analytical and professional skills across tax, accounting, audit, corporate compliance, legal advisory and business support functions..
          </p>

          <div className="internship-badges">
            <div className="intern-badge"><span className="dot"></span>Accounts & Tax</div>
            <div className="intern-badge"><span className="dot"></span>Audit & Compliance</div>
            <div className="intern-badge"><span className="dot"></span>Legal Internship</div>
            <div className="intern-badge"><span className="dot"></span>Social Media</div>
            <div className="intern-badge"><span className="dot"></span>Graphic Design</div>
            <div className="intern-badge"><span className="dot"></span>Video Editing</div>
          </div>

          <button className="btn-primary" style={{ marginTop: '20px' }}>Apply for Internship</button>
        </div>

        <div className="career-criteria-column">
          <div className="criteria-card">
            <h3>Program at a Glance</h3>
            <ul className="criteria-list">
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Practical exposure to live business assignments alongside experienced professionals</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Training in Tally, GST compliance, TDS, Income Tax Return preparation</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Certificate of Internship on successful completion</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D32C36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Open to B.Com (1st–3rd Year) and LL.B. (2nd–5th Year) students</span>
              </li>
            </ul>
            <div className="criteria-info-box">
              <p><strong>Duration:</strong> Minimum 3 months. Longer internships may be considered based on role, availability, performance, and firm requirements. Stipend applicable for internships of 12 months or more.</p>
            </div>

            <button className="btn-primary-full">View Full Program Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
