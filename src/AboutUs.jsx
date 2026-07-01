import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./components/Footer";
import AboutHeroSection from "./components/AboutPage/AboutHeroSection";
import WhoWeAre from "./components/AboutPage/WhoWeAre";
import VisionMission from "./components/AboutPage/VisionMission";
import Disciplines from "./components/AboutPage/Disciplines";
import LeadershipTeam from "./components/AboutPage/LeadershipTeam";
import WhyTrustUs from "./components/AboutPage/WhyTrustUs";
import AboutCTASection from "./components/AboutPage/AboutCTASection";
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
        <VisionMission />
        <Disciplines />
        <LeadershipTeam />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
