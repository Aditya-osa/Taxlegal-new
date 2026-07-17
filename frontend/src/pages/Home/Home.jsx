import React from 'react';
import './Home.css';
import Header from '../../components/layout/Header';

// Placeholder Header as requested
const HeaderPlaceholder = () => (
  <header style={{
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderBottom: '1px solid #eaeaea',
    fontWeight: 'bold',
    color: '#ea3a3c'
  }}>
    &lt;Header /&gt; Placeholder
  </header>
);
import Topbar from '../../components/layout/Topbar';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/HomePage/HeroSection';
import LogosSection from '../../components/HomePage/LogosSection';
import AboutSection from '../../components/HomePage/AboutSection';
import ServicesSection from '../../components/HomePage/ServicesSection';
import TeamSection from '../../components/HomePage/TeamSection';
import TestimonialsSection from '../../components/HomePage/TestimonialsSection';
import CareerSection from '../../components/HomePage/CareerSection';
import WhyChooseUsSection from '../../components/AboutPage/WhyChooseUsSection';
import Footer from '../../components/layout/Footer';

import SEO from '../../components/common/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Tax Litigation, GST & Corporate Legal Advisory"
        url="https://taxlegalsynergy.com"
      />
      <Header />
      <div className="home-page-container">
        <main>
          <HeroSection />
          <LogosSection />
          <AboutSection />
          <TeamSection />
          <ServicesSection />

          <TestimonialsSection />
          <WhyChooseUsSection />
          <CareerSection />

        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
