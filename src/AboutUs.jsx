import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <Header />

      <div className="page-view" id="page-about">
        {/* Hero Section */}
        <div className="services-page-hero">
          <div className="services-page-hero-inner">
            <span className="section-eyebrow section-eyebrow--hero">
              About TaxLegal
            </span>

            <h1>Multidisciplinary Professional Services Since 1996</h1>

            <p>
              Advocates, Chartered Accountants and Company Secretaries working
              together to deliver integrated professional services to businesses
              across sectors.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="about-page-content">
          <div className="about-intro">
            <span className="section-eyebrow">Who We Are</span>

            <div className="section-divider"></div>

            <h2 className="section-title">
              Guiding Businesses Through Every Stage of Growth and Compliance.
            </h2>

            <p className="about-text">
              Established in 1996, TaxLegal is a multidisciplinary professional
              services firm providing integrated solutions across accounting,
              taxation, audit, corporate compliance, and legal advisory.
            </p>

            <p className="about-text">
              For nearly three decades, we have worked with entrepreneurs,
              businesses, institutions, housing societies, and charitable
              organizations, helping them navigate statutory obligations,
              regulatory requirements, and evolving business challenges with
              clarity and confidence.
            </p>

            <p className="about-text">
              Our practice brings together expertise across company formation,
              business registrations, accounting, audit, payroll, corporate
              compliance, direct and indirect taxation, litigation support,
              regulatory representation, and legal advisory. This integrated
              approach enables clients to access coordinated professional services
              through a single point of engagement.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="vision-mission-grid">
            <div className="vm-card vision">
              <div className="label">Our Vision</div>

              <blockquote>
                "Professional integrity is not a Promise — it is a Discipline. In
                taxation and compliance, precision and principle go hand in hand."
              </blockquote>
            </div>

            <div className="vm-card mission">
              <div className="label">Our Mission</div>

              <blockquote>
                "Compliance reduces disputes; precision resolves them. In tax
                litigation, facts defend what strategy presents."
              </blockquote>
            </div>
          </div>

          {/* Disciplines */}
          <div className="about-section">
            <span className="section-eyebrow">Our Disciplines</span>

            <div className="section-divider"></div>

            <h3 className="section-title section-title--sm">
              Three Professional Disciplines. One Integrated Practice.
            </h3>

            <div className="disciplines-grid">
              <div className="discipline-card">
                <h4>Chartered Accountants (CA)</h4>

                <p>
                  Handling accounting, financial reporting support, audit
                  assistance, and taxation assignments in accordance with
                  statutory provisions.
                </p>
              </div>

              <div className="discipline-card">
                <h4>Company Secretaries (CS)</h4>

                <p>
                  Undertaking corporate regulatory compliances, statutory filings,
                  and governance-related matters as prescribed under applicable
                  laws.
                </p>
              </div>

              <div className="discipline-card">
                <h4>Advocates</h4>

                <p>
                  Advising and representing clients in taxation and related
                  proceedings before appropriate authorities, subject to
                  professional regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="about-section">
            <p className="about-disclaimer">
              All professional services are rendered in accordance with applicable
              laws and governing professional standards. All engagements are
              undertaken in accordance with applicable laws, ethical standards,
              and the professional regulations governing the respective
              disciplines.
            </p>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="contact-strip">
          <div className="contact-strip-inner">
            <div>
              <h2>Ready to discuss your requirements?</h2>

              <p>
                Our team is available to assist with taxation, compliance, audit,
                corporate, and legal matters.
              </p>
            </div>

            <button
              className="btn-primary btn-primary--nowrap"
              onClick={handleContactClick}
            >
              Connect With Our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
