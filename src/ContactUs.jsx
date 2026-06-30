import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./ContactUs.css";

const heroImages = [
  "/assets/team/Office2.png",
  "/assets/team/Connect-with-us.jpeg"
];

const ContactUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Taxation Advisory",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        service: "Taxation Advisory",
        message: "",
      });

      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === currentImage ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}

          <div className="hero-overlay"></div>

          <div className="contact-hero-content">

            <h1>
              Get in <span>Touch</span>
            </h1>

            <p>
              Securing your legal and fiscal future through high-precision
              expertise. Our dedicated team is ready to provide strategic
              counsel tailored to your complex needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="section-heading">
                <h2>Schedule a Consultation</h2>
               
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Taxation Advisory</option>
                    <option>Legal Counsel</option>
                    <option>Regulatory Compliance</option>
                    <option>Corporate Restructuring</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="How can our experts assist you?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  {submitted ? "Inquiry Received ✓" : "Submit Inquiry"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-card">
                <h3>Reach Us Directly</h3>

                <div className="info-item">
                  <div className="icon">📞</div>
                  <div>
                    <span>Phone Number</span>
                    <p>+91 9819705068</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon">✉️</div>
                  <div>
                    <span>Email Address</span>
                    <p>info@taxlegal.in</p>
                  </div>
                </div>
              </div>

              <div className="map-card">
  <iframe
    title="Office Location"
    src="https://maps.google.com/maps?q=401-404,Prabhat%20Center,CBD-Belapur,Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  />

  <a
    href="https://maps.google.com?q=401-404,PrabhatCenter,CBD-Belapur,NaviMumbai"
    target="_blank"
    rel="noopener noreferrer"
    className="map-overlay"
  >
    📍 Get Directions
  </a>
</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-heading">
              <h2>Institutional Excellence</h2>
              <p>Certified Advisory for Global Entities</p>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <h3>30+</h3>
                <span>Years Active</span>
              </div>

              <div className="stat">
                <h3>2.5K</h3>
                <span>Clients Served</span>
              </div>

              <div className="stat">
                <h3>100%</h3>
                <span>Compliance Rate</span>
              </div>
            </div>
          </div>
        </section>{/* Footer */}
      <footer className="tl-footer">
        <div className="container">
          <div className="tl-footer-grid">
            <div style={{marginLeft: '80px'}}>
              <a href="#top" className="tl-logo" aria-label="TaxLegal home">
                <img src="/assets/logo.png" alt="TaxLegal Logo" className="tl-logo-img tl-logo-img--footer" />
              </a>
              <p className="desc">A multidisciplinary firm of Advocates, Chartered Accountants, and Company Secretaries, established 1996.</p>
            </div>
            <div>
              <h5>Reach Us</h5>
              <p style={{lineHeight: '1.9'}}>401–404, Prabhat Center<br/>CBD-Belapur, Navi Mumbai<br/>+91-9819705068<br/>info@taxlegal.in</p>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Company Formation</a></li>
                <li><a href="#services">Statutory Registrations</a></li>
                <li><a href="#services">Audit Services</a></li>
                <li><a href="#services">Tax Litigation</a></li>
              </ul>
            </div>
            <div>
              <h5>Links</h5>
              <ul>
                <li><a href="#services">NCLT Matters</a></li>
                <li><a href="#services">Tax Advisory</a></li>
                <li><a href="#services">Compliance</a></li>
                <li><a href="#services">GST Litigation</a></li>
              </ul>
            </div>
          </div>
          <div className="tl-footer-bottom">
            <span>© 2026 TaxLegal. All rights reserved.</span>
            <span>CBD-Belapur, Navi Mumbai</span>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default ContactUs;