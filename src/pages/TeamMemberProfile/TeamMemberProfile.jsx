import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LeadershipCard from '../../components/AboutPage/LeadershipCard';
import './TeamMemberProfile.css';


const TeamMemberProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  // Split bio into paragraphs properly
  const bioParagraphs = member.detailedBio ? member.detailedBio.split('\n\n') : [];

  return (
    <div className="profile-page-wrapper">
      <Header />

      <main className="profile-main-content">
        <div className="profile-main-container">
          
          {/* Top Section */}
          <div className="profile-top-section">
            
            {/* Left Profile Card */}
            <div className="profile-card-col">
              <div className="new-profile-card">
                <div className="npc-image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="npc-info">
                  <h1>{member.name}</h1>
                  <h3 className="npc-role">{member.role}</h3>
                  <p className="npc-location">{member.shortDescription || "Bombay High Court"}</p>
                  
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="npc-linkedin-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Bio Column */}
            <div className="profile-bio-col">
              <div className="bio-header">
                <h2>Biography</h2>
                <div className="bio-divider"></div>
              </div>
              <div className="bio-content">
                {bioParagraphs.map((para, idx) => (
                  <p key={idx} style={{ whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            </div>
            
          </div>

          {/* Bottom Section */}
          <div className="profile-bottom-section">
            
            {/* Left Expertise Card */}
            <div className="profile-bottom-left">
              {member.expertise && member.expertise.length > 0 && (
                <div className="info-card expertise-card">
                  <div className="edu-header">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="edu-header-icon"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <h2>Areas of Expertise</h2>
                  </div>
                  <ul className="expertise-list">
                    {member.expertise.map((item, idx) => (
                      <li key={idx}>
                        <svg className="bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="profile-bottom-right">
              {member.education && member.education.length > 0 && (
                <div className="info-card education-card">

                  {/* Header */}
                  <div className="edu-header">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="edu-header-icon"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <h2>Education & Credentials</h2>
                  </div>

                  {/* Education List */}
                  <div className="education-list">
                    {member.education.map((item, idx) => (
                      <div className="edu-row" key={idx}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="edu-item-icon"
                        >
                          <rect x="5" y="3" width="14" height="18" rx="2" />
                          <path d="M9 3v18" />
                          <path d="M9 17h10" />
                        </svg>
                        <span className="edu-item-text">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              <div className="info-card cta-card">
                <h2>Need Legal Assistance?</h2>
                <button className="cta-btn" onClick={() => navigate('/contact')}>
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container other-members-section">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Other Team Members</h2>
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
