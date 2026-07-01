import {
  Home,
  Building2,
  FileText,
  IndianRupee,
  CreditCard,
  AlertCircle,
  Shield,
  Users,
} from "lucide-react";




import "./ServicesSection.css";

const services = [
  {
    title: "Business Formation",
    description:
      "Company incorporation, LLP, partnership, trust, and Section 8 company registration with complete end-to-end support.",
    icon: Home,
  },
  {
    title: "Business Registrations",
    description:
      "MSME, GST, TAN, FSSAI, IEC, DSC, Udyog Aadhaar, Trade License, and Professional Tax registrations under one roof.",
    icon: Building2,
  },
  {
    title: "Accounts & Audit",
    description:
      "Accounts outsourcing, computerized accounting, statutory and tax compliance, and audit support services.",
    icon: FileText,
  },
  {
    title: "Direct Taxation",
    description:
      "Income tax compliance, TDS return filing, capital gains advisory, assessment representation, and tax planning.",
    icon: IndianRupee,
  },
  {
    title: "Indirect Taxation / GST",
    description:
      "GST registration, return filing, advisory, legal opinions, GST audit, and representation in assessment and litigation proceedings.",
    icon: CreditCard,
  },
  {
    title: "Assessment, Litigation & Appeals",
    description:
      "Professional representation in Income Tax, GST, MVAT, and LBT appeal and assessment proceedings.",
    icon: AlertCircle,
  },
  {
    title: "Corporate Compliance",
    description:
      "Director changes, authorised capital increase, share transfer, MOA amendments, company winding up, and LLP closure.",
    icon: Shield,
  },
  {
    title: "Payroll Compliance",
    description:
      "Payroll management, PF and ESIC registration, return filing, and statutory payroll compliance support.",
    icon: Users,
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
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href="/services"
                  className="service-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToPage?.("services");
                  }}
                >
                  Explore Service →
                </a>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="btn-navy"
            onClick={() => navigateToPage?.("services")}
          >
            View All Services &amp; Practice Areas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;