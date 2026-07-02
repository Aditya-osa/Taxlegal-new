import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Incorporation and Startup",
    image: "/assets/Services/Incorporation.jpeg",
    description:
      "",
    tags: [
      "Proprietorship",
      "Partnership",
      "One Person Company",
      "Limited Liability Partnership",
      "Private Limited Company",
      "Section 8 Company",
      "Trust Registration",
      "Public Limited Company",
      "Prod ucer Company",
      "Indian Subsidiary",],
  },
  {
    id: 2,
    title: "Registrations & Licenses",
    image: "/assets/Services/Registeration.jpeg",
    description:
      "Fast and hassle-free registration services for businesses, professionals, and organizations.",
    tags: [
      "MSME Registration",
      "GST Registration",
      "FSSAI Registration",
      "Trade License",
      "Proprietorship",
      "Partnership",
      "One Person Company",
      "Limited Liability Partnership",
      "Private Limited Company",
      "Section 8 Company",
      "Trust Registration",
      "Public Limited Company",



    ],
  },
  {
    id: 3,
    title: "Trademark & IPR",
    image: "/assets/Services/Trademark.jpeg",
    description:
      "Protect your brand identity with our expert trademark registration and objection handling services.",
    tags: [
      "Trademark Advisory & Registration",
      "Trademark Protection & Enforcement",
      "Trademark Disputes",
      "Copyright Services",
      "Patent Services",
      "Industrial Design Registration",
      "Brand & Logo Design Registration",
      "IP Portfolio Management",],
  },
  {
    id: 4,
    title: "Accounting & Audit",
    image: "/assets/Services/Audit.jpeg",
    description:
      "Structured accounting and audit support services focused on statutory compliance and financial accuracy.",
    tags: [
      "Accounting & Bookkeeping",
      " Accounts Outsourcing",
      " Audit & Assurance",
      "Statutory & Tax Compliance",
      "Financial Reporting",
      "Virtual CFO Services",
    ],
  },
  {
    id: 5,
    title: "GST Advisory & Compliance",
    image: "/assets/Services/GST.jpeg",
    description:
      "Comprehensive GST services to ensure compliance, risk mitigation, and operational efficiency.",
    tags: [
      " GST Registration",
      "GST Return Filing by Accountant",
      "GST LUT Form",
      "GST Notice",
      "GST Annual Return Filing (GSTR-9)",
      "GST Registration for Foreigners",
      "GST Amendment",
      "GST Revocation",
      "GSTR - 10",
      "Virtual Office + GSTIN",],
  },
  {
    id: 6,
    title: "IT Advisory & Compliance",
    image: "/assets/Services/Income-tax.jpeg",
    description:
      "End-to-end direct tax advisory and compliance services for individuals and corporate entities.",
    tags: [
      "Income Tax E-Filing",
      "Business ITR Filing",
      "Partnership Firm / LLP ITR",
      "Company ITR Filing",
      "Trust / NGO Tax Filing",
      "15CA - 15CB Filing",
      "TAN Registration",
      "TDS Return Filing",
      "Income Tax Notice",
      "Revised ITR Return (ITR-U)",],
  },
  {
    id: 7,
    title: "Corporate Law & MCA Services",
    image: "/assets/Services/Mca.jpeg",
    description:
      "Expert assistance with Ministry of Corporate Affairs filings and compliance requirements.",
    tags: [
      "Company Incorporation & Registration",
      "Corporate Compliance",
      "LLP & OPC Compliance",
      "MCA Filings & Annual Returns",
      "Director & DIN Services",
      "Company Amendments & Corporate Changes",
      "Share Capital & Shareholding Services",
      "Business Closure & Strike Off",],
  },
  {
    id: 8,
    title: " Regulatory Compliance",
    image: "/assets/Services/Regulatory-compilance.png",
    description:
      "Holistic compliance management services covering statutory, corporate, and payroll needs.",
    tags: [
      "Corporate Secretarial Services",
      "Director Appointment & Resignation",
      "Share Capital & Equity Management",
      "Company & LLP Closure",
      "Payroll Processing",
      "Provident Fund (PF) Services",
      "Employee State Insurance (ESIC) Services"
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

        <div className="services-cta-container">
          <Link to="/contact" className="services-btn services-btn--primary">
            Contact Us to Know More
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;