import React from 'react';
import './BlogsHeroSection.css';
import { Link } from 'react-router-dom';

const BlogsHeroSection = () => {
  return (
    <section className="blogs-hero-section">
      <div className="blogs-hero-overlay"></div>
      <div className="container blogs-hero-container">
        <div className="blogs-hero-content">

          <h1 className="hero-title">Blogs</h1>
          <p className="hero-description">
            Latest insights, legal updates, tax strategies and expert articles from Tax Legal Synergy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsHeroSection;
