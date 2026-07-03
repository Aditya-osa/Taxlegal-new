import React from 'react';
import './Disciplines.css';

const Disciplines = () => {
  return (
    <section className="disciplines-section tl-section">
      <div className="about-container">
        <div className="disciplines-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">OUR EXPERT CONSULTANTS</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">
            Three Professional Disciplines. One Integrated Practice.
          </h2>
        </div>

        <div className="disciplines-grid">
          
          <div className="discipline-card service-card">
            <div className="service-icon ca-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" fill="none">
                {/* Letter C */}
                <path d="M 46 22 H 38 C 23 22 13 34 13 50 C 13 66 23 78 38 78 H 46" stroke="#111827" strokeWidth="8" strokeLinecap="round" />
                {/* Letter A */}
                <path d="M 46 78 L 65 20 L 84 78" stroke="#111827" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Outer stripe on right leg of A */}
                <line x1="71" y1="33" x2="89" y2="78" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
                {/* Swooshes / Checkmarks across A with white outline for clean cutout */}
                <path d="M 44 54 L 102 34 L 98 41 L 68 53 L 56 58 Z" fill="#111827" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 50 62 L 106 42 L 102 49 L 72 61 L 60 66 Z" fill="#111827" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
                {/* INDIA text */}
                <text x="56" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="13" letterSpacing="5.5" fill="#111827">INDIA</text>
              </svg>
            </div>
            <h3>Chartered Accountants</h3>
            <p>
              Handling accounting, audit, financial reporting, taxation, GST, payroll, and financial compliance.
            </p>
          </div>

          <div className="discipline-card service-card">
            <div className="service-icon cs-icon">
              <img src="/assets/team/image.png" alt="Company Secretaries (CS)" />
            </div>
            <h3>Company Secretaries</h3>
            <p>
              Managing company law compliance, ROC filings, governance, statutory records, and secretarial matters.
            </p>
          </div>

          <div className="discipline-card service-card">
            <div className="service-icon advocate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                {/* Black circular badge background */}
                <circle cx="50" cy="50" r="44" fill="#111827" />
                {/* Left Half: Collar wing + Left hanging band */}
                <path d="M 48.5 26 L 26 20 L 22 38 L 36 34 L 26 80 L 45 80 L 48.5 34 Z" fill="#FFFFFF" />
                {/* Right Half: Collar wing + Right hanging band */}
                <path d="M 51.5 26 L 74 20 L 78 38 L 64 34 L 74 80 L 55 80 L 51.5 34 Z" fill="#FFFFFF" />
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
