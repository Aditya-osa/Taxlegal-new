import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LeadershipCard from '../../components/AboutPage/LeadershipCard';
import { Gavel, Landmark, FileText, Users, GraduationCap, ExternalLink, Handshake, ShieldCheck, Scale, Phone, ArrowRight, ShieldAlert, BriefcaseBusiness, Car, Building2, Lock, IndianRupee, HandCoins } from 'lucide-react';
import './TeamMemberProfile.css';


const TeamMemberProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const member = teamData.find(m => m.slug === slug);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
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

  const bioParagraphs = member.detailedBio ? member.detailedBio.split('\n\n') : [];

  return (
    <div className="profile-page-wrapper">
      <Header />

      <main className="profile-main-content">
        <div className="profile-main-container">
          <div className="premium-profile-card">
          
          {/* Top Section */}
          <div className="premium-profile-top">
            <div className="ppt-left">
              <img src={member.image} alt={member.name} className={member.flipImage ? 'flipped-image' : ''} />
            </div>
            
            <div className="ppt-right">
              <h1 className="ppt-name">{member.name}</h1>
              <h3 className="ppt-role">{member.shortDescription || member.role}</h3>
              <div className="ppt-divider"></div>
              
              <div className="ppt-info-rows">
                {member.linkedin && (
                  <div className="ppt-info-row">
                    <div className="ppt-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </div>
                    <div className="ppt-info-text">
                      <span className="ppt-info-title">LinkedIn:</span>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ppt-info-link">
                        {member.linkedin.replace(/^https?:\/\/(www\.)?/, '')} <ExternalLink size={14} className="ppt-ext-link" />
                      </a>
                    </div>
                  </div>
                )}
                
                {member.education && member.education.length > 0 && (
                  <div className="ppt-info-row">
                    <div className="ppt-icon-circle">
                      <GraduationCap size={22} strokeWidth={2} />
                    </div>
                    <div className="ppt-info-text">
                      <span className="ppt-info-desc">
                        {member.education.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="premium-profile-bottom">
            <div className="ppb-left">
              <h2 className="ppb-heading">Bio</h2>
              <div className="ppb-underline"></div>
              <div className="ppb-content">
                {bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            
            <div className="ppb-right">
              {member.slug === 'adv-vivek-sharma' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Lock size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Financial Fraud & Cyber Crime</h4>
                      <p className="ppb-right-desc">Handling complex cyber crime investigations, digital fraud and financial crime litigation.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Scale size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Dispute Resolution & Litigation</h4>
                      <p className="ppb-right-desc">Representation across civil, criminal, commercial, matrimonial and banking disputes.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><IndianRupee size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Recovery & Commercial Matters</h4>
                      <p className="ppb-right-desc">Expertise in recovery proceedings, Negotiable Instruments Act matters and commercial litigation.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Court Representation</h4>
                      <p className="ppb-right-desc">Appearances before High Courts, Trial Courts, Consumer Forums, MACT Tribunals and other judicial & quasi-judicial forums across India.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'adv-alok-shukla' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><ShieldAlert size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Criminal & EOW Matters</h4>
                      <p className="ppb-right-desc">Expertise in complex matters involving the EOW, CBI, MPID, and NDPS litigation.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><ShieldCheck size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Insurance & MACT</h4>
                      <p className="ppb-right-desc">Extensively represented insurers in MACT proceedings, insurer defence and claim disputes.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Commercial & Banking</h4>
                      <p className="ppb-right-desc">Three decades of experience spanning civil, commercial, and banking recovery proceedings.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Scale size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Court Representation</h4>
                      <p className="ppb-right-desc">Appearances before the High Courts, Trial Courts, Consumer Forums, and MACT Tribunals.</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Gavel size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Arbitration & ADR</h4>
                      <p className="ppb-right-desc">IIAM Certified Arbitrator with expertise in commercial arbitration and alternative dispute resolution.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Corporate Legal Advisory</h4>
                      <p className="ppb-right-desc">Advising businesses on commercial transactions, legal risk, governance and compliance.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><FileText size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Litigation</h4>
                      <p className="ppb-right-desc">Extensive experience across civil, commercial and criminal litigation matters.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Users size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Court Representation</h4>
                      <p className="ppb-right-desc">Appearances before the Bombay High Court, Trial Courts, Consumer Forums and other forums.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* New Areas of Expertise Section */}
          <div className="premium-expertise-section">
            <h2 className="premium-expertise-title">Areas of Expertise</h2>
            <div className="premium-expertise-divider"></div>
            
            <div className="premium-expertise-grid">
              {member.slug === 'adv-vivek-sharma' ? (
                <>
                  <div className="premium-expertise-item">
                    <Lock className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Financial Fraud &</h4>
                    <p className="premium-expertise-item-subtitle">Cyber Crime</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Civil, Criminal &</h4>
                    <p className="premium-expertise-item-subtitle">Commercial Litigation</p>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Recovery &</h4>
                    <p className="premium-expertise-item-subtitle">Negotiable Instruments Act</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Consumer &</h4>
                    <p className="premium-expertise-item-subtitle">MACT Matters</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Matrimonial</h4>
                    <p className="premium-expertise-item-subtitle">Disputes</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">RERA & Real Estate</h4>
                    <p className="premium-expertise-item-subtitle">Litigation</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Contract Drafting,</h4>
                    <p className="premium-expertise-item-subtitle">Vetting & Negotiation</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Handshake className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Commercial & Corporate</h4>
                    <p className="premium-expertise-item-subtitle">Advisory</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Banking & Recovery</h4>
                    <p className="premium-expertise-item-subtitle">Matters</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Employment &</h4>
                    <p className="premium-expertise-item-subtitle">Labour Laws</p>
                  </div>
                  <div className="premium-expertise-item">
                    <ShieldCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">IP & Regulatory</h4>
                    <p className="premium-expertise-item-subtitle">Compliance</p>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Dispute Resolution</h4>
                    <p className="premium-expertise-item-subtitle">& Arbitration</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* New Call-to-Action Banner */}
          <div className="premium-cta-banner">
            <div className="premium-cta-left">
              <div className="premium-cta-circle">
                <Phone size={22} color="white" strokeWidth={1.5} />
              </div>
              <div className="premium-cta-text">
                <h3 className="premium-cta-heading">Need Legal Assistance?</h3>
                <p className="premium-cta-desc">Let's discuss how I can help you and your business.</p>
              </div>
            </div>
            <div className="premium-cta-right">
              <button className="premium-cta-btn">
                Get in Touch <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Publications Full-Width Section */}
          {member.publications && member.publications.length > 0 && (
            <div className="premium-pub-section">
              <div className="premium-pub-header">
                <h2 className="premium-pub-title">Publications</h2>
                <div className="premium-pub-divider"></div>
              </div>
              
              {member.publicationsNote && (
                <p className="premium-pub-desc">
                  {member.publicationsNote}
                </p>
              )}
              
              <div className="premium-books-container">
                <div className="premium-books-inner">
                  <h3 className="premium-books-title">Books</h3>
                  <ul className="premium-books-list">
                    {member.publications.map((pub, idx) => (
                      <li key={idx}>
                        <svg className="pub-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
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
