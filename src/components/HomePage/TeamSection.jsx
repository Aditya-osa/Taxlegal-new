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
          <h2 className="section-title">Experienced Panel of Experts</h2>
          <p className="team-subtitle">
            Our professionals bring decades of industry experience to help your business succeed.
          </p>
        </div>

        <div className="team-grid-main">
          {mainTeam.map((member) => (
            <div key={member.id} className="team-card-large">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} />
                <div className="team-socials">
                  <a href="#">in</a>
                  <a href="#">tw</a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-grid-main" style={{ marginTop: '30px' }}>
          {secondaryTeam.map((member) => (
            <div key={member.id} className="team-card-large">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} />
                <div className="team-socials">
                  <a href="#">in</a>
                  <a href="#">tw</a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
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
