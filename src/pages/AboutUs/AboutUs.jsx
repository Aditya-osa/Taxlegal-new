import React, { useEffect } from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHeroSection from "../../components/AboutPage/AboutHeroSection";
import WhoWeAre from "../../components/AboutPage/WhoWeAre";
import Disciplines from "../../components/AboutPage/Disciplines";
import LeadershipTeam from "../../components/AboutPage/LeadershipTeam";
import WhyTrustUs from "../../components/AboutPage/WhyTrustUs";
import AboutCTASection from "../../components/AboutPage/AboutCTASection";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      <Header />

      <main className="about-main-content">
        <AboutHeroSection />
        <WhoWeAre />
        <Disciplines />
        <LeadershipTeam />

        <div className="why-choose-section">
          <h2 className="why-choose-heading">Why Leading Businesses Work With Us</h2>
          <p style={{ color: "white", justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center", marginTop: "0px" }}>We combine legal excellence with commercial understanding to help clients manage complexity, <br />reduce risk and make informed decisions with confidence.</p>
          <WhyChooseCarousel items={whyChooseItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
