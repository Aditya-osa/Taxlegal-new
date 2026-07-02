import React from 'react';
import './TeamSection.css';

const mainTeam = [
  {
    id: 1,
    name: "Adv. Suresh Sharma",
    role: "IT & GST Taxation Matters",
    description: "GST Arrest & Court Cases",
    image: "/assets/team/suresh-sir.png"
  },
  {
    id: 2,
    name: "Adv. Vivek Sharma",
    role: "Specialisation",
    description: "Criminal & Civil Matters",
    image: "/assets/team/vivek-sharma.png"
  },
  {
    id: 3,
    name: "Adv. Vaishnavi Shukla",
    role: "Specialisation",
    description: "Criminal & Civil Matters",
    image: "/assets/team/vaishnavi ma'am .png"
  }
];

const secondaryTeam = [
  {
    id: 4,
    name: "Adv. Varun Sharma",
    role: "Specialization",
    description: "Direct and Indirect Tax Expert",
    image: "/assets/team/varun-sharma.png"
  },
  {
    id: 5,
    name: "Adv. Alok Shukla",
    role: "ADR | Maritime Matters | Insurance",
    description: "Consumer | Society Matters",
    image: "/assets/team/Adv Alok Shukla Pic (1).png"
  },
  {
    id: 6,
    name: "CS Sanjay Dhadich",
    role: "Legal Audit & Compliance Expert",
    description: "CS Corporate Laws | Foreign Exchange Laws | Company Formation | ROC Matter",
    image: "/assets/team/sanjay.jpg"
  },
  {
    id: 7,
    name: "CA Narendra Rajput",
    role: "Chartered Accountant",
    description: "Income Tax and Audit",
    image: "/assets/team/narendra.jpg"
  }
];

const TeamSection = () => {
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
          {[...mainTeam, ...secondaryTeam].map((member) => (
            <div key={member.id} className="team-card-large">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
