import React, { useEffect, useState } from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page-wrapper">
      <Header />

      <main className="contact-main-content">
        {/* HERO SECTION */}
        <section
          className="contact-hero-section"
          style={{
            background: `linear-gradient(rgba(10, 37, 64, 0.45), rgba(10, 37, 64, 0.45)), url('/assets/Contact/Contact.png')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="contact-hero-overlay"></div>
          <div className="container contact-container contact-hero-container">
            <div className="contact-hero-content">
              <span className="tl-hero-badge-pill">Contact Us</span>
              <h1 className="hero-title">
                Let's Start the Conversation
              </h1>
              <p className="contact-hero-description">
                Whether you're seeking tax, legal, regulatory, or business advisory services, our multidisciplinary team is here to help. Connect with us to discuss your requirements and explore the right solutions for your business.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="contact-main-section">
          {/* Abstract Background Elements */}
          <div className="contact-bg-blob blob-1"></div>
          <div className="contact-bg-blob blob-2"></div>
          <div className="contact-bg-pattern"></div>

          <div className="container contact-container" style={{ position: 'relative', zIndex: 10 }}>

            {/* Section Header */}
            {/* <div className="contact-form-header">
              <span className="contact-badge-simple contact-badge-dark">Contact Us</span>
              <h2 className="form-title">Let's Start a Conversation</h2>
              <p className="form-description">
                Please fill out the contact form with your name, email address, phone number, and your query. Our team will respond as soon as possible.
              </p>
            </div> */}

            <div className="contact-grid-main">

              {/* LEFT SIDE: MAP & INFO (40%) */}
              <div className="contact-left-col">

                <div className="contact-info-cards">
                  <div className="info-card">
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="info-text">
                      <h4>Our Office</h4>
                      <p>Address - 401-406 Prabhat Centre Annex, Sector 1A , CBD-Belapur , Navi Mumbai 400614</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="info-text">
                      <h4>Call Us</h4>
                      <p>+91-9819705068<br />+91-9869005068</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="info-text">
                      <h4>Email Us</h4>
                      <p>info@taxlegal.in<br />support@taxlegal.in</p>
                    </div>
                  </div>
                </div>

                <div className="contact-map-wrapper">
                  <iframe
                    title="Office Location"
                    src="https://maps.google.com/maps?ll=19.019674,73.039406&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=401-404,Prabhat+Center,CBD-Belapur,Navi+Mumbai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>

              {/* RIGHT SIDE: CONTACT FORM (60%) */}
              <div className="contact-right-col">
                <div className="contact-form-glass-card">

                  <form className="premium-contact-form" onSubmit={handleSubmit}>
                    <div className="form-row-2">
                      <div className="input-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="input-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-group">
                        <label>Service Required</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required>
                          <option value="" disabled>Select a service</option>
                          <option value="Taxation Advisory">Taxation Advisory</option>
                          <option value="Legal Counsel">Legal Counsel</option>
                          <option value="Compliance">Compliance</option>
                          <option value="Company Registration">Company Registration</option>
                        </select>
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Message *</label>
                      <textarea
                        rows="6"
                        name="message"
                        placeholder="Briefly describe your requirement..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="no-resize"
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <span>{submitted ? "Message Sent ✓" : "Submit Enquiry"}</span>
                      {!submitted && (
                        <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      )}
                    </button>
                    {/* <p className="form-disclaimer">
                      By submitting this form, you acknowledge that you are seeking information of your own accord. No lawyer-client relationship is created by this communication. © {new Date().getFullYear()} TaxLegal. <br />All rights reserved.
                    </p> */}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;