import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Info */}
          <div className="footer-col-info">
            <Link to="/" className="footer-logo-link">
              <img src="/assets/logo.png" alt="TaxLegal Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Chartered Accountants, Company Secretaries & Advocates,Practicing  Legal and Tax Matters since 1996 from Navi Mumbai.
            </p><p className="footer-desc">Delivering integrated Tax, Legal, Secretarial, Arbitration and Regulatory Advisory services<br /> across India.</p>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/company/taxlegal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/taxlegal.ind?igsh=MXNtZTB4eGI5d3JjeA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

              <a href="https://x.com/taxlegal_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com/@taxlegal-india?si=8Av6nKldGyjmMCfq" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
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
              <li><Link to="/services">Business Formation</Link></li>
              <li><Link to="/services">Business Registration</Link></li>
              <li><Link to="/services">Accounting & Audit</Link></li>
              <li><Link to="/services">Direct Taxation</Link></li>
              <li><Link to="/services">Indirect Taxation / GST</Link></li>
              <li><Link to="/services">Litigation & Appeals</Link></li>
              <li><Link to="/services">Corporate Compliance</Link></li>
              <li><Link to="/services">Payroll Compliance</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col-links">
            <h5 className="footer-col-title">QUICK LINKS</h5>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About The Firm</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">Our Team</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/internship">Internship</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><a href="https://www.incometaxindia.gov.in/income-tax-calculator" target="_blank" rel="noopener noreferrer">Tax Calculator</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="footer-col-reach">
            <h5 className="footer-col-title">REACH US</h5>
            <div className="reach-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="reach-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="reach-text">
                401-406 Prabhat Centre Annex,<br />Sector 1A , CBD-Belapur ,<br />Navi Mumbai 400614
              </span>
            </div>
            <div className="reach-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="reach-icon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div className="reach-phones">
                <a href="tel:+919819705068" className="reach-text">+91-9819705068</a>
                <span className="phone-separator">/</span>
                <a href="tel:+919982003040" className="reach-text">+91-9869005068</a>
              </div>
            </div>
            <div className="reach-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="reach-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@taxlegal.in" className="reach-text">info@taxlegal.in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span className="footer-copyright">&copy; 2026 TaxLegal. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              sessionStorage.removeItem('taxlegal_disclaimer_agreed');
              window.location.reload();
            }}>Disclaimer</a>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
