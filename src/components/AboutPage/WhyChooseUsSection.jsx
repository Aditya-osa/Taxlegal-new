  import React, { useState, useEffect, useRef } from "react";
import {
  Scale,
  Award,
  Briefcase,
  Building2,
  Clock,
  ShieldCheck,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./WhyChooseUsSection.css";

const whyChooseItems = [
  {
    id: 1,
    title: "Experienced Legal Professionals",
    description:
      "Seasoned legal experts with decades of practice. Delivering strategic and dependable representation.",
    icon: Award,
    image: "/assets/Services/experienced_proffessionals.jpg",
  },
  {
    id: 2,
    title: "Business-Centric Thinking",
    description:
      "Legal advice designed around commercial realities. Supporting confident business decisions.",
    icon: Briefcase,
    image: "/assets/Services/client_centric_approach.jpg",
  },
  {
    id: 3,
    title: "Multi-Disciplinary Capability",
    description:
      "Integrated legal expertise across practice areas. Delivering practical and coordinated solutions.",
    icon: Building2,
    image: "/assets/Services/end_to_end_support.jpg",
  },
  {
    id: 4,
    title: "Regulatory Perspective",
    description:
      "Navigating evolving legal and compliance requirements. Helping clients operate with greater certainty.",
    icon: Scale,
    image: "/assets/Services/Regulatory-compilance.png",
  },
  {
    id: 5,
    title: "Efficient Execution",
    description:
      "Responsive advice with clear timelines. Focused on timely delivery and measurable outcomes.",
    icon: Clock,
    image: "/assets/Services/timely_and_effective_solutions.jpg",
  },
  {
    id: 6,
    title: "Trusted Relationships",
    description:
      "Built on professionalism, discretion and accountability. Long-term partnerships driven by client success.",
    icon: ShieldCheck,
    image: "/assets/Services/integrity_and_transparency.jpg",
  },
  {
    id: 7,
    title: "National Reach",
    description:
      "Supporting clients across jurisdictions and industries. Consistent legal advice wherever business operates.",
    icon: Globe,
    image: "/assets/Services/pan_india_presence.jpg",
  },
];

const WhyChooseCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getCardClass = (index) => {
    const N = items.length;
    let offset = (index - activeIndex) % N;
    if (offset > Math.floor(N / 2)) offset -= N;
    if (offset < -Math.floor(N / 2)) offset += N;

    if (offset === 0) return "coverflow-card--center";
    if (offset === -1) return "coverflow-card--left-1";
    if (offset === 1) return "coverflow-card--right-1";
    if (offset === -2) return "coverflow-card--left-2";
    if (offset === 2) return "coverflow-card--right-2";
    return "coverflow-card--hidden";
  };

  return (
    <div
      className="why-choose-coverflow-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="why-choose-coverflow-container">
        <button
          onClick={prevSlide}
          className="why-choose-coverflow-arrow left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {items.map((item, idx) => {
          const Icon = item.icon;
          const cardClass = getCardClass(idx);
          return (
            <div
              className={`why-choose-coverflow-card ${cardClass}`}
              key={item.id}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="why-choose-card-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="why-choose-card-img"
                />
                <div className="why-choose-icon-badge">
                  <Icon size={26} strokeWidth={2} />
                </div>
              </div>
              <div className="why-choose-card-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}

        <button
          onClick={nextSlide}
          className="why-choose-coverflow-arrow right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="why-choose-coverflow-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`why-choose-coverflow-dot ${activeIndex === idx ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-section">
      <h2 className="why-choose-heading">Why Leading Businesses Work With Us</h2>
      <p style={{ color: "white", justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center", marginTop: "0px" }}>
        We combine legal excellence with commercial understanding to help clients manage complexity, <br />reduce risk and make informed decisions with confidence.
      </p>
      <WhyChooseCarousel items={whyChooseItems} />
    </div>
  );
};

export default WhyChooseUsSection;
