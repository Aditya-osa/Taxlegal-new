import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import './TeamSection.css';

const TeamSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsAnimating(false);
      return; // Do not setup observer if reduced motion is preferred
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play animation if at least 30% visible, otherwise pause
          setIsAnimating(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const renderCard = (member, index) => (
    <div
      key={`${member.id}-${index}`}
      className="team-card-large"
      onClick={() => navigate(`/team/${member.slug}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="team-img-wrapper">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-info">
        <h3 className="team-name">
          <span className="name-text">{member.name}</span>
          <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="linkedin-icon" aria-label="LinkedIn Profile" onClick={(e) => e.stopPropagation()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </h3>
        <p className="team-role">{member.role}</p>
        {member.shortDescription && <p className="team-desc">{member.shortDescription}</p>}
      </div>
    </div>
  );

  const row1 = teamData.filter(member => member.name.startsWith('CA') || member.name.startsWith('CS'));
  const row2Unsorted = teamData.filter(member => !member.name.startsWith('CA') && !member.name.startsWith('CS'));
  const karthikeyan = row2Unsorted.find(m => m.slug === 'karthikeyan-tc');
  const sahil = row2Unsorted.find(m => m.slug === 'adv-sahil-kumar');
  const ajay = row2Unsorted.find(m => m.slug === 'ajay-mane');
  const suresh = row2Unsorted.find(m => m.slug === 'adv-suresh-sharma');
  const alok = row2Unsorted.find(m => m.slug === 'adv-alok-shukla');
  const rest = row2Unsorted.filter(m => !['karthikeyan-tc', 'adv-sahil-kumar', 'ajay-mane', 'adv-suresh-sharma', 'adv-alok-shukla'].includes(m.slug));
  
  const row2 = [karthikeyan, sahil, ajay, suresh, alok, ...rest].filter(Boolean);

  const animationStyle = { animationPlayState: isAnimating ? 'running' : 'paused' };

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className="team-header" data-aos="fade-up">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">OUR TEAM</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">Experienced Advisory Team</h2>
          <p className="team-subtitle" style={{ fontSize: "20px", fontWeight: "600" }}>
            A multidisciplinary team with extensive experience across industries and sectors.
          </p>
        </div>
      </div>

      <div className="tl-marquee-wrapper" data-aos="fade-up" data-aos-duration="600">
        {/* Row 1: Left to Right */}
        <div className="tl-marquee-container">
          <div className="tl-marquee-content tl-row-1" style={animationStyle}>
            <div className="tl-marquee-track">
              {row1.map((member, index) => renderCard(member, `track1-${index}`))}
            </div>
            <div className="tl-marquee-track">
              {row1.map((member, index) => renderCard(member, `track2-${index}`))}
            </div>
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="tl-marquee-container">
          <div className="tl-marquee-content tl-row-2" style={animationStyle}>
            <div className="tl-marquee-track">
              {row2.map((member, index) => renderCard(member, `track1-${index}`))}
            </div>
            <div className="tl-marquee-track">
              {row2.map((member, index) => renderCard(member, `track2-${index}`))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div className="explore-more-container" data-aos="fade-up" data-aos-duration="400">
          <button className="explore-more-btn" onClick={() => navigate('/about#leadership-team')}>
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
