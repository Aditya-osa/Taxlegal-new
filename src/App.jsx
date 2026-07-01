import { Routes, Route } from 'react-router-dom'
import Home from './components/HomePage/Home'
import AboutUs from './AboutUs'
import Services from './Services'
import './App.css'
import ContactUs from "./ContactUs";
import InternshipPage from "./InternshipPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/internship" element={<InternshipPage />} />
    </Routes>
  )
}

export default App
