import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs';
import InternshipPage from './pages/Internship/InternshipPage';
import ClientsPage from './pages/Clients/ClientsPage';

function App() {
  return (
    <>
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
      </Routes>
    </>
  )
}

export default App
