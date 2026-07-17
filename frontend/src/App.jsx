import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Calculator } from 'lucide-react'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs';
import InternshipPage from './pages/Internship/InternshipPage';
import ClientsPage from './pages/Clients/ClientsPage';
import TeamMemberProfile from './pages/TeamMemberProfile/TeamMemberProfile';
import Blogs from './pages/Blogs/Blogs';
import BlogDetail from './pages/Blogs/BlogDetail';
import DisclaimerModal from './components/common/DisclaimerModal';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTopButton from './components/common/BackToTopButton';
import AnalyticsTracker from './components/common/AnalyticsTracker';

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

  const [isTaxBtnExpanded, setIsTaxBtnExpanded] = useState(false);

  const handleTaxBtnClick = (e) => {
    // Check if it's mobile view where the icon needs expansion
    if (window.innerWidth <= 767) {
      if (!isTaxBtnExpanded) {
        e.preventDefault(); // Prevent navigation on first tap
        setIsTaxBtnExpanded(true); // Expand it
      } else {
        // Allow navigation, and reset state for the next time they come back (if applicable)
        setIsTaxBtnExpanded(false);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isTaxBtnExpanded && !e.target.closest('.floating-tax-btn')) {
        setIsTaxBtnExpanded(false);
      }
    };

    if (isTaxBtnExpanded) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isTaxBtnExpanded]);

  return (
    <>
      <AnalyticsTracker />
      <ScrollToTop />
      <BackToTopButton />
      <DisclaimerModal />
      <a 
        href="https://www.incometaxindia.gov.in/income-tax-calculator" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`floating-tax-btn ${isTaxBtnExpanded ? 'expanded' : ''}`}
        onClick={handleTaxBtnClick}
      >
        <Calculator size={20} className="tax-btn-icon" />
        <span className="tax-btn-text">Tax Calculator</span>
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/team/:slug" element={<TeamMemberProfile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
