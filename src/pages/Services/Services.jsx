import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Landmark,
  IndianRupee,
  Building2,
  FileText,
  Handshake,
  Gavel,
  Home,
  Users,
  Award,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import "./Services.css";
import LogosSection from '../../components/HomePage/LogosSection';

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

const legalAdvisoryServices = [
  {
    id: 1,
    num: "01",
    title: "INSOLVENCY & BANKRUPTCY",
    icon: Scale,
    description:
      "Navigate financial challenges with confidence. Advising businesses, creditors and borrowers on IBC matters, restructuring, liquidation and proceedings before the NCLT.",
  },
  {
    id: 2,
    num: "02",
    title: "SARFAESI & RDB MATTERS",
    icon: Landmark,
    description:
      "Effective recovery and debt resolution. Legal representation in SARFAESI actions, DRT/DRAT proceedings, loan recovery and secured asset enforcement matters.",
  },
  {
    id: 3,
    num: "03",
    title: "BANKING & FINANCE LAW",
    icon: IndianRupee,
    description:
      "Trusted legal support for financial institutions. Advisory on banking regulations, lending transactions, financing, regulatory compliance and financial disputes.",
  },
  {
    id: 4,
    num: "04",
    title: "CORPORATE & COMMERCIAL ADVISORY",
    icon: Building2,
    description:
      "Legal guidance for growing businesses. Supporting companies with corporate governance, restructuring, compliance, joint ventures and commercial transactions.",
  },
  {
    id: 5,
    num: "05",
    title: "COMMERCIAL & CONTRACT LAW",
    icon: FileText,
    description:
      "Contracts that safeguard your business. Drafting, reviewing and negotiating commercial agreements that minimize risk and strengthen business relationships.",
  },
  {
    id: 6,
    num: "06",
    title: "ARBITRATION & MEDIATION",
    icon: Handshake,
    description:
      "Efficient resolution of commercial disputes. Representing clients in domestic and international arbitration, mediation and alternative dispute resolution mechanisms.",
  },
  {
    id: 7,
    num: "07",
    title: "CIVIL & CRIMINAL LITIGATION",
    icon: Gavel,
    description:
      "Strong representation across all courts. Handling civil, criminal and commercial litigation before courts, tribunals and regulatory authorities across India.",
  },
  {
    id: 8,
    num: "08",
    title: "PROPERTY & REAL ESTATE",
    icon: Home,
    description:
      "Protecting your property interests. Legal support for property transactions, title verification, due diligence, RERA compliance and real estate disputes.",
  },
  {
    id: 9,
    num: "09",
    title: "FAMILY COURT MATTERS",
    icon: Users,
    description:
      "Compassionate guidance during difficult times. Representation in divorce, child custody, maintenance, succession and other family law matters with complete confidentiality.",
  },
];

const whyChooseItems = [
  {
    id: 1,
    title: "Experienced Legal Professionals",
    description:
      "Seasoned legal experts with decades of practice. Delivering strategic and dependable representation.",
    icon: Award,
    image: "/assets/Services/experienced_proffessionals.jpg",
  },
  {
    id: 2,
    title: "Business-Centric Thinking",
    description:
      "Legal advice designed around commercial realities. Supporting confident business decisions.",
    icon: Briefcase,
    image: "/assets/Services/client_centric_approach.jpg",
  },
  {
    id: 3,
    title: "Multi-Disciplinary Capability",
    description:
      "Integrated legal expertise across practice areas. Delivering practical and coordinated solutions.",
    icon: Building2,
    image: "/assets/Services/end_to_end_support.jpg",
  },
  {
    id: 4,
    title: "Regulatory Perspective",
    description:
      "Navigating evolving legal and compliance requirements. Helping clients operate with greater certainty.",
    icon: Scale,
    image: "/assets/Services/Regulatory-compilance.png",
  },
  {
    id: 5,
    title: "Efficient Execution",
    description:
      "Responsive advice with clear timelines. Focused on timely delivery and measurable outcomes.",
    icon: Clock,
    image: "/assets/Services/timely_and_effective_solutions.jpg",
  },
  {
    id: 6,
    title: "Trusted Relationships",
    description:
      "Built on professionalism, discretion and accountability. Long-term partnerships driven by client success.",
    icon: ShieldCheck,
    image: "/assets/Services/integrity_and_transparency.jpg",
  },
  {
    id: 7,
    title: "National Reach",
    description:
      "Supporting clients across jurisdictions and industries. Consistent legal advice wherever business operates.",
    icon: Globe,
    image: "/assets/Services/pan_india_presence.jpg",
  },
];

const WhyChooseCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getCardClass = (index) => {
    const N = items.length;
    let offset = (index - activeIndex) % N;
    if (offset > Math.floor(N / 2)) offset -= N;
    if (offset < -Math.floor(N / 2)) offset += N;

    if (offset === 0) return "coverflow-card--center";
    if (offset === -1) return "coverflow-card--left-1";
    if (offset === 1) return "coverflow-card--right-1";
    if (offset === -2) return "coverflow-card--left-2";
    if (offset === 2) return "coverflow-card--right-2";
    return "coverflow-card--hidden";
  };

  return (
    <div
      className="why-choose-coverflow-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="why-choose-coverflow-container">
        <button
          onClick={prevSlide}
          className="why-choose-coverflow-arrow left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {items.map((item, idx) => {
          const Icon = item.icon;
          const cardClass = getCardClass(idx);
          return (
            <div
              className={`why-choose-coverflow-card ${cardClass}`}
              key={item.id}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="why-choose-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="why-choose-card-img"
                />
                <div className="why-choose-icon-badge">
                  <Icon size={26} strokeWidth={2} />
                </div>
              </div>
              <div className="why-choose-card-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}

        <button
          onClick={nextSlide}
          className="why-choose-coverflow-arrow right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="why-choose-coverflow-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`why-choose-coverflow-dot ${activeIndex === idx ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedCounter = ({ target, duration = 1600, suffix = "", separator = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setCount(current);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  const formatNumber = (num) => {
    if (!separator) return num.toString();
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <span ref={elementRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Services = () => {
  return (
    <>
      <Header />

      {/* ================= BANNER SECTION ================= */}
      <section className="services-banner">
        <div className="banner-content">
          <div className="services-intro-copy">
            <div className="services-eyebrow">OUR EXPERTISE & DOMAINS</div>
            <h1>
              Three Decades of <br />Tax and Legal Excellence
            </h1>
            <p>
              Delivering integrated tax, regulatory and legal solutions through advisory, compliance and dispute resolution.
            </p>
            <div className="services-hero-actions">
              <a href="#services" className="services-btn services-btn--primary">
                Explore All Domains
              </a>
            </div>
          </div>

          <div className="services-hero-meta-card">
            <div className="meta-card-stat">
              <span className="meta-stat-num">
                <AnimatedCounter target={30} suffix="+" /> Years
              </span>
              <span className="meta-stat-label">of Experience</span>
            </div>
            <div className="meta-card-divider"></div>
            <div className="meta-card-stat">
              <span className="meta-stat-num">
                <AnimatedCounter target={10000} separator="," suffix="+" />
              </span>
              <span className="meta-stat-label">Customers Served</span>
            </div>
          </div>
        </div>
      </section>

<LogosSection />
      <h1 className="section-heading">Our Practice Areas</h1>

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

      {/* ================= LEGAL ADVISORY SERVICES SECTION ================= */}
      {/* <h1 className="section-heading">About Our Legal Advisory Services</h1> */}

      <section id="legal-advisory" className="legal-advisory-section">
        {/* Top Hero Banner */}
        <div className="legal-hero-banner">
          <div className="legal-hero-content">
            <div className="legal-eyebrow">
              <Scale size={18} />
              <span>OUR LEGAL ADVISORY SERVICES</span>
            </div>
            <h2>
              Strategic Legal Expertise. Business-Focused Solutions.
              <br />
              Trusted Representation.
            </h2>
            <p>
              Whether you are an individual, entrepreneur, financial institution, corporate house,
              or multinational organization, TaxLegal provides comprehensive legal advisory and
              dispute resolution services across diverse areas of law.
            </p>
            <div className="legal-hero-actions">
              <Link to="/contact" className="services-btn legal-btn--primary">
                SCHEDULE A CONSULTATION &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 9 Legal Services Grid */}
        <div className="legal-services-container">
          <div className="legal-services-grid">
            {legalAdvisoryServices.map((item) => {
              const Icon = item.icon;
              return (
                <div className="legal-card" key={item.id}>
                  <div className="legal-card-header">
                    <div className="legal-card-num">
                      {item.num}
                    </div>
                    <div className="legal-card-icon">
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="legal-card-title">{item.title}</h3>
                  <p className="legal-card-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Clients Choose TaxLegal */}
        <div className="why-choose-section">
          <h2 className="why-choose-heading">Why Leading Businesses Work With Us</h2>
          <p style={{ color: "white", justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center", marginTop: "0px" }}>We combine legal excellence with commercial understanding to help clients manage complexity, <br />reduce risk and make informed decisions with confidence.</p>
          <WhyChooseCarousel items={whyChooseItems} />
        </div>

        {/* Bottom Expert Advice CTA Banner */}
        <div className="legal-bottom-cta">
          <div className="legal-bottom-cta-content">
            <h2>How Can We Help?</h2>
            <p>
              Speak with our professionals to discuss your tax, legal or regulatory requirements and discover how we can support your business.
            </p>
            <div className="legal-bottom-actions">
              <Link to="/contact" className="services-btn legal-btn--primary">
                BOOK A CONSULTATION &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;