import React from 'react';
import './LeadershipCard.css';

const LeadershipCard = ({ member }) => {
  return (
    <div className="team-card-large">
      <div className="team-img-wrapper">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-info">
        <h3 className="team-name">
          <span className="name-text">{member.name}</span>
          <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </h3>
        <p className="team-role">{member.role}</p>
        {member.description && <p className="team-desc">{member.description}</p>}
      </div>
    </div>
  );
};

export default LeadershipCard;
