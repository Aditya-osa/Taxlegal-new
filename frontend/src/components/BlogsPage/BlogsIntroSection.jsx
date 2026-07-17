import React from 'react';
import './BlogsIntroSection.css';

const BlogsIntroSection = () => {
  return (
    <section className="blogs-intro-section">
      <div className="blogs-intro-container">
        {/* Left Content */}
        <div className="blogs-intro-content" data-aos="fade-up" data-aos-duration="800">
          <span className="blogs-intro-eyebrow">OUR INSIGHTS</span>
          <h2 className="blogs-intro-title">
            Insights That Drive Better Decisions
          </h2>
          <p className="blogs-intro-desc">
            Explore expert perspectives, regulatory developments, industry trends, and practical guidance designed to help businesses and professionals navigate change with confidence.
          </p>
          <a href="#explore-blogs" className="blogs-intro-btn">
            Explore Insights &rarr;
          </a>
        </div>

        {/* Right Image */}
        <div className="blogs-intro-image-wrapper" data-aos="fade-left" data-aos-duration="1000">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" 
            alt="Business professionals reviewing reports and analytics" 
            className="blogs-intro-image" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogsIntroSection;
