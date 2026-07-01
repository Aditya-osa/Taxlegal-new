import React from 'react';
import './CalculatorCTASection.css';

const CalculatorCTASection = () => {
  return (
    <>
      <section className="calculator-section">
        <div className="calculator-container">
          <div className="calc-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
          </div>
          <div className="calculator-header">
            <div className="subtitle-wrapper">
              <p className="section-eyebrow">TAX CALCULATOR</p>
              <div className="subtitle-line"></div>
            </div>
          </div>
          <h2 className="section-title">Estimate Your Tax Liability</h2>
          <p className="calculator-desc">
            Use the official Income Tax Department calculator to estimate your tax liability<br />
            under current provisions. For personalised tax planning, connect with our<br />
            team.
          </p>
          <button className="btn-navy" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Open Tax Calculator
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </button>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-container">
          <h2 className="cta-text">Ready to discuss your requirements?</h2>

          <button className="btn-primary">Schedule a Call</button>
        </div>
      </section>
    </>
  );
};

export default CalculatorCTASection;
