import React from 'react';
import LeadershipCard from './LeadershipCard';
import BookGallery from './BookGallery';
import './LeadershipTeam.css';

const leadershipData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "Managing Partner, FCA",
    experience: "30+ Years Experience",
    bio: "Rajesh leads the firm's taxation and audit practice. He has extensively advised multinational corporations on cross-border taxation and corporate restructuring.",
    expertise: ["Direct Taxation", "Corporate Audit", "FEMA Compliance"],
    achievements: ["Former President, Tax Bar Association", "Keynote Speaker at ICAI"],
    social: {
      linkedin: "#",
      email: "rajesh@taxlegal.in"
    },
    books: [
      { id: "b1", title: "Mastering Corporate Tax", year: "2023", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" },
      { id: "b2", title: "Audit Protocols in India", year: "2020", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop" }
    ],
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Desai",
    designation: "Senior Advocate",
    experience: "25+ Years Experience",
    bio: "Priya heads the litigation and dispute resolution desk. She has successfully represented clients in high-stakes matters before the Supreme Court and Tribunals.",
    expertise: ["Commercial Litigation", "Arbitration", "Appellate Strategy"],
    achievements: ["Featured in Top 50 Legal Experts", "Landmark Supreme Court wins"],
    social: {
      linkedin: "#",
      email: "priya@taxlegal.in"
    },
    books: [
      { id: "b3", title: "The Art of Litigation", year: "2022", cover: "https://images.unsplash.com/photo-1589998059171-989d887df446?q=80&w=400&auto=format&fit=crop" },
      { id: "b4", title: "Corporate Dispute Resolution", year: "2019", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" }
    ],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Vikram Mehta",
    designation: "Partner, FCS",
    experience: "20+ Years Experience",
    bio: "Vikram specializes in corporate governance, secretarial audits, and M&A compliance. He helps startups and enterprises maintain rigorous compliance frameworks.",
    expertise: ["Company Law", "M&A Compliance", "Secretarial Audit"],
    achievements: ["Best Compliance Advisor 2021", "Authored over 50 articles"],
    social: {
      linkedin: "#",
      email: "vikram@taxlegal.in"
    },
    books: [
      { id: "b5", title: "Corporate Governance Guide", year: "2024", cover: "https://images.unsplash.com/photo-1554214895-06d71ae2f1a1?q=80&w=400&auto=format&fit=crop" }
    ],
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop"
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
            Experienced Panel of Experts
          </h2>
          <p className="leadership-intro" style={{ textAlign: 'center' }}>
            Meet the professionals behind Tax.Legal. Our multidisciplinary leadership team combines decades of experience across taxation, legal advisory, corporate compliance, accounting, litigation, and strategic consulting. Many of our experts are published authors, industry speakers, and trusted advisors to businesses across India.
          </p>
        </div>

        <div className="leadership-profiles">
          {leadershipData.map((member) => (
            <div key={member.id} className="leadership-profile-group">
              <LeadershipCard member={member} />
              {member.books && member.books.length > 0 && (
                <BookGallery books={member.books} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
