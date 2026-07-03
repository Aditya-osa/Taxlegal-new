import React from "react";
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
];

const ServicesSection = ({ navigateToPage }) => {
  return (
    <section className="services-section services-component">
      <div className="container">
        <div className="services-header">
          <div className="subtitle-wrapper">
            <span className="section-eyebrow">OUR PRACTICE AREAS</span>
            <div className="subtitle-line"></div>
          </div>

          <h2 className="section-title">
            One Partner. Every Business Solution.
          </h2>

          <p className="section-subtitle">
            From business formation to taxation, compliance, and legal advisory
            — coordinated professional services through a single point of
            engagement.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              className="service-card" 
              key={service.id}
              onClick={() => navigateToPage?.("services")}
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
                  {service.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="btn-navy"
            onClick={() => navigateToPage?.("services")}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;