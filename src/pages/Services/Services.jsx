import React from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Incorporation and Startup",
    image: "/assets/Services/Startup.jpeg",
    description:
      "",
    tags: [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "LLP Registration",
      "Private Limited Company",
    ],
  },
  {
    id: 2,
    title: "Registrations & Licenses",
    image: "/assets/team/Registeration.png",
    description:
      "Fast and hassle-free registration services for businesses, professionals, and organizations.",
    tags: [
      "MSME Registration",
      "GST Registration",
      "FSSAI Registration",
      "Trade License",
    ],
  },
  {
    id: 3,
    title: "Trademark & IPR",
    image: "/assets/team/Corporate.png",
    description:
      "Protect your brand identity with our expert trademark registration and objection handling services.",
    tags: [
      "Trademark Search",
      "Registration",
      "Objection Reply",
      "Renewal",
    ],
  },
  {
    id: 4,
    title: "Accounting & Audit",
    image: "/assets/Services/Accounts-Audit.jpeg",
    description:
      "Structured accounting and audit support services focused on statutory compliance and financial accuracy.",
    tags: [
      "Accounts Outsourcing",
      "Statutory Audit",
      "Tax Audit",
      "Internal Audit",
    ],
  },
  {
    id: 5,
    title: "GST Advisory & Compliance",
    image: "/assets/team/Indirect-tax.png",
    description:
      "Comprehensive GST services to ensure compliance, risk mitigation, and operational efficiency.",
    tags: [
      "Registration",
      "Returns",
      "Audit",
      "Assessments",
    ],
  },
  {
    id: 6,
    title: "IT Advisory & Compliance",
    image: "/assets/team/Direct-tax.png",
    description:
      "End-to-end direct tax advisory and compliance services for individuals and corporate entities.",
    tags: [
      "IT Returns",
      "Tax Planning",
      "Assessments",
      "TDS",
    ],
  },
  {
    id: 7,
    title: "Corporate Law & MCA Services",
    image: "/assets/team/Corporate.png",
    description:
      "Expert assistance with Ministry of Corporate Affairs filings and compliance requirements.",
    tags: [
      "Annual Filings",
      "DIN Registration",
      "Director Changes",
      "Compliance",
    ],
  },
  {
    id: 8,
    title: "Compliance",
    image: "/assets/team/Payroll.png",
    description:
      "Holistic compliance management services covering statutory, corporate, and payroll needs.",
    tags: [
      "PF & ESIC",
      "Secretarial Audit",
      "Due Diligence",
      "Advisory",
    ],
  },
  /*{
    id: 9,
    title: "Consultation & Advisory",
    image: "/assets/team/bacck.png",
    description:
      "Strategic business and financial consultation tailored to your unique operational goals.",
    tags: [
      "Financial Advisory",
      "Business Strategy",
      "Risk Management",
    ],
  },*/
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