import React, { useState } from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import InternshipReview from '../../components/Internship/InternshipReview';
import "./Internship.css";
import LogosSection from '../../components/HomePage/LogosSection';
import WhyChooseUsSection from '../../components/AboutPage/WhyChooseUsSection';

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
      image: "/assets/Internships/Legal.jpeg"

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

  const isEdge = typeof window !== "undefined" && /Edg\//i.test(navigator.userAgent);

  return (
    <div className={`internship-page-wrapper ${isEdge ? "is-edge" : ""}`}>
      <Header />
      <main className="internship-main-content">

      {/* Hero Section */}
      <section className="internship-hero">
        <div className="container internship-container">
          <span className="tl-hero-badge-pill">INTERNSHIP PROGRAM</span>
          <h1 className="internship-hero-title">Launch Your Career <br /> Before You Graduate</h1>
          <p className="internship-hero-desc">
            Learn from professionals to start building your career. <br />At TaxLegal, we believe the best professionals
            are shaped through <br />real experience, meaningful mentoring, and practical exposure.
          </p>
        </div>
      </section>

      <LogosSection />

      {/* Domains Section */}
      <section className="internship-domains">
        <div className="container internship-container">
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
                  <a href="https://taxlegal.bitrix24.site/" target="_blank" rel="noopener noreferrer" className="internship-btn-red" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 12px', fontSize: '1rem', borderRadius: '6px' }}>
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
        <div className="container internship-container">
          <span className="internship-eyebrow text-red-light">PROGRAM OVERVIEW</span>
          <h2 className="overview-title" style={{ marginBottom: 0 }}>On-Site, Practical-oriented Learning</h2>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="internship-why">
        <div className="container internship-container">
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

      {/* Reviews Section */}
      <InternshipReview />

      {/* CTA Section */}
      <WhyChooseUsSection />

      {/* FAQ Section */}

      </main>
      <Footer />
    </div>
  );
};

export default InternshipPage;
