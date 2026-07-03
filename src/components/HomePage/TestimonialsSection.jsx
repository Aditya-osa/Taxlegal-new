import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import testimonialsData from '../../data/testimonialsData.json';
import TestimonialModal from '../common/TestimonialModal';

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">TESTIMONIALS</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="testimonials-subtitle">
            Perspectives from clients on their experience working with TaxLegal.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating" aria-label={`Rated ${testimonial.rating || 5} out of 5`}>
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.excerpt}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    {testimonial.designation && (
                      <p className="author-designation">{testimonial.designation}</p>
                    )}
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="read-more-btn"
                  onClick={() => setSelectedTestimonial(testimonial)}
                  aria-label={`Read full testimonial from ${testimonial.name}`}
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialModal 
        testimonial={selectedTestimonial} 
        onClose={() => setSelectedTestimonial(null)} 
      />
    </section>
  );
};

export default TestimonialsSection;
