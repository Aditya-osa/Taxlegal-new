import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import TestimonialModal from '../common/TestimonialModal';

const TestimonialsSection = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then(setTestimonialsData)
      .catch(() => {});
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
      </div>

      <div className="testimonials-carousel-container">
        <div className="testimonials-carousel-track">
          {testimonialsData.map((testimonial) => (
            <div key={`t1-${testimonial.id}`} className="testimonial-card">
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
          {/* Duplicate for seamless loop */}
          {testimonialsData.map((testimonial) => (
            <div key={`t2-${testimonial.id}`} className="testimonial-card" aria-hidden="true">
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

      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </section>
  );
};

export default TestimonialsSection;
