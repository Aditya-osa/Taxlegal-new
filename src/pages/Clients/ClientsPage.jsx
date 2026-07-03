import React, { useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
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

// Unique Testimonials Row 1 (Moves Left)
const testimonialsRow1 = [
  {
    id: 1,
    text: "The tax optimization strategies provided by TaxLegal helped us restructure our cross-border operations, saving us millions in compliance costs.",
    author: "Sarah Jenkins",
    company: "TechVanguard",
    role: "CFO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Their legal team's expertise in handling corporate litigation is outstanding. They secured a favorable settlement for our dispute in record time.",
    author: "Rajesh Mehta",
    company: "Mehta Steel Group",
    role: "Managing Director",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Working with TaxLegal for our annual auditing has been a seamless experience. Their attention to detail and transparency are top-notch.",
    author: "Elena Rostova",
    company: "Horizon Logistics",
    role: "VP of Finance",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "As a fast-growing startup, navigating regulatory filings was overwhelming. TaxLegal took over all compliance, letting us focus on scaling.",
    author: "David Chen",
    company: "Zenith AgriTech",
    role: "Co-Founder",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    text: "Their advisory service on property tax and corporate restructuring was invaluable. A truly trusted partner for long-term growth.",
    author: "Marcus Aurelius",
    company: "Rome Property Group",
    role: "Director",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

// Unique Testimonials Row 2 (Moves Right) - No overlap with Row 1
const testimonialsRow2 = [
  {
    id: 6,
    text: "The compliance audit done by TaxLegal was incredibly thorough. They identified key risk areas and helped us implement robust controls.",
    author: "Jennifer Sterling",
    company: "Apex Capital",
    role: "COO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 7,
    text: "In real estate, legal clarity is paramount. TaxLegal's contract drafting and legal advisory have been our shield and guidance.",
    author: "Vikram Malhotra",
    company: "Prime Developers",
    role: "CEO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 8,
    text: "TaxLegal helped us set up our company registration, trademark filings, and initial tax structures smoothly. Outstanding client service!",
    author: "Sophia Loren",
    company: "Bella Beauty",
    role: "Founder",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 9,
    text: "Their team acts not just as advisors, but as partners in our business. Their response times and clarity of counsel are exceptional.",
    author: "Alister Vance",
    company: "Nova Group",
    role: "Head of Operations",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 10,
    text: "TaxLegal's deep expertise in corporate compliance and tax planning gave us the confidence to expand our operations into new regions.",
    author: "Amina Diallo",
    company: "Pan-African Energy",
    role: "General Counsel",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

const ClientsPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clients-page-wrapper">
      <Header />

      <main className="clients-main-content">
        {/* HERO SECTION */}
        <section
          className="clients-hero-section"
          style={{
            background: `linear-gradient(rgba(10, 37, 64, 0.8), rgba(10, 37, 64, 0.8)), url('/assets/Internships/Contact.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="clients-hero-overlay"></div>
          <div className="container clients-hero-container">
            <div className="clients-hero-content">
              <span className="clients-badge-simple">Clients & Partners</span>
              <h1 className="clients-hero-title">
                Trusted by Organizations That Value Expertise
              </h1>
              <p className="clients-hero-description">
                Supporting organizations of every size with practical,
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
                      <div className="testimony-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.text}"</p>
                      <div className="testimony-author">
                        <img src={t.avatar} alt={t.author} className="testimony-avatar" />
                        <div className="testimony-author-info">
                          <h4>{t.author}</h4>
                          <p>{t.role}, {t.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {testimonialsRow1.map((t, index) => (
                    <div key={`t-r1-dup-${index}`} className="testimony-card" aria-hidden="true">
                      <div className="testimony-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.text}"</p>
                      <div className="testimony-author">
                        <img src={t.avatar} alt={t.author} className="testimony-avatar" />
                        <div className="testimony-author-info">
                          <h4>{t.author}</h4>
                          <p>{t.role}, {t.company}</p>
                        </div>
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
                      <div className="testimony-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.text}"</p>
                      <div className="testimony-author">
                        <img src={t.avatar} alt={t.author} className="testimony-avatar" />
                        <div className="testimony-author-info">
                          <h4>{t.author}</h4>
                          <p>{t.role}, {t.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {testimonialsRow2.map((t, index) => (
                    <div key={`t-r2-dup-${index}`} className="testimony-card" aria-hidden="true">
                      <div className="testimony-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                      <p className="testimony-text">"{t.text}"</p>
                      <div className="testimony-author">
                        <img src={t.avatar} alt={t.author} className="testimony-avatar" />
                        <div className="testimony-author-info">
                          <h4>{t.author}</h4>
                          <p>{t.role}, {t.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="clients-cta-section">
          <div className="container">
            <div className="clients-cta-card">
              <h2>Ready to Experience Seamless Advisory?</h2>
              <p>
                Get in touch with our multidisciplinary team of  CAs, CSs  and advocates to discuss how we can help your business stay compliant and grow.
              </p>
              <a href="/contact" className="clients-cta-btn">
                Schedule a Consultation
                <svg className="cta-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClientsPage;
