import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");

  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
    if (!isHomePage) return;

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
  }, [isHomePage]);

  return (
    <header className="tl-header">
      {/* Topbar */}
      <div className="tl-topbar">
        <div className="container">
          <div className="tl-contacts">
            <a href="tel:+919819705068">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91-9819705068
            </a>
            <a href="mailto:info@taxlegal.in">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" opacity="0"/>
                <path d="M22 6 12 13 2 6"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
              </svg>
              info@taxlegal.in
            </a>
          </div>
          <div className="tl-social">
            <a href="https://www.facebook.com/TaxLegal.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com/taxlegal_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/taxlegal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/taxlegal.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`tl-nav-wrap ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "open" : ""}`} ref={navRef}>
        <div className="container tl-nav">
          {isHomePage ? (
            <a href="#top" className="tl-logo">
              <img src="/assets/logo.png" alt="TaxLegal Logo" className="tl-logo-img" />
            </a>
          ) : (
            <Link to="/" className="tl-logo">
              <img src="/assets/logo.png" alt="TaxLegal Logo" className="tl-logo-img" />
            </Link>
          )}
          <nav className="tl-navlinks">
            {isHomePage ? (
              <a href="#top" className={activeNavLink === "#top" ? "active" : ""}>Home</a>
            ) : (
              <Link to="/">Home</Link>
            )}
            <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            <a href="https://www.incometaxindia.gov.in/income-tax-calculator" target="_blank" rel="noopener noreferrer">Tax Calculator</a>
            <a href="https://taxlegal.bitrix24.site/" target="_blank" rel="noopener noreferrer">Careers</a>
            <a href="https://advocatevarunsharma.com/blogs.html" target="_blank" rel="noopener noreferrer">Insights</a>
            {isHomePage ? (
              <a href="#contact" className={activeNavLink === "#contact" ? "active" : ""}>Contact Us</a>
            ) : (
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
            )}
          </nav>
          <div className="tl-nav-cta">
            {isHomePage ? (
              <a href="#contact" className="tl-btn tl-btn--primary">Schedule Consultation</a>
            ) : (
              <a href="/#contact" className="tl-btn tl-btn--primary">Schedule Consultation</a>
            )}
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
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          {["why", "team", "industries", "contact"].map((link) => (
            isHomePage ? (
              <a key={link} href={`#${link}`} onClick={() => setIsMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
              </a>
            ) : (
              <a key={link} href={`/#${link}`} onClick={() => setIsMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
              </a>
            )
          ))}
          {isHomePage ? (
            <a href="#contact" className="tl-btn tl-btn--primary" style={{marginTop: "10px", justifyContent: "center"}} onClick={() => setIsMenuOpen(false)}>Schedule Consultation</a>
          ) : (
            <a href="/#contact" className="tl-btn tl-btn--primary" style={{marginTop: "10px", justifyContent: "center"}} onClick={() => setIsMenuOpen(false)}>Schedule Consultation</a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
