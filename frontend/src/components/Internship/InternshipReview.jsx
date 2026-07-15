import React, { useEffect, useRef, useState } from "react";
import "./InternshipReview.css";

const row1Reviews = [
  {
    id: 1,
    text: "During this internship, I learned recruitment processes, candidate screening, communication skills, interview coordination, HR operations, and professional workplace etiquettes.",
    author: "Sohan Bavan Patil",
    role: "Human Resources Intern - 2025"
  },
  {
    id: 2,
    text: "I learned video editing, team management, graphic designing, learned content writing, learned content creation, learned corporate management skills.",
    author: "Amruta Nagapure",
    role: "Social Media Intern - 2026"
  },
  {
    id: 3,
    text: "I learned practical skills in web development, teamwork, problem-solving, and working on real-world projects.",
    author: "Trushali Mhatre",
    role: "Web Development Intern - 2025"
  },
  {
    id: 4,
    text: "I walked in as a nervous student and walked out as a confident professional. This program truly lives up to its name.",
    author: "Harshika Shersheli",
    role: "HR Intern - 2026"
  },
  {
    id: 5,
    text: "Learned lead generation, client communication, email etiquette, basic business development skills, and improved my research and data handling abilities.",
    author: "Jaimin Sanghavi",
    role: "Business Dev Intern - 2025"
  },
  {
    id: 6,
    text: "During my HR internship, I learned recruitment processes, candidate screening, interview coordination, communication skills, database management, and professional workplace etiquette.",
    author: "Vankal Jyoti Kailakona",
    role: "HR Intern - 2025"
  },
  {
    id: 7,
    text: "My mentors at TMCPL were incredibly supportive. They trusted me with client calls and that built my confidence immensely.",
    author: "Almaj Chavan",
    role: "Social Media Marketing Intern - 2025"
  },
  {
    id: 8,
    text: "Communication, overall understanding in HR. Helped me turn knowledge into experience, and confidence into action.",
    author: "Sneha Arun Rai",
    role: "Social Media Marketing Intern - 2026"
  }
];

const row2Reviews = [
  {
    id: 9,
    text: "Learned recruitment processes, professional communication, interview coordination, candidate handling, teamwork, corporate etiquette, and confidence in HR responsibilities.",
    author: "Snehal Santosh Jadhav",
    role: "Human Resources Intern - 2026"
  },
  {
    id: 10,
    text: "I learned how to speak confidently, how to go through JD , resume, how to create JD, GD and mail send to the candidate.",
    author: "Shreyashree Sharma",
    role: "HR Intern - 2026"
  },
  {
    id: 11,
    text: "The structured feedback sessions helped me identify my strengths. I still use the frameworks learned here every day.",
    author: "Siddhesh Suresh Pawar",
    role: "Social Media Marketing Intern - 2026"
  },
  {
    id: 12,
    text: "TMCPL didn't just teach me skills — they gave me a mindset. I now approach every challenge with a consultant's perspective.",
    author: "Alvira Shaikh",
    role: "Social Media Marketing Intern - 2026"
  },
  {
    id: 13,
    text: "I learned how the actual human resource works, gained hands-on experience in recruiting process, and how to deal with candidates more efficiently.",
    author: "Tejashri Daiphode",
    role: "Human Resources Intern - 2026"
  },
  {
    id: 14,
    text: "I created content that actually got published on TMCPL's channels. That portfolio piece helped me land my first job.",
    author: "Ishwari Shanmugavel",
    role: "Human Resources Intern - 2026"
  },
  {
    id: 15,
    text: "The internship was a rewarding experience that allowed me to learn, grow, and gain confidence in a professional environment. I appreciate the support and mentorship provided by the team.",
    author: "Nutan More",
    role: "Accounting Intern - 2026"
  }
];

const ReviewCard = ({ text, author, role, linkedin }) => (
  <div className="internship-review-card">
    <div className="quote-icon-wrap">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 9.5C9.5 8.12 10.62 7 12 7C13.38 7 14.5 8.12 14.5 9.5C14.5 10.5 13.9 11.3 13 11.7C13.7 12.3 14.5 13.2 14.5 14.5C14.5 15.88 13.38 17 12 17C10.62 17 9.5 15.88 9.5 14.5C9.5 13.2 10.3 12.3 11 11.7C10.1 11.3 9.5 10.5 9.5 9.5Z" fill="none" />
        <path d="M10 11H6c0-2.5 1.5-4 4-4V5c-3.5 0-6 2.5-6 6v7h8v-7zm10 0h-4c0-2.5 1.5-4 4-4V5c-3.5 0-6 2.5-6 6v7h8v-7z" fill="currentColor" />
      </svg>
    </div>
    <p className="internship-review-text">{text}</p>
    <div className="internship-review-separator" />
    <div className="internship-review-meta">
      <h4 className="internship-review-author">
        <span className="author-name">{author}</span>
        <a href={linkedin || "#"} className="linkedin-link" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          <svg className="linkedin-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </h4>
      <p className="internship-review-role">{role}</p>
    </div>
  </div>
);

const InternshipReview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`internship-review-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="internship-review-header">
        <span className="internship-review-eyebrow">INTERN EXPERIENCES</span>
        <div className="internship-review-header-divider" />
        <h2 className="internship-review-title">
          From Learning to Professional <em>Excellence</em>
        </h2>
        <p className="internship-review-subtitle">
          Every internship is an opportunity to build practical knowledge, professional confidence, and industry-ready skills.
        </p>
        <div className="internship-review-cta-wrap">
          <span className="internship-review-cta">what our interns got to say about our internship program ↓</span>
        </div>
      </div>

      <div className="internship-marquee-container">
        {/* Row 1 - scrolling left */}
        <div className="internship-marquee-row">
          <div className="internship-marquee-track scroll-left">
            {row1Reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            {row1Reviews.map((review) => (
              <ReviewCard key={`${review.id}-dup`} {...review} />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="internship-marquee-row">
          <div className="internship-marquee-track scroll-right">
            {row2Reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            {row2Reviews.map((review) => (
              <ReviewCard key={`${review.id}-dup`} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipReview;
