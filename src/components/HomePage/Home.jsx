import React from 'react';
import './Home.css';
import Header from "../../Header";

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

import HeroSection from './HeroSection';
import LogosSection from './LogosSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FeaturesSection from './FeaturesSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import CareerSection from './CareerSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-page-container">
      {/* Replace this with your actual Header component */}
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <TeamSection />
        <TestimonialsSection />
        <CareerSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
