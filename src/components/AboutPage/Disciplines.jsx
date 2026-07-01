import React from 'react';
import './Disciplines.css';

const Disciplines = () => {
  return (
    <section className="disciplines-section tl-section">
      <div className="about-container">
        <div className="disciplines-header">
          <div className="subtitle-wrapper" style={{ justifyContent: 'center' }}>
            <p className="section-eyebrow">OUR DISCIPLINES</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Three Professional Disciplines. One Integrated Practice.
          </h2>
        </div>

        <div className="disciplines-grid">
          
          <div className="discipline-card service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>Chartered Accountants (CA)</h3>
            <p>
              Handling accounting, audit, financial reporting, taxation, GST, payroll, and financial compliance.
            </p>
          </div>

          <div className="discipline-card service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Company Secretaries (CS)</h3>
            <p>
              Managing company law compliance, ROC filings, governance, statutory records, and secretarial matters.
            </p>
          </div>

          <div className="discipline-card service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Advocates</h3>
            <p>
              Representing clients in taxation, litigation, legal advisory, dispute resolution, and regulatory matters.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Disciplines;
