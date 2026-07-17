import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhyChooseUsSection from "../../components/AboutPage/WhyChooseUsSection";
import "./ClientsPage.css";
import TestimonialModal from "../../components/common/TestimonialModal";
import LogosSection from "../../components/HomePage/LogosSection";

const ClientsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [testimonialsRow1, setTestimonialsRow1] = useState([]);
  const [testimonialsRow2, setTestimonialsRow2] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        const mid = Math.ceil(data.length / 2);
        setTestimonialsRow1(data.slice(0, mid));
        setTestimonialsRow2(data.slice(mid));
      })
      .catch(() => {
        // fallback: leave empty
      });
  }, []);

  useEffect(() => {
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
  }, [testimonialsRow1, testimonialsRow2]);

  const TestimonyCard = ({ t, ariaHidden = false }) => (
    <div className="testimony-card" aria-hidden={ariaHidden || undefined}>
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
          aria-label={ariaHidden ? undefined : `Read full testimonial from ${t.name}`}
          tabIndex={ariaHidden ? "-1" : undefined}
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );

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
              <span className="tl-hero-badge-pill">Clients & Testimonials </span>
              <h1 className="hero-title">
                Trusted by many<br /> who value expertise.
              </h1>
              <p className="clients-hero-description">
                Supporting organizations of every size with practical,<br />
                business-focused tax and legal solutions.
              </p>
            </div>
          </div>
        </section>

        {/* LOGOS SCROLLING SECTION */}
        <LogosSection />

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
                Real experiences from organizations that have partnered with us for <br /> strategic advice and lasting value.
              </p>
            </div>

            <div className="marquee-wrapper testimonies-marquee">
              {/* Row 1: moves to left */}
              <div className="marquee-track">
                <div className="marquee-content marquee-left">
                  {testimonialsRow1.map((t) => (
                    <TestimonyCard key={`r1-${t.id}`} t={t} />
                  ))}
                  {testimonialsRow1.map((t) => (
                    <TestimonyCard key={`r1-dup-${t.id}`} t={t} ariaHidden />
                  ))}
                </div>
              </div>

              {/* Row 2: moves to right */}
              <div className="marquee-track">
                <div className="marquee-content marquee-right">
                  {testimonialsRow2.map((t) => (
                    <TestimonyCard key={`r2-${t.id}`} t={t} />
                  ))}
                  {testimonialsRow2.map((t) => (
                    <TestimonyCard key={`r2-dup-${t.id}`} t={t} ariaHidden />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUsSection />

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
