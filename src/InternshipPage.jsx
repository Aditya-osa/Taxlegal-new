import React, { useState } from "react";
import Header from "./Header";
import "./Internship.css";

const InternshipPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyChooseItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Real Business Exposure",
      description: "Work on active files under the guidance of qualified CAs, CSs, and Advocates."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      title: "Professional Mentorship",
      description: "Guidance from experienced professionals who understand the career path and guidelines."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      title: "Certificate of Internship",
      description: "Professional internship completion certificate that adds value to your profile."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Industry-Ready Skills",
      description: "Practical knowledge beyond textbooks, preparing you for immediate employment."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: "Stronger Resume",
      description: "Work on actual client cases, helping you build a portfolio of experience."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          <path d="M2 10h20" />
        </svg>
      ),
      title: "Multiple Domains",
      description: "Experience working across multiple domains: legal, compliance, tax, etc."
    }
  ];

  const domainItems = [
    {
      title: "Accounts & Tax Internship",
      description: "Practical experience in filing returns, preparing tax accounts, and analyzing client transactions. Work closely with Chartered Accountants on direct and indirect tax matters.",
      eligibility: "Pursuing CA (Articleship) / CA Inter / MBA Finance or graduates/post-graduates in commerce.",
      image: "/assets/Internships/Tax.jpg"
    },
    {
      title: "Audit & Compliance Internship",
      description: "Practical exposure in auditing, internal controls, and corporate compliance. Understand statutory requirements and corporate governance under the Companies Act.",
      eligibility: "Pursuing CS (Executive/Professional) / LL.B / CA Inter or commerce graduates.",
      image: "/assets/Internships/Audit.jpg"
    },
    {
      title: "Legal Internship",
      description: "Work with advocates on legal research, drafting, and case summaries. Learn litigation procedures, court filings, and contract review.",
      eligibility: "Pursuing LL.B (3-year or 5-year course) from a recognized university.",
      image: "/assets/Internships/Legal.jpg"

    },
    {
      title: "Social Media Marketing",
      description: "Learn modern digital content strategies to manage legal & tax content. Assist in creating posts, newsletters, and informational materials for professional services.",
      eligibility: "Pursuing BMS / BMM or course in digital marketing and communication.",
      image: "/assets/Internships/Sociaal.jpeg"
    },
    {
      title: "Graphic Design",
      description: "Create visuals, infographics, social media posts, and design layout for newsletters and client advisories, maintaining brand guidelines.",
      eligibility: "Proficiency in design tools like Canva, Photoshop, Illustrator, etc.",
      image: "/assets/Internships/Graphicc.jpeg"

    },
    {
      title: "Video Editing",
      description: "Edit video content for digital channels, including educational short clips and informative legal videos.",
      eligibility: "Familiarity with video editing tools, Premiere Pro, DaVinci, etc.",
      image: "/assets/Internships/Video-editing.jpeg"
    }
  ];

  const faqItems = [
    {
      question: "What is the minimum duration for an internship at TaxLegal?",
      answer: "The minimum duration is 1 to 3 months. Longer durations can be considered based on academic requirements and performance. For CS and CA articleship, standard guidelines of respective institutes are followed."
    },
    {
      question: "Is the internship paid?",
      answer: "Yes, selected candidates receive a monthly stipend based on their qualification, domain, and duration of the internship."
    },
    {
      question: "How do I apply for the internship?",
      answer: "You can apply by clicking on the 'Apply for Internship' button which will direct you to our careers page or application form. Alternatively, you can email your CV to info@taxlegal.in with the subject line 'Internship Application - [Your Domain]'."
    },
    {
      question: "Is the internship on-site or remote?",
      answer: "Our internship is strictly on-site at our Navi Mumbai corporate office. We believe the best learning and mentorship happen through face-to-face discussions and hands-on guidance."
    },
    {
      question: "Will I receive a certificate on completion?",
      answer: "Yes, all interns who successfully complete their internship tenure and tasks will receive an official Certificate of Internship from TaxLegal."
    }
  ];

  return (
    <div className="internship-page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="internship-hero">
        <div className="internship-container">
          <span className="internship-eyebrow text-red">INTERNSHIP PROGRAM</span>
          <h1 className="internship-hero-title">Launch Your Career <br /> Before You Graduate</h1>
          <p className="internship-hero-desc">
            Learn from professionals to start building your career. <br />At TaxLegal, we believe the best professionals
            are shaped through <br />real experience, meaningful mentoring, and practical exposure.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}

      {/* Domains Section */}
      <section className="internship-domains">
        <div className="internship-container">
          <div className="section-header-center">
            <span className="internship-eyebrow text-red">INTERNSHIP DOMAINS</span>
            <h2 className="section-title">Choose the Domain That Matches Your Career Goals.</h2>
          </div>

          <div className="domains-grid">
            {domainItems.map((item, idx) => (
              <div className="domain-card" key={idx}>
                {item.image && (
                  <div className="domain-card-image" style={{ width: '100%', height: '180px', margin: '0 0 15px 0', borderRadius: '12px', overflow: 'hidden' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}

                <div className="domain-card-header" style={{ justifyContent: 'center' }}>
                  <h4 className="domain-card-title">{item.title}</h4>
                </div>
                <p className="domain-card-desc">{item.description}</p>
                <div className="domain-eligibility-panel">
                  <p className="eligibility-text">
                    <strong>Eligibility:</strong> {item.eligibility}
                  </p>
                </div>
                <div className="domain-apply-wrap" style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <a href={`mailto:info@taxlegal.in?subject=Internship Application - ${item.title}`} className="internship-btn-red" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 12px', fontSize: '1rem', borderRadius: '6px' }}>
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="internship-overview">
        <div className="internship-container">
          <div className="overview-container-box">
            <span className="internship-eyebrow text-red-light">PROGRAM OVERVIEW</span>
            <h2 className="overview-title">On-Site, Practical-oriented Learning</h2>


          </div>
        </div>
      </section>

      <section className="internship-why">
        <div className="internship-container">
          <div className="section-header-center">
            <span className="internship-eyebrow text-red">WHY CHOOSE TAXLEGAL INTERNSHIP</span>
            <h2 className="section-title">This Isn't Just Another Internship.</h2>
            <p className="section-subtitle">
              Get the opportunity to learn from professionals who have spent nearly three decades in business,
              taxation, accounting, compliance, and legal sectors.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseItems.map((item, idx) => (
              <div className="why-card" key={idx}>
                <div className="why-icon-wrap">
                  {item.icon}
                </div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="internship-cta">
        <div className="internship-container cta-content-center">
          <h2 style={{ color: 'var(--white)' }}>Build Experience. Build Confidence. Build Your Market Value.</h2>
          <p className="cta-desc">
            Your first professional experience can shape your career. Join the TaxLegal Internship Program and
            get the knowledge, confidence, and practical skills to prepare you for the professional world.
          </p>

        </div>
      </section>

      {/* FAQ Section */}


      {/* Footer */}
      <footer className="internship-footer">
        <div className="internship-container">
          <div className="footer-grid">
            {/* Column 1: Info */}
            <div className="footer-col-info">
              <a href="/" className="footer-logo">
                <span className="t1">Tax<span>.</span>Legal</span>
              </a>
              <p className="footer-desc">
                Advocates, Chartered Accountants & Company Secretaries. Practicing legal and tax matters since 1996 from Navi Mumbai.
              </p>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/TaxLegal.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/taxlegal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://twitter.com/taxlegal_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/taxlegal.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
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
                <li><a href="/#services">Payroll Compliance<
                  /a></li>
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
            <span className="footer-copyright">© 2026 TaxLegal. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="/#disclaimer">Disclaimer</a>
              <span className="separator">|</span>
              <a href="/#terms">Terms & Conditions</a>
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
    </div>
  );
};

export default InternshipPage;
