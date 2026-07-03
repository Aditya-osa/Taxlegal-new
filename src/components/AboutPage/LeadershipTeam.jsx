import React from 'react';
import LeadershipCard from './LeadershipCard';
import './LeadershipTeam.css';

const leadershipData = [
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
  },
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

const LeadershipTeam = () => {
  return (
    <section className="leadership-section tl-section tl-section--off">
      <div className="about-container">
        
        <div className="leadership-header">
          <div className="subtitle-wrapper" style={{ justifyContent: 'center' }}>
            <p className="section-eyebrow">LEADERSHIP TEAM</p>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our Leadership, Advisors & Specialists
          </h2>
          <p className="leadership-intro" style={{ textAlign: 'center' }}>
            TaxLegal is led by experienced professionals who bring together decades of expertise in taxation, legal advisory, litigation, compliance, and corporate governance.
            Our multidisciplinary team works collaboratively to provide thoughtful advice, practical solutions, and responsive service tailored to each client's unique requirements.
          </p>
        </div>

        <div className="leadership-profiles">
          {leadershipData.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
