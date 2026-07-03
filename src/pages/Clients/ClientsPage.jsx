import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhyChooseUsSection
  from "../../components/AboutPage/WhyChooseUsSection";
import {
  TrendingUp,
  Shield,
  Activity,
  Truck,
  Globe,
  Heart,
  Cpu,
  Home,
  Zap,
  Briefcase,
  Package,
  Database,
  Star
} from "lucide-react";
import "./ClientsPage.css";
import testimonialsData from "../../data/testimonialsData.json";
import TestimonialModal from "../../components/common/TestimonialModal";

// Unique Logos Row 1 (Moves Left)
const logosRow1 = [
  { name: "FinCorp Solutions", icon: TrendingUp, color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
  { name: "Apex Legal Group", icon: Shield, color: "#2e55a0", bg: "rgba(46, 85, 160, 0.1)" },
  { name: "Zenith Biotech", icon: Activity, color: "#06b6d4", bg: "rgba(6, 182, 212, 0.1)" },
  { name: "Horizon Logistics", icon: Truck, color: "#f97316", bg: "rgba(249, 115, 22, 0.1)" },
  { name: "AeroSpace Partners", icon: Globe, color: "#3a85c8", bg: "rgba(58, 133, 200, 0.1)" },
  { name: "Nova Health", icon: Heart, color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
];

// Unique Logos Row 2 (Moves Right) - No overlap with Row 1
const logosRow2 = [
  { name: "Nexus Tech", icon: Cpu, color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.1)" },
  { name: "Prime Builders", icon: Home, color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
  { name: "Pinnacle Energy", icon: Zap, color: "#eab308", bg: "rgba(234, 179, 8, 0.1)" },
  { name: "Summit Finance", icon: Briefcase, color: "#6366f1", bg: "rgba(99, 102, 241, 0.1)" },
  { name: "Vance Retail", icon: Package, color: "#ec4899", bg: "rgba(236, 72, 153, 0.1)" },
  { name: "Database Systems", icon: Database, color: "#64748b", bg: "rgba(100, 116, 139, 0.1)" },
];

const halfLen = Math.ceil(testimonialsData.length / 2);
// Testimonials Row 1 (Moves Left)
const testimonialsRow1 = testimonialsData.slice(0, halfLen);

// Testimonials Row 2 (Moves Right) - No overlap with Row 1
const testimonialsRow2 = testimonialsData.slice(halfLen);

const ClientsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const cards = document.querySelectorAll(".testimony-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="clients-page-wrapper">
      <Header />

      <main className="clients-main-content">
        {/* HERO SECTION */}
        <section
          className="clients-hero-section"
          style={{
            background: `linear-gradient(rgba(10, 37, 64, 0.8), rgba(10, 37, 64, 0.8)), url('/assets/Clients page/Clients-Banner.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="clients-hero-overlay"></div>
          <div className="container clients-hero-container">
            <div className="clients-hero-content">
              <span className="clients-badge-simple">Clients & Testimonials </span>
              <h1 className="clients-hero-title">
                Trusted by Organizations That Value Expertise
              </h1>
              <p className="clients-hero-description">
                Supporting organizations of every size with practical,<br />
                business-focused tax and legal solutions.              </p>
            </div>
          </div>
        </section>

        {/* LOGOS SCROLLING SECTION */}
        <section className="clients-logos-section">
          <div className="container">
            <div className="clients-section-header">
              <div className="subtitle-wrapper">
                <span className="clients-eyebrow">Our Valued Clients</span>
                <div className="subtitle-line"></div>
              </div>
              <h2 className="clients-section-title">  A Legacy of  Partnerships</h2>
              <p className="clients-section-subtitle">
                Chosen by organizations that value expertise, integrity, and lasting partnerships.
              </p>
            </div>

            <div className="marquee-wrapper">
              {/* Row 1: moves to left */}
              <div className="marquee-track">
                <div className="marquee-content marquee-left">
                  {logosRow1.map((logo, index) => (
                    <div key={`logo-r1-${index}`} className="logo-card">
                      <div className="logo-icon-box" style={{ backgroundColor: logo.bg }}>
                        <logo.icon size={26} color={logo.color} strokeWidth={2} />
                      </div>
                      <span className="logo-card-name">{logo.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {logosRow1.map((logo, index) => (
                    <div key={`logo-r1-dup-${index}`} className="logo-card" aria-hidden="true">
                      <div className="logo-icon-box" style={{ backgroundColor: logo.bg }}>
                        <logo.icon size={26} color={logo.color} strokeWidth={2} />
                      </div>
                      <span className="logo-card-name">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: moves to right */}
              <div className="marquee-track">
                <div className="marquee-content marquee-right">
                  {logosRow2.map((logo, index) => (
                    <div key={`logo-r2-${index}`} className="logo-card">
                      <div className="logo-icon-box" style={{ backgroundColor: logo.bg }}>
                        <logo.icon size={26} color={logo.color} strokeWidth={2} />
                      </div>
                      <span className="logo-card-name">{logo.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {logosRow2.map((logo, index) => (
                    <div key={`logo-r2-dup-${index}`} className="logo-card" aria-hidden="true">
                      <div className="logo-icon-box" style={{ backgroundColor: logo.bg }}>
                        <logo.icon size={26} color={logo.color} strokeWidth={2} />
                      </div>
                      <span className="logo-card-name">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONY SCROLLING SECTION */}
        <section className="clients-testimonials-section">
          <div className="container">
            <div className="clients-section-header">
              <div className="subtitle-wrapper">
                <span className="clients-eyebrow">CLIENT STORIES</span>
                <div className="subtitle-line"></div>
              </div>
              <h2 className="clients-section-title">Trusted Voices. Proven Relationships.</h2>
              <p className="clients-section-subtitle">
                Real experiences from organizations that have partnered with us for strategic advice and lasting value.              </p>
            </div>

            <div className="marquee-wrapper testimonies-marquee">
              {/* Row 1: moves to left */}
              <div className="marquee-track">
                <div className="marquee-content marquee-left">
                  {testimonialsRow1.map((t, index) => (
                    <div key={`t-r1-${index}`} className="testimony-card">
                      <div className="testimony-stars" aria-label={`Rated ${t.rating || 5} out of 5`}>
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.excerpt || t.testimonial}"</p>
                      <div className="testimony-footer">
                        <div className="testimony-author">
                          <div className="testimony-author-info">
                            <h4>{t.name}</h4>
                            {t.designation && <p className="testimony-designation">{t.designation}</p>}
                            <p className="testimony-company">{t.company}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="read-more-btn"
                          onClick={() => setSelectedTestimonial(t)}
                          aria-label={`Read full testimonial from ${t.name}`}
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {testimonialsRow1.map((t, index) => (
                    <div key={`t-r1-dup-${index}`} className="testimony-card" aria-hidden="true">
                      <div className="testimony-stars">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.excerpt || t.testimonial}"</p>
                      <div className="testimony-footer">
                        <div className="testimony-author">
                          <div className="testimony-author-info">
                            <h4>{t.name}</h4>
                            {t.designation && <p className="testimony-designation">{t.designation}</p>}
                            <p className="testimony-company">{t.company}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="read-more-btn"
                          onClick={() => setSelectedTestimonial(t)}
                          tabIndex="-1"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: moves to right */}
              <div className="marquee-track">
                <div className="marquee-content marquee-right">
                  {testimonialsRow2.map((t, index) => (
                    <div key={`t-r2-${index}`} className="testimony-card">
                      <div className="testimony-stars" aria-label={`Rated ${t.rating || 5} out of 5`}>
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.excerpt || t.testimonial}"</p>
                      <div className="testimony-footer">
                        <div className="testimony-author">
                          <div className="testimony-author-info">
                            <h4>{t.name}</h4>
                            {t.designation && <p className="testimony-designation">{t.designation}</p>}
                            <p className="testimony-company">{t.company}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="read-more-btn"
                          onClick={() => setSelectedTestimonial(t)}
                          aria-label={`Read full testimonial from ${t.name}`}
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {testimonialsRow2.map((t, index) => (
                    <div key={`t-r2-dup-${index}`} className="testimony-card" aria-hidden="true">
                      <div className="testimony-stars">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.excerpt || t.testimonial}"</p>
                      <div className="testimony-footer">
                        <div className="testimony-author">
                          <div className="testimony-author-info">
                            <h4>{t.name}</h4>
                            {t.designation && <p className="testimony-designation">{t.designation}</p>}
                            <p className="testimony-company">{t.company}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="read-more-btn"
                          onClick={() => setSelectedTestimonial(t)}
                          tabIndex="-1"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhyChooseUsSection />
        {/* CTA BANNER */}
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ClientsPage;
