import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const AnimatedNumber = ({ end, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease-out quad curve
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <p className="tl-hero-badge-pill">A Professional Practice Built on Excellence</p>
          <h1 className="hero-title">
            Integrated Tax,<br />
            Compliance & <span className="hero-title-highlight">Legal</span><br />
            Advisory Since 1996
          </h1>
          <p className="hero-description">
            Delivering integrated tax, regulatory, compliance and legal solutions <br /> through a single, trusted advisory platform for businesses and individuals.
          </p>
          <br />
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/contact')}>Get in Touch</button>
            <button className="btn-secondary" onClick={() => navigate('/services')}>Our Practice Areas</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3><AnimatedNumber end={30} />+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3><AnimatedNumber end={150} />+</h3>
              <p>Years Collective Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3><AnimatedNumber end={10000} />+</h3>
              <p>Customers Served</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
