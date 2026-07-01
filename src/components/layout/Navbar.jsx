import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");

  const navRef = useRef(null);
  const location = useLocation();

  // Sticky nav shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active nav link on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -60% 0px" }
    );

    document.querySelectorAll("section[id], header[id]").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, [location.pathname]);

  return (
    <div className={`tl-nav-wrap ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "open" : ""}`} ref={navRef}>
      <div className="container tl-nav">
        <Link to="/" className="tl-logo">
          <img src="/assets/logo.png" alt="TaxLegal Logo" className="tl-logo-img" />
        </Link>
        <nav className="tl-navlinks">

          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
          <a href="/#industries">Clients</a>
          <Link to="/internship" className={location.pathname === "/internship" ? "active" : ""}>Internship</Link>
          <a href="https://www.incometaxindia.gov.in/income-tax-calculator" target="_blank" rel="noopener noreferrer">Tax Calculator</a>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
        </nav>
        <div className="tl-nav-cta">
          <button
            className="tl-burger"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className="tl-mobile-menu">

        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <a href="/#industries" onClick={() => setIsMenuOpen(false)}>Clients</a>
        <Link to="/internship" onClick={() => setIsMenuOpen(false)}>Internship</Link>
        <a href="https://www.incometaxindia.gov.in/income-tax-calculator" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Tax Calculator</a>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
