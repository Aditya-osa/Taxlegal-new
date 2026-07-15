import React, { useState, useEffect, useRef } from 'react';
import { Award, Handshake, Users, Clock, ShieldCheck } from 'lucide-react';
import './OurProcess.css';

const processSteps = [
  {
    id: "01",
    title: "Understand Your Business",
    description: "We invest time in understanding your business, industry, challenges, and strategic objectives.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg-icon">
        {/* Person head and body */}
        <circle cx="36" cy="36" r="14" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 74 C14 56 58 56 58 74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Magnifying Glass */}
        <circle cx="68" cy="64" r="16" fill="#ffffff" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M80 76 L92 88" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Assess & Analyse",
    description: "We evaluate the key issues, risks, and opportunities through a practical and comprehensive analysis.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg-icon">
        {/* Clipboard */}
        <rect x="22" y="18" width="48" height="64" rx="6" stroke="currentColor" strokeWidth="6" fill="#ffffff" />
        <path d="M36 18 V14 C36 11 39 8 42 8 H50 C53 8 56 11 56 14 V18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <rect x="34" y="15" width="24" height="6" rx="3" fill="currentColor" />
        {/* Checkmarks inside clipboard */}
        <path d="M32 38 L38 44 L50 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 54 L38 60 L50 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Target bullseye on bottom right */}
        <circle cx="72" cy="72" r="20" fill="#ffffff" stroke="currentColor" strokeWidth="6" />
        <circle cx="72" cy="72" r="11" stroke="currentColor" strokeWidth="5" />
        <circle cx="72" cy="72" r="3.5" fill="currentColor" />
        {/* Arrow hitting target */}
        <path d="M88 56 L75 69 M88 56 H78 M88 56 V66" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Develop Tailored Solutions",
    description: "We develop solution options that are technically sound, commercially relevant, and aligned with your goals.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg-icon">
        {/* Speech bubbles */}
        <path d="M20 16 H48 C52 16 54 18 54 22 V34 C54 38 52 40 48 40 H34 L26 48 V40 H20 C16 40 14 38 14 34 V22 C14 18 16 16 20 16 Z" stroke="currentColor" strokeWidth="5" fill="#ffffff" strokeLinejoin="round" />
        <line x1="24" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        
        <path d="M56 18 H80 C84 18 86 20 86 24 V34 C86 38 84 40 80 40 H74 V48 L66 40 H56 C52 40 50 38 50 34 V24 C50 20 52 18 56 18 Z" stroke="currentColor" strokeWidth="5" fill="#ffffff" strokeLinejoin="round" />
        <line x1="60" y1="29" x2="76" y2="29" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

        {/* 3 People below */}
        {/* Left person (in back) */}
        <circle cx="24" cy="62" r="8" stroke="currentColor" strokeWidth="5" />
        <path d="M10 86 C10 75 38 75 38 86" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        {/* Right person (in back) */}
        <circle cx="76" cy="62" r="8" stroke="currentColor" strokeWidth="5" />
        <path d="M62 86 C62 75 90 75 90 86" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        {/* Center person (in front) */}
        <circle cx="50" cy="58" r="10" stroke="currentColor" strokeWidth="5" fill="#ffffff" />
        <path d="M34 86 C34 72 66 72 66 86" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="#ffffff" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Deliver Practical Advice",
    description: "We provide clear, actionable advice focusing on implementation, efficiency, and managing risk.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg-icon">
        {/* Document body */}
        <path d="M26 14 H60 L76 30 V80 C76 84 73 86 68 86 H26 C21 86 18 84 18 80 V20 C18 16 21 14 26 14 Z" stroke="currentColor" strokeWidth="6" fill="#ffffff" strokeLinejoin="round" />
        <path d="M60 14 V30 H76" stroke="currentColor" strokeWidth="6" fill="#ffffff" strokeLinejoin="round" />
        {/* Lines of text */}
        <line x1="30" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="52" x2="64" y2="52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="66" x2="48" y2="66" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        {/* Checkmark badge at bottom right */}
        <circle cx="74" cy="74" r="18" fill="#ffffff" stroke="currentColor" strokeWidth="6" />
        <path d="M64 74 L71 81 L85 67" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Support & Plan Ahead",
    description: "We stay engaged to support implementation and help you navigate future challenges and opportunities.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg-icon">
        {/* Bar chart */}
        <rect x="22" y="56" width="14" height="28" rx="3" stroke="currentColor" strokeWidth="6" fill="#ffffff" />
        <rect x="43" y="40" width="14" height="44" rx="3" stroke="currentColor" strokeWidth="6" fill="#ffffff" />
        <rect x="64" y="24" width="14" height="60" rx="3" stroke="currentColor" strokeWidth="6" fill="#ffffff" />
        {/* Base horizontal line */}
        <line x1="14" y1="84" x2="86" y2="84" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        {/* Upward trending arrow arching over the top */}
        <path d="M20 40 L42 22 L58 30 L82 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M66 10 H82 V26" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const pillarsData = [
  {
    id: 1,
    title: "Technical Excellence",
    icon: <Award className="pillar-lucide-icon" />
  },
  {
    id: 2,
    title: "Commercial Insight",
    icon: <Handshake className="pillar-lucide-icon" />
  },
  {
    id: 3,
    title: "Industry Experience",
    icon: <Users className="pillar-lucide-icon" />
  },
  {
    id: 4,
    title: "Timely & Responsive",
    icon: <Clock className="pillar-lucide-icon" />
  },
  {
    id: 5,
    title: "Long-term Partnership",
    icon: <ShieldCheck className="pillar-lucide-icon" />
  }
];

const OurProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className={`process-section tl-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="about-container">
        
        <div className="process-header">
          <h2 className="process-title">Our Process</h2>
          <div className="process-subtitle-line"></div>
          
          <div className="process-intro">
            <p>
              Every client engagement begins with understanding the business before recommending a solution.
            </p>
            <p>
              We combine technical expertise, commercial awareness, and industry experience to deliver advice that is practical, timely, and aligned with our clients' strategic objectives.
            </p>
            <p>
              Our focus is not only on solving today's challenges but also on helping clients prepare for tomorrow.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div 
                className="process-step animate-step" 
                style={{ transitionDelay: isVisible ? `${index * 0.28}s` : '0s' }}
              >
                <div className="step-circle-wrapper">
                  <div className="step-badge">{step.id}</div>
                  <div className="step-circle">
                    {step.icon}
                  </div>
                </div>
                <div className="step-connector-down"></div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {index < processSteps.length - 1 && (
                <div 
                  className="step-arrow-wrapper animate-arrow" 
                  style={{ transitionDelay: isVisible ? `${(index * 0.48) + 0.14}s` : '0s' }}
                >
                  <div className="step-arrow-line">
                    <div className="step-arrow-pulse"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pillars-banner animate-banner" style={{ transitionDelay: isVisible ? '1.5s' : '0s' }}>
          {pillarsData.map((pillar) => (
            <div key={pillar.id} className="pillar-item">
              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>
              <span className="pillar-text">{pillar.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
