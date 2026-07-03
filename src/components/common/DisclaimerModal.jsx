import React, { useState, useEffect } from 'react';
import './DisclaimerModal.css';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already agreed during this session
    const hasAgreed = sessionStorage.getItem('taxlegal_disclaimer_agreed');
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('taxlegal_disclaimer_agreed', 'true');
    setIsOpen(false);
  };

  const handleExit = () => {
    // Redirect away from the site when user declines
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="disclaimer-modal-overlay">
      <div className="disclaimer-modal-card">
        {/* Banner Section */}
        <div className="disclaimer-banner">
          <div className="disclaimer-logo-box">
            <img
              src="/assets/logo.png"
              alt="TaxLegal Logo"
              className="disclaimer-logo-img"
            />
          </div>
          <p className="disclaimer-banner-sub">
            CHARTERED ACCOUNTANTS, COMPANY SECRETARIES &amp; ADVOCATES
          </p>
        </div>

        {/* Body Section */}
        <div className="disclaimer-body">
          <h3 className="disclaimer-heading">
            Important Disclaimer — Please Read Before Proceeding
          </h3>

          <p className="disclaimer-para">
            As mandated by the Bar Council of India, this website is intended solely for informational purposes and does not constitute solicitation, advertisement, personal communication, or inducement of any kind to engage legal services.
          </p>

          <p className="disclaimer-confirm-text">
            By accessing this website, you acknowledge and confirm that:
          </p>

          <ul className="disclaimer-list">
            <li data-index="1.">You are seeking information about the firm of your own accord.</li>
            <li data-index="2.">No form of solicitation or advertising has been made by the firm or its members.</li>
            <li data-index="3.">Any information provided on this website, including articles, updates, or resources, is general in nature and must not be construed as legal advice.</li>
            <li data-index="4.">No lawyer–client relationship is created merely by accessing or using this website.</li>
            <li data-index="5.">The firm shall not be liable for any actions taken based on the material available on this website.</li>
            <li data-index="6.">You are advised to obtain independent legal advice for any specific legal issue.</li>
          </ul>

          <div className="disclaimer-callout">
            The content on this website is the intellectual property of the firm. Any unauthorized use, reproduction, or distribution of the material is prohibited.
          </div>
        </div>

        {/* Action Footer */}
        <div className="disclaimer-actions">
          <button onClick={handleAgree} className="disclaimer-btn agree-btn">
            I Agree &amp; Enter
          </button>
          <button onClick={handleExit} className="disclaimer-btn exit-btn">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
