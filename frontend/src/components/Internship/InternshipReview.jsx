import React, { useEffect, useRef, useState } from "react";
import "./InternshipReview.css";

const ReviewCard = ({ text, author, role, linkedin_url }) => (
  <div className="internship-review-card">
    <div className="quote-icon-wrap">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 11H6c0-2.5 1.5-4 4-4V5c-3.5 0-6 2.5-6 6v7h8v-7zm10 0h-4c0-2.5 1.5-4 4-4V5c-3.5 0-6 2.5-6 6v7h8v-7z" fill="currentColor" />
      </svg>
    </div>
    <p className="internship-review-text">{text}</p>
    <div className="internship-review-separator" />
    <div className="internship-review-meta">
      <h4 className="internship-review-author">
        <span className="author-name">{author}</span>
        <a href={linkedin_url || "#"} className="linkedin-link" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          <svg className="linkedin-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </h4>
      <p className="internship-review-role">{role}</p>
    </div>
  </div>
);

const InternshipReview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [row1Reviews, setRow1Reviews] = useState([]);
  const [row2Reviews, setRow2Reviews] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/api/internship-reviews")
      .then((res) => res.json())
      .then((data) => {
        setRow1Reviews(data.row1 || []);
        setRow2Reviews(data.row2 || []);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`internship-review-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="internship-review-header">
        <span className="internship-review-eyebrow">INTERN EXPERIENCES</span>
        <div className="internship-review-header-divider" />
        <h2 className="internship-review-title">
          From Learning to Professional <em>Excellence</em>
        </h2>
        <p className="internship-review-subtitle">
          Every internship is an opportunity to build practical knowledge, professional confidence, and industry-ready skills.
        </p>
        <div className="internship-review-cta-wrap">
          <span className="internship-review-cta">what our interns got to say about our internship program ↓</span>
        </div>
      </div>

      <div className="internship-marquee-container">
        {/* Row 1 - scrolling left */}
        <div className="internship-marquee-row">
          <div className="internship-marquee-track scroll-left">
            {row1Reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            {row1Reviews.map((review) => (
              <ReviewCard key={`${review.id}-dup`} {...review} />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="internship-marquee-row">
          <div className="internship-marquee-track scroll-right">
            {row2Reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            {row2Reviews.map((review) => (
              <ReviewCard key={`${review.id}-dup`} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipReview;
