import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs';
import InternshipPage from './pages/Internship/InternshipPage';
import ClientsPage from './pages/Clients/ClientsPage';
import TeamMemberProfile from './pages/TeamMemberProfile/TeamMemberProfile';
import DisclaimerModal from './components/common/DisclaimerModal';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTopButton from './components/common/BackToTopButton';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <BackToTopButton />
      <DisclaimerModal />
      <a 
        href="https://www.incometaxindia.gov.in/income-tax-calculator" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-tax-btn"
      >
        Tax Calculator
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/team/:slug" element={<TeamMemberProfile />} />
      </Routes>
    </>
  )
}

export default App
