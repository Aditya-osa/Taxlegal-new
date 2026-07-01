import React from "react";
import Header from "./Header";
import Footer from "./components/Footer";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Tax Litigation",
    image: "/assets/team/Tax-litigation.png",
    description:
      "Expert representation and advisory services in direct and indirect tax matters, including litigation, arbitration, and regulatory proceedings.",
    tags: [
      "Income Tax",
      "GST",
      "MVAT & Professional Tax",
      "Service Tax",
      "LBT",
      "EOW Matters",
      "Arbitration",
      "Cyber Fraud",
    ],
  },

  {
    id: 2,
    title: "Accounts & Audit Support",
    image: "/assets/team/banner-about.jpg",
    description:
      "Structured accounting and audit support services focused on statutory compliance, financial accuracy, and business efficiency.",
    tags: [
      "Accounts Outsourcing",
      "Computerized Accounting",
      "Statutory Compliance",
      "Tax Compliance",
      "Audit Support",
    ],
  },

  {
    id: 3,
    title: "Startup Company Formation",
    image: "/assets/team/bacck.png",
    description:
      "Comprehensive business setup solutions for startups, entrepreneurs, and growing organizations.",
    tags: [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "LLP Registration",
      "Nidhi Company",
      "Producer Company",
      "Trust Registration",
      "Section 8 Company",
    ],
  },

  {
    id: 4,
    title: "Registration Services",
    image: "/assets/team/Registeration.png",
    description:
      "Fast and hassle-free registration services for businesses, professionals, and organizations.",
    tags: [
      "MSME Registration",
      "TAN Registration",
      "GST Registration",
      "FSSAI Registration",
      "IEC Code",
      "Digital Signature",
      "Udyog Aadhaar",
      "Trade License",
    ],
  },

  {
    id: 5,
    title: "Direct Taxation",
    image: "/assets/team/Direct-tax.png",
    description:
      "End-to-end direct tax advisory and compliance services for individuals, professionals, and corporate entities.",
    tags: [
      "Income Tax",
      "TAN Registration",
      "IT Returns",
      "TDS Returns",
      "Assessment & Audit",
      "Capital Gains",
      "Government Liaisoning",
    ],
  },

  {
    id: 6,
    title: "Indirect Taxation",
    image: "/assets/team/Indirect-tax.png",
    description:
      "Comprehensive GST and indirect tax services to ensure compliance, risk mitigation, and operational efficiency.",
    tags: [
      "GST Registration",
      "GST Returns",
      "GST Payments",
      "Impact Analysis",
      "GST Audit",
      "Assessments",
      "Legal Opinions",
      "Consultancy",
    ],
  },

  {
    id: 7,
    title: "Corporate Compliance",
    image: "/assets/team/Corporate.png",
    description:
      "Corporate secretarial and compliance services to keep businesses aligned with statutory requirements.",
    tags: [
      "Registered Office Change",
      "Add Director",
      "Remove Director",
      "Authorized Capital Increase",
      "Share Transfer",
      "MOA Amendment",
      "Company Winding Up",
      "LLP Winding Up",
    ],
  },

  {
    id: 8,
    title: "Payroll Compliance",
    image: "/assets/team/Payroll.png",
    description:
      "Payroll and employee compliance services covering statutory registrations, filings, and advisory support.",
    tags: [
      "Payroll Advisory",
      "PF Registration",
      "PF Return Filing",
      "ESIC Registration",
      "ESIC Return Filing",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Header />

      {/* ================= BANNER SECTION ================= */}
      <section className="services-banner">
        <div className="banner-content">
          <div className="services-intro-copy">
          <h1>
  Three Decades  <br />Tax 
  and of <span><br /> Practice.</span>
</h1>

            <p>
Matters relating to taxation, regulatory compliance, and legal proceedings. Including advisory, compliance, and representation before appropriate authorities.            </p>
            <div className="services-hero-actions">
              <a href="#services" className="services-btn services-btn--primary">
                Explore All Domains
              </a>
              
            </div>
          </div>
          

          <div className="services-intro-visual">
            <div className="intro-visual-card">
              <img src="/assets/team/Banner1.png" alt="Team advisory experts" />
            </div>
            <div className="intro-visual-meta">
              <strong>30+ Years</strong>
              <span>Trusted Advisory for</span>
              <span>Fortune 500 & Startups</span>
            </div>
          </div>
        </div>
      </section>

  <h1 className="section-heading">Our Services</h1>


      {/* ================= SERVICES GRID ================= */}
      <section id="services" className="services-section">
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-title">
                <h3>{service.title}</h3>
              </div>

              <div className="service-overlay">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;