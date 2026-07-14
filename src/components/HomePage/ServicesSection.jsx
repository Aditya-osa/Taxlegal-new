import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Incorporation and Startup",
    image: "/assets/Services/Incorporation.jpeg",
    description: "",
    tags: [
      "Proprietorship",
      "Partnership",
      "One Person Company",
      "Limited Liability Partnership",
      "Private Limited Company",
      "Section 8 Company",
      "Trust Registration",
      "Public Limited Company",
      "Producer Company",
      "Indian Subsidiary",
    ],
  },
  {
    id: 2,
    title: "Registrations & Licenses",
    image: "/assets/Services/Registeration.jpeg",
    description: "Fast and hassle-free registration services for businesses, professionals, and organizations.",
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
    description: "Protect your brand identity with our expert trademark registration and objection handling services.",
    tags: [
      "Trademark Advisory & Registration",
      "Trademark Protection & Enforcement",
      "Trademark Disputes",
      "Copyright Services",
      "Patent Services",
      "Industrial Design Registration",
      "Brand & Logo Design Registration",
      "IP Portfolio Management",
    ],
  },
  {
    id: 4,
    title: "Accounting & Audit",
    image: "/assets/Services/Audit.jpeg",
    description: "Structured accounting and audit support services focused on statutory compliance and financial accuracy.",
    tags: [
      "Accounting & Bookkeeping",
      "Accounts Outsourcing",
      "Audit & Assurance",
      "Statutory & Tax Compliance",
      "Financial Reporting",
      "Virtual CFO Services",
    ],
  },
  {
    id: 5,
    title: "GST Advisory & Compliance",
    image: "/assets/Services/GST.jpeg",
    description: "Comprehensive GST services to ensure compliance, risk mitigation, and operational efficiency.",
    tags: [
      "GST Registration",
      "GST Return Filing by Accountant",
      "GST LUT Form",
      "GST Notice",
      "GST Annual Return Filing (GSTR-9)",
      "GST Registration for Foreigners",
      "GST Amendment",
      "GST Revocation",
      "GSTR - 10",
      "Virtual Office + GSTIN",
    ],
  },
  {
    id: 6,
    title: "IT Advisory & Compliance",
    image: "/assets/Services/Income-tax.jpeg",
    description: "End-to-end direct tax advisory and compliance services for individuals and corporate entities.",
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
      "Revised ITR Return (ITR-U)",
    ],
  },
  {
    id: 7,
    title: "Corporate Law & MCA Services",
    image: "/assets/Services/Mca.jpeg",
    description: "Expert assistance with Ministry of Corporate Affairs filings and compliance requirements.",
    tags: [
      "Company Incorporation & Registration",
      "Corporate Compliance",
      "LLP & OPC Compliance",
      "MCA Filings & Annual Returns",
      "Director & DIN Services",
      "Company Amendments & Corporate Changes",
      "Share Capital & Shareholding Services",
      "Business Closure & Strike Off",
    ],
  },
  {
    id: 8,
    title: "Regulatory Compliance",
    image: "/assets/Services/Regulatory-compilance.png",
    description: "Holistic compliance management services covering statutory, corporate, and payroll needs.",
    tags: [
      "Corporate Secretarial Services",
      "Director Appointment & Resignation",
      "Share Capital & Equity Management",
      "Company & LLP Closure",
      "Payroll Processing",
      "Provident Fund (PF) Services",
      "Employee State Insurance (ESIC) Services",
    ],
  },
];

const ServicesSection = ({ navigateToPage }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (navigateToPage) {
      navigateToPage(path);
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <section className="services-section services-component">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <div className="subtitle-wrapper">
            <span className="section-eyebrow">OUR PRACTICE AREAS</span>
            <div className="subtitle-line"></div>
          </div>

          <h2 className="section-title">
            One Partner. Every Business Solution.
          </h2>

          <p className="section-subtitle" style={{ fontSize: "20px", fontWeight: "600" }}>
            From business formation to taxation, compliance, and legal advisory
            <br />coordinated professional services through a single point of
            engagement.
          </p>
        </div>
      </div>

      <div className="services-carousel-container" data-aos="fade-up" data-aos-delay="200">
        <div className="services-carousel-track">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={`service-1-${service.id}-${index}`}
            >
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
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {services.map((service, index) => (
            <div
              className="service-card"
              key={`service-2-${service.id}-${index}`}
            >
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
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="btn-navy"
            onClick={() => handleNavigation("services")}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;