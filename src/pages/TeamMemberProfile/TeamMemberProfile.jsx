import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LeadershipCard from '../../components/AboutPage/LeadershipCard';
import './TeamMemberProfile.css';

const TeamMemberProfile = () => {
  const { slug } = useParams();
  
  const member = teamData.find(m => m.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return (
      <div className="profile-page-wrapper">
        <Header />
        <div className="profile-not-found">
          <h2>Team Member Not Found</h2>
          <Link to="/" className="back-btn">Go Back Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="profile-page-wrapper">
      <Header />
      
      <main className="profile-main-content">
        <div className="container profile-container">
          
          <div className="profile-sidebar">
            <div className="profile-image-container">
              <img src={member.image} alt={member.name} className="profile-image" />
            </div>
            <div className="profile-basic-info">
              <h1 className="profile-name">{member.name}</h1>
              <h3 className="profile-role">{member.role}</h3>
              {member.shortDescription && (
                <p className="profile-short-desc">{member.shortDescription}</p>
              )}
              
              <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="profile-contact-btn linkedin-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="profile-details-content">
            <div className="profile-section bio-section">
              <h2 className="profile-section-title">Biography</h2>
              <div className="profile-bio">
                <p>{member.detailedBio}</p>
              </div>
            </div>

            <div className="profile-cards-grid">
              {member.expertise && member.expertise.length > 0 && (
                <div className="profile-card">
                  <h3 className="profile-card-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-title-icon">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Areas of Expertise
                  </h3>
                  <ul className="profile-card-list">
                    {member.expertise.map((item, index) => (
                      <li key={index}>
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.education && member.education.length > 0 && (
                <div className="profile-card">
                  <h3 className="profile-card-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-title-icon">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    Education & Credentials
                  </h3>
                  <ul className="profile-card-list">
                    {member.education.map((item, index) => (
                      <li key={index}>
                        <svg className="edu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
        </div>
        
        <div className="container other-members-section">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '40px'}}>Other Team Members</h2>
          <div className="other-members-grid">
            {teamData.filter(m => m.id !== member.id).map(otherMember => (
              <LeadershipCard key={otherMember.id} member={otherMember} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
