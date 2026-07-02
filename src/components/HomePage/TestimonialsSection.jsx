import React from 'react';
import './TestimonialsSection.css';

const testimonialsData = [
  {
    id: 1,
    text: "Taxlegal has been an invaluable partner for our business. Their expertise in tax optimization and compliance has saved us both time and money. Highly recommended for any growing enterprise.",
    author: "James Wilson",
    company: "TechSolutions Inc.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "The professionalism and dedication of the team are unmatched. They handled our corporate restructuring seamlessly, ensuring all legal and regulatory requirements were met without any hassle.",
    author: "Amanda Chen",
    company: "Global Logistics",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "We have been relying on their audit and assurance services for years. Their transparent approach and deep industry knowledge give us complete confidence in our financial reporting.",
    author: "David Martinez",
    company: "Retail Partners",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
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
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
