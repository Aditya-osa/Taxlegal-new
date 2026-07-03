import React, { useEffect } from "react";
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHeroSection from "../../components/AboutPage/AboutHeroSection";
import WhoWeAre from "../../components/AboutPage/WhoWeAre";
import Disciplines from "../../components/AboutPage/Disciplines";
import LeadershipTeam from "../../components/AboutPage/LeadershipTeam";
import WhyTrustUs from "../../components/AboutPage/WhyTrustUs";
import AboutCTASection from "../../components/AboutPage/AboutCTASection";
import OurProcess from "../../components/AboutPage/OurProcess";
import WhyChooseUsSection from "../../components/AboutPage/WhyChooseUsSection";
import "./AboutUs.css";
import LogosSection from '../../components/HomePage/LogosSection';
import WhyChooseUsSection from "../../components/AboutPage/WhyChooseUsSection.css";
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
        <LogosSection />
        <WhoWeAre />
        <Disciplines />
        <LeadershipTeam />
        <OurProcess />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
