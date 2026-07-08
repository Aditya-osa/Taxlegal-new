import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhyChooseUsSection
  from "../../components/AboutPage/WhyChooseUsSection";
import "./ClientsPage.css";
import testimonialsData from "../../data/testimonialsData.json";
import TestimonialModal from "../../components/common/TestimonialModal";
import LogosSection from "../../components/HomePage/LogosSection";

// Testimonials Row 1 (Moves Left): 17 cards
const testimonialsRow1 = testimonialsData.slice(0, 17);

// Testimonials Row 2 (Moves Right): 18 cards
const testimonialsRow2 = testimonialsData.slice(17, 35);

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
              <span className="tl-hero-badge-pill">Clients & Testimonials </span>
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
                Real experiences from organizations that have partnered with us for strategic advice and lasting value.              </p>
            </div>

            <div className="marquee-wrapper testimonies-marquee">
              {/* Row 1: moves to left */}
              <div className="marquee-track">
                <div className="marquee-content marquee-left">
                  {testimonialsRow1.map((t, index) => (
                    <div key={`t-r1-${index}`} className="testimony-card">
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
