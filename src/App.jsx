import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import './App.css'
import ContactUs from "./ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />


    </Routes>
  )
}

export default App
