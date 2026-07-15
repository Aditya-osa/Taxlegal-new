import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamData } from '../../data/teamData';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LeadershipCard from '../../components/AboutPage/LeadershipCard';
import { Gavel, Landmark, FileText, Users, User, GraduationCap, ExternalLink, Handshake, ShieldCheck, Shield, Scale, Phone, ArrowRight, ShieldAlert, BriefcaseBusiness, Car, Building2, Lock, IndianRupee, HandCoins, Monitor, Book, Target, FileSearch, FileCheck, BookOpen, Globe, TrendingUp, FileSignature, CircleDollarSign, Search, ClipboardCheck, Award, PieChart } from 'lucide-react';
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
              {(member.slug === 'ajay-mane' || member.slug === 'ashutosh-agrawal') && (
                <h4 style={{ color: 'var(--red)', fontSize: '18px', fontWeight: '500', margin: '10px 0 10px 0' }}>
                  {member.education.join(' | ')}
                </h4>
              )}
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
                
                {member.education && (
                  <div className="ppt-info-row">
                    <div className="ppt-icon-circle">
                      <GraduationCap size={20} strokeWidth={1.5} />
                    </div>
                    <div className="ppt-info-text">
                      <span className="ppt-info-desc">
                        {member.education.join(' | ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="premium-profile-bottom">
            {member.slug === 'adv-suresh-sharma' ? (
              <div className="ppb-left">
                <h2 className="ppb-heading">Bio</h2>
                <div className="ppb-underline"></div>
                <div className="ppb-content">
                  <p>{bioParagraphs[0]}</p>
                  <p>{bioParagraphs[1]}</p>
                  
                  <p><strong>ADVISORY STRENGTH</strong><br/>
                  Specializes in strategic GST advisory and litigation support, particularly in matters involving:</p>
                  <ul className="suresh-expertise-list" style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                    {member.expertise.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '8px', color: 'var(--text-light)', lineHeight: '1.6' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <p>{bioParagraphs[2]}</p>
                </div>
              </div>
            ) : member.slug === 'ajay-mane' || member.slug === 'ashutosh-agrawal' ? (
              <div className="ppb-left">
                <h2 className="ppb-heading">PROFILE OVERVIEW</h2>
                <div className="ppb-underline"></div>
                <div className="ppb-content">
                  {bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="ppb-left">
                <h2 className="ppb-heading">Bio</h2>
                <div className="ppb-underline"></div>
                <div className="ppb-content">
                  {bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}
            
            <div className="ppb-right">
              {member.slug === 'ajay-mane' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Scale size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Commercial Litigation</h4>
                      <p className="ppb-right-desc">Representing clients in commercial and civil matters before the Bombay High Court, subordinate courts, and other judicial forums.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Gavel size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Arbitration & ADR</h4>
                      <p className="ppb-right-desc">Handling arbitration proceedings under the Arbitration and Conciliation Act, 1996, including matters under Sections 9, 11, 34, and 37.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><FileText size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Contractual & Civil Dispute</h4>
                      <p className="ppb-right-desc">Advising and representing clients in contractual disputes, civil litigation, and related legal proceedings.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Handshake size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Transactional & Advisory</h4>
                      <p className="ppb-right-desc">Advising on transactional matters and regulatory compliance under FEMA and drafting/reviewing commercial agreements and documentation.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'ashutosh-agrawal' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><ClipboardCheck size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Audit & Assurance</h4>
                      <p className="ppb-right-desc">Conducting internal audits, assurance engagements, and compliance reviews to ensure financial accuracy and transparency.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><TrendingUp size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Advisory & Compliance</h4>
                      <p className="ppb-right-desc">Providing tax advisory, planning, and compliance support across direct & indirect tax matters.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><FileText size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Financial Reporting & Planning</h4>
                      <p className="ppb-right-desc">Assisting in financial reporting, budgeting, forecasting, and analysis to support informed business decisions.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Handshake size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Business Advisory & Governance</h4>
                      <p className="ppb-right-desc">Advising businesses on process improvement, internal controls, and regulatory governance for sustainable growth.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'adv-vivek-sharma' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Monitor size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Financial Fraud & Cyber Crime</h4>
                      <p className="ppb-right-desc">Handling complex cyber crime investigations, digital fraud and financial crime litigation.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Scale size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Dispute Resolution & Litigation</h4>
                      <p className="ppb-right-desc">Representation across civil, criminal, commercial, matrimonial and banking disputes.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><IndianRupee size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Recovery & Commercial Matters</h4>
                      <p className="ppb-right-desc">Expertise in recovery proceedings, Negotiable Instruments Act matters and commercial litigation.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={26} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Court Representation</h4>
                      <p className="ppb-right-desc">Appearances before High Courts, Trial Courts, Consumer Forums, MACT Tribunals and other judicial & quasi-judicial forums across India.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'adv-suresh-sharma' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Gavel size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Advisory & Litigation</h4>
                      <p className="ppb-right-desc">Strategic advisory and litigation support in Goods and Services Tax (GST) and Income Tax matters.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><ShieldAlert size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Enforcement Proceedings</h4>
                      <p className="ppb-right-desc">Representation in GST audits, inspections, investigations, search, seizure, and arrest-related matters.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><FileText size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Dispute & Appellate Representation</h4>
                      <p className="ppb-right-desc">Handling complex tax disputes with strong focus on appellate remedies and due process.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Corporate Tax & Compliance Strategy</h4>
                      <p className="ppb-right-desc">Corporate tax structuring, compliance frameworks, and risk mitigation through practical and defensible strategies.</p>
                    </div>
                  </div>

                </>
              ) : member.slug === 'adv-varun-sharma' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Gavel size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Advisory</h4>
                      <p className="ppb-right-desc">Providing strategic tax advisory on Direct and Indirect Taxation, tax planning, compliance, and structuring for businesses and individuals.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Shield size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Litigation & Representation</h4>
                      <p className="ppb-right-desc">Representing clients in tax disputes, adjudication, and appellate proceedings before statutory authorities, tribunals, and higher courts.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><FileCheck size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Tax Compliance & Risk Management</h4>
                      <p className="ppb-right-desc">Advising on tax compliance, returns, assessments, and regulatory filings, ensuring adherence to statutory requirements and risk mitigation.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Corporate & Commercial Advisory</h4>
                      <p className="ppb-right-desc">Advising on corporate tax matters, commercial transactions, regulatory compliance, and civil & commercial legal issues with a practical and business-oriented approach.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'adv-alok-shukla' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Lock size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Criminal & Economic Offences</h4>
                      <p className="ppb-right-desc">Expertise in EOW, CBI, MPID matters, Narcotics & NDPS litigation and other criminal proceedings.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Scale size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Civil, Commercial & Banking Litigation</h4>
                      <p className="ppb-right-desc">Representation in civil, commercial, banking and insurance disputes including recovery proceedings.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Shield size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Insurance & MACT Matters</h4>
                      <p className="ppb-right-desc">Empanelled with insurance companies; expert in MACT proceedings, insurer defence and insurance claim disputes.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Court & Tribunal Representation</h4>
                      <p className="ppb-right-desc">Appearances before High Courts, Trial Courts, Consumer Forums, MACT Tribunals and judicial & quasi-judicial forums across India.</p>
                    </div>
                  </div>
                </>
              ) : member.slug === 'cs-sanjay-dhadich' ? (
                <>
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><BookOpen size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Corporate Structuring & Advisory</h4>
                      <p className="ppb-right-desc">Expertise in corporate structuring, company law advisory, foreign investment regulations and strategic business consulting.</p>
                    </div>
                  </div>
                  
                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Globe size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Foreign Investment Advisory</h4>
                      <p className="ppb-right-desc">Advisory on Foreign Direct Investment (FDI), Overseas Direct Investment (ODI), incorporation of foreign subsidiaries, companies with foreign promoters and Section 8 Companies.</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><ShieldCheck size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Regulatory Compliance</h4>
                      <p className="ppb-right-desc">Comprehensive advisory on compliance and regulatory approvals under the Companies Act, 2013 and the Foreign Exchange Management Act (FEMA).</p>
                    </div>
                  </div>

                  <div className="ppb-right-item">
                    <div className="ppb-right-icon"><Landmark size={24} strokeWidth={1.5} /></div>
                    <div className="ppb-right-text">
                      <h4 className="ppb-right-title">Legal Advisory & Documentation</h4>
                      <p className="ppb-right-desc">Assisting businesses with corporate governance, regulatory filings, drafting and review of commercial agreements, compounding of offences and legal documentation.</p>
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
            
            <div className="premium-expertise-grid" style={member.slug === 'adv-varun-sharma' ? { gridTemplateColumns: 'repeat(8, 1fr)' } : {}}>
              {member.slug === 'adv-suresh-sharma' ? (
                <>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>GST Advisory<br/>& Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <IndianRupee className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Income Tax Advisory<br/>& Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Gavel className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Enforcement &<br/>Investigations</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax Compliance &<br/>Strategy</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Corporate Tax Structuring<br/>& Advisory</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Appeals & Dispute<br/>Resolution</h4>
                  </div>
                </>
              ) : member.slug === 'adv-vivek-sharma' ? (
                <>
                  <div className="premium-expertise-item">
                    <Monitor className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Financial Fraud & Cyber Crime</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Civil, Criminal & Commercial Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <IndianRupee className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Recovery & Negotiable Instruments Act</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Consumer & MACT Matters</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Matrimonial Disputes</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">RERA & Real Estate Litigation</h4>
                  </div>
                </>
              ) : member.slug === 'cs-sanjay-dhadich' ? (
                <>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Corporate Legal<br/>Consulting</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <TrendingUp className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Business Advisory &<br/>Strategic Consulting</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Company Law<br/>Compliance</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileSignature className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Drafting & Review of<br/>Commercial Agreements</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <CircleDollarSign className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Foreign Direct Investment (FDI) &<br/>Overseas Direct Investment (ODI)</h4>
                  </div>
                </>
              ) : member.slug === 'adv-alok-shukla' ? (
                <>
                  <div className="premium-expertise-item">
                    <Lock className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Criminal &<br/>Economic Offences</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Civil, Commercial &<br/>Banking Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Shield className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Insurance &<br/>MACT Matters</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Recovery<br/>Proceedings</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <User className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Consumer<br/>Disputes</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Court & Tribunal<br/>Representation</h4>
                  </div>
                </>
              ) : member.slug === 'adv-varun-sharma' ? (
                <>
                  <div className="premium-expertise-item">
                    <Shield className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax<br/>Advisory</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax<br/>Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Income<br/>Tax</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Direct<br/>Tax</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Indirect<br/>Tax</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Search className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax Search,<br/>Seizure & Arrest</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax Appeals &<br/>Tribunal Matters</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Shield className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>ED & PMLA<br/>Matters</h4>
                  </div>
                </>
              ) : member.slug === 'ajay-mane' ? (
                <>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Commercial<br/>Litigation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Gavel className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Arbitration &<br/>ADR</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Contractual &<br/>Civil Dispute</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Handshake className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Commercial<br/>Agreements &<br/>Contract Drafting</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Globe className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Transactional Matters<br/>& FEMA Advisory</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Search className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Legal Research &<br/>Case Strategy</h4>
                  </div>
                </>
              ) : member.slug === 'ashutosh-agrawal' ? (
                <>
                  <div className="premium-expertise-item">
                    <ClipboardCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Internal Audits &<br/>Assurance Services</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <BookOpen className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Financial Accounting<br/>& Reporting</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <ShieldCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Tax Advisory &<br/>Regulatory Compliance</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <TrendingUp className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Financial Planning &<br/>Business Advisory</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <ShieldCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Risk Assessment &<br/>Internal Controls</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title" style={{ textAlign: 'center' }}>Compliance &<br/>Governance Advisory</h4>
                  </div>
                </>
              ) : (
                <>
                  <div className="premium-expertise-item">
                    <FileText className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Contract Drafting, Vetting & Negotiation</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Handshake className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Commercial & Corporate Advisory</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Landmark className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Banking & Recovery Matters</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Users className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Employment & Labour Laws</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <ShieldCheck className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">IP & Regulatory Compliance</h4>
                  </div>
                  <div className="premium-expertise-item">
                    <Scale className="premium-expertise-icon" size={34} color="#c42a2f" strokeWidth={1.5} />
                    <h4 className="premium-expertise-item-title">Dispute Resolution & Arbitration</h4>
                  </div>
                </>
              )}
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
                  {member.slug === 'adv-suresh-sharma' || member.slug === 'adv-varun-sharma' ? (
                    <div className="book-grid">
                      {/* Book 1 */}
                      <div className="book-container">
                        <div className="book-wrapper">
                          <div className="book-static-page">
                            <img src="/assets/Books/backpage.png" alt="Inner Page Image" />
                          </div>
                          <div className="book-hinge">
                            <div className="book-cover-front">
                              <img src="/assets/Books/gst.jpg.jpeg" alt="Front Cover" />
                            </div>
                            <div className="book-cover-back-face"></div>
                          </div>
                        </div>
                      </div>

                      {/* Book 2 */}
                      <div className="book-container">
                        <div className="book-wrapper">
                          <div className="book-static-page">
                            <img src="/assets/Books/backpage3.jpeg" alt="Inner Page Image" />
                          </div>
                          <div className="book-hinge">
                            <div className="book-cover-front">
                              <img src="/assets/Books/book1.jpeg" alt="Front Cover" />
                            </div>
                            <div className="book-cover-back-face"></div>
                          </div>
                        </div>
                      </div>

                      {/* Book 3 (Only for Varun Sharma, or both if they share it, but varun has 3 publications in data) */}
                      {member.slug === 'adv-varun-sharma' && (
                        <div className="book-container">
                          <div className="book-wrapper">
                            <div className="book-static-page">
                              <img src="/assets/Books/backpage2.jpeg" alt="Inner Page Image" />
                            </div>
                            <div className="book-hinge">
                              <div className="book-cover-front">
                                <img src="/assets/Books/book2.jpeg" alt="Front Cover" />
                              </div>
                              <div className="book-cover-back-face"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          )}

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
