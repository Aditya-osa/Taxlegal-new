import React from 'react';
import './Footer.css';

const Footer = ({ hideContactSection = false }) => {
  return (
    <footer className="site-footer">
      {!hideContactSection && (
        <div className="footer-contact-section">
        <div className="footer-container">
          <div className="contact-info-column">
            <p className="section-subtitle">GET IN TOUCH</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-desc">
              Feel free to contact us any time. We will get back to you as soon as we can!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>123 Business Avenue, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@taxlegal.com<br/>support@taxlegal.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-column">
            <div className="form-card">
              <h3>Send Us A Message</h3>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+1 234 567 8900" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Needed *</label>
                    <select required>
                      <option value="" disabled selected>Select a Service</option>
                      <option value="tax">Tax Optimization</option>
                      <option value="legal">Legal Advisory</option>
                      <option value="compliance">Compliance Management</option>
                      <option value="audit">Audit & Assurance</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn-primary-full">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
      
      <div className="footer-bottom-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2 className="footer-logo">Tax<span>legal</span></h2>
              <p>We are a top tax and legal firm specializing in corporate compliance, audit, and strategic financial planning globally.</p>
              <div className="social-links">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Tax Planning</a></li>
                <li><a href="#">Legal Services</a></li>
                <li><a href="#">Audit & Assurance</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Taxlegal. All Rights Reserved.</p>
            <div className="copyright-links">
              <a href="#">Terms & Conditions</a>
              <span className="dot"></span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
