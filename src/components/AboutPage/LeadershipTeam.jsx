import React from 'react';
import LeadershipCard from './LeadershipCard';
import { teamData } from '../../data/teamData';
import './LeadershipTeam.css';

const LeadershipTeam = () => {
  return (
    <section className="leadership-section tl-section tl-section--off">
      <div className="about-container">

        <div className="leadership-header">
          <div className="subtitle-wrapper" style={{ justifyContent: 'center', color: "red" }}>

          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our Leadership, Advisors & Specialists
          </h2>
          <p className="leadership-intro" style={{ textAlign: 'center' }}>
            TaxLegal is led by experienced professionals who combine deep expertise in taxation,
            law, compliance, and governance to deliver practical, trusted advice.</p>
        </div>

        <div className="leadership-profiles">
          {teamData.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
