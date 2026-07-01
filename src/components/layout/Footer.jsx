import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Info */}
          <div className="footer-col-info">
            <a href="/" className="footer-logo-link">
              <img src="/assets/logo.png" alt="TaxLegal Logo" className="footer-logo-img" />
            </a>
            <p className="footer-desc">
              Advocates, Chartered Accountants & Company Secretaries. Practicing legal and tax matters since 1996 from Navi Mumbai.
            </p>
            <div className="footer-social-icons">
            <a href="https://www.linkedin.com/company/taxlegal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/taxlegal.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/TaxLegal.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a href="https://twitter.com/taxlegal_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col-links">
            <h5 className="footer-col-title">SERVICES</h5>
            <ul className="footer-links-list">
              <li><a href="/#services">Business Formation</a></li>
              <li><a href="/#services">Business Registration</a></li>
              <li><a href="/#services">Accounting & Audit</a></li>
              <li><a href="/#services">Direct Taxation</a></li>
              <li><a href="/#services">Indirect Taxation / GST</a></li>
              <li><a href="/#services">Litigation & Appeals</a></li>
              <li><a href="/#services">Corporate Compliance</a></li>
              <li><a href="/#services">Payroll Compliance</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col-links">
            <h5 className="footer-col-title">QUICK LINKS</h5>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About The Firm</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/#team">Our Team</a></li>
              <li><a href="/#industries">Clients</a></li>
              <li><a href="/internship">Internship</a></li>
              <li><a href="https://www.incometaxindia.gov.in/income-tax-calculator" target="_blank" rel="noopener noreferrer">Tax Calculator</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="footer-col-reach">
            <h5 className="footer-col-title">REACH US</h5>
            <div className="reach-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="reach-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="reach-text">
                401-404, Prabhat Center,<br />CBD Belapur, Navi Mumbai - 400614
              </span>
            </div>
            <div className="reach-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="reach-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+919819705068" className="reach-text">+91-9819705068</a>
            </div>
            <div className="reach-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="reach-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+919982003040" className="reach-text">+91-9982003040</a>
            </div>
            <div className="reach-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="reach-icon">
                <path d="M4 4h16v16H4z" opacity="0" />
                <path d="M22 6 12 13 2 6" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <a href="mailto:info@taxlegal.in" className="reach-text">info@taxlegal.in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span className="footer-copyright">&copy; 2026 TaxLegal. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="/#disclaimer">Disclaimer</a>
            <span className="separator">|</span>
            <a href="/#terms">Terms &amp; Conditions</a>
            <span className="separator">|</span>
            <a href="/#privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-disclaimer-block">
          <p>
            <strong>Disclaimer:</strong> As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise.
            The contents of this website are for informational purposes only and should not be interpreted as soliciting or advertisement.
            The user acknowledges that there has been no solicitation, invitation or inducement of any sort whatsoever from the firm or
            any of its members to create an attorney-client relationship through this website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
