import React, { useState } from 'react';
import './LeadershipCard.css';

const LeadershipCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card-container ${isFlipped ? 'flipped' : ''}`} 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <div className="card-image-wrapper">
            <img src={member.photo} alt={member.name} className="card-image" />
          </div>
          <div className="card-front-content">
            <h3 className="card-name">{member.name}</h3>
            <p className="card-designation">{member.designation}</p>
            <p className="card-experience">{member.experience}</p>
            <div className="view-profile-indicator">
              <span>View Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <div className="card-back-content">
            <h3 className="card-name">{member.name}</h3>
            <p className="card-designation" style={{ marginBottom: '16px' }}>{member.designation}</p>
            
            <p className="card-bio">{member.bio}</p>
            
            <div className="card-expertise-section">
              <h4>Key Expertise</h4>
              <ul className="expertise-list">
                {member.expertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="card-achievements-section">
              <h4>Professional Highlights</h4>
              <ul className="achievements-list">
                {member.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-social">
              <a href={member.social.linkedin} aria-label="LinkedIn" onClick={e => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={`mailto:${member.social.email}`} aria-label="Email" onClick={e => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
