import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import './TeamSection.css';

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="subtitle-wrapper">
            <p className="section-eyebrow">OUR TEAM</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title">Experienced Advisory Team</h2>
          <p className="team-subtitle">
            A multidisciplinary team with extensive experience across industries and sectors.
          </p>
        </div>

        <div className="team-grid-main">
          {teamData.map((member) => (
            <div 
              key={member.id} 
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
                  <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile" onClick={(e) => e.stopPropagation()}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </h3>
                <p className="team-role">{member.role}</p>
                {member.shortDescription && <p className="team-desc">{member.shortDescription}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
