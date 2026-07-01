const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const moves = [
  // Global CSS
  { from: 'Home.css', to: 'global.css' },
  
  // Layout
  { from: 'Header.jsx', to: 'components/layout/Header.jsx' },
  { from: 'components/Footer.jsx', to: 'components/layout/Footer.jsx' },
  { from: 'components/Footer.css', to: 'components/layout/Footer.css' },
  
  // Pages
  { from: 'components/HomePage/Home.jsx', to: 'pages/Home/Home.jsx' },
  { from: 'components/HomePage/Home.css', to: 'pages/Home/Home.css' },
  
  { from: 'AboutUs.jsx', to: 'pages/AboutUs/AboutUs.jsx' },
  { from: 'AboutUs.css', to: 'pages/AboutUs/AboutUs.css' },
  
  { from: 'Services.jsx', to: 'pages/Services/Services.jsx' },
  { from: 'Services.css', to: 'pages/Services/Services.css' },
  
  { from: 'InternshipPage.jsx', to: 'pages/Internship/InternshipPage.jsx' },
  { from: 'Internship.css', to: 'pages/Internship/Internship.css' },
  
  { from: 'ContactUs.jsx', to: 'pages/ContactUs/ContactUs.jsx' },
  { from: 'ContactUs.css', to: 'pages/ContactUs/ContactUs.css' }
];

// Create directories
const dirs = ['components/layout', 'pages/Home', 'pages/AboutUs', 'pages/Services', 'pages/Internship', 'pages/ContactUs'];
dirs.forEach(d => {
  const fullPath = path.join(srcDir, d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Move files
moves.forEach(m => {
  const fromPath = path.join(srcDir, m.from);
  const toPath = path.join(srcDir, m.to);
  if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, toPath);
    console.log(`Moved ${m.from} to ${m.to}`);
  } else {
    console.log(`Warning: ${m.from} not found`);
  }
});

// Delete unused
const toDelete = ['Home.jsx', 'Component'];
toDelete.forEach(d => {
  const p = path.join(srcDir, d);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`Deleted ${d}`);
  }
});

// Now we update imports using regex
// This is a naive but effective approach for our specific moves
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  // App.jsx
  { regex: /import Home from '\.\/components\/HomePage\/Home'/g, rep: "import Home from './pages/Home/Home'" },
  { regex: /import AboutUs from '\.\/AboutUs'/g, rep: "import AboutUs from './pages/AboutUs/AboutUs'" },
  { regex: /import Services from '\.\/Services'/g, rep: "import Services from './pages/Services/Services'" },
  { regex: /import ContactUs from "\.\/ContactUs"/g, rep: "import ContactUs from './pages/ContactUs/ContactUs'" },
  { regex: /import InternshipPage from "\.\/InternshipPage"/g, rep: "import InternshipPage from './pages/Internship/InternshipPage'" },
  
  // Home.jsx imports
  { regex: /import Header from "\.\.\/\.\.\/Header"/g, rep: "import Header from '../../components/layout/Header'" },
  
  // Header.jsx imports
  { regex: /import "\.\/Home\.css"/g, rep: "import \"../../global.css\"" },
  { regex: /import "\.\/\.\/Home\.css"/g, rep: "import \"../../global.css\"" }, // just in case
  
  // Global imports
  { regex: /import "\.\.\/Home\.css"/g, rep: "import \"../../global.css\"" },
  { regex: /import "\.\.\/\.\.\/Home\.css"/g, rep: "import \"../../global.css\"" },
  
  // Footer.jsx
  { regex: /import '\.\/Footer\.css'/g, rep: "import './Footer.css'" }, // already same dir
  
  // Fix main.jsx or similar global CSS imports
  { regex: /import '\.\/Home\.css'/g, rep: "import './global.css'" },
];

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace CSS imports for moved CSS files inside their own JS files
    if (filePath.endsWith('AboutUs.jsx')) content = content.replace(/import '\.\/AboutUs\.css'/g, "import './AboutUs.css'");
    if (filePath.endsWith('Services.jsx')) content = content.replace(/import '\.\/Services\.css'/g, "import './Services.css'");
    if (filePath.endsWith('InternshipPage.jsx')) content = content.replace(/import '\.\/Internship\.css'/g, "import './Internship.css'");
    if (filePath.endsWith('ContactUs.jsx')) content = content.replace(/import '\.\/ContactUs\.css'/g, "import './ContactUs.css'");
    if (filePath.endsWith('Home.jsx')) content = content.replace(/import '\.\/Home\.css'/g, "import './Home.css'");

    // For AboutUs.jsx components imports: it used to be `./components/...` now it's `../../components/...`
    if (filePath.endsWith('AboutUs.jsx')) {
      content = content.replace(/import AboutHeroSection from '\.\/components\/AboutPage\//g, "import AboutHeroSection from '../../components/AboutPage/");
      content = content.replace(/import WhoWeAre from '\.\/components\/AboutPage\//g, "import WhoWeAre from '../../components/AboutPage/");
      content = content.replace(/import Disciplines from '\.\/components\/AboutPage\//g, "import Disciplines from '../../components/AboutPage/");
      content = content.replace(/import VisionMission from '\.\/components\/AboutPage\//g, "import VisionMission from '../../components/AboutPage/");
      content = content.replace(/import LeadershipTeam from '\.\/components\/AboutPage\//g, "import LeadershipTeam from '../../components/AboutPage/");
      content = content.replace(/import BookGallery from '\.\/components\/AboutPage\//g, "import BookGallery from '../../components/AboutPage/");
      content = content.replace(/import WhyTrustUs from '\.\/components\/AboutPage\//g, "import WhyTrustUs from '../../components/AboutPage/");
      content = content.replace(/import AboutCTASection from '\.\/components\/AboutPage\//g, "import AboutCTASection from '../../components/AboutPage/");
      
      content = content.replace(/import Header from "\.\/Header"/g, "import Header from '../../components/layout/Header'");
      content = content.replace(/import Footer from "\.\/components\/Footer"/g, "import Footer from '../../components/layout/Footer'");
    }

    if (filePath.endsWith('ContactUs.jsx') || filePath.endsWith('InternshipPage.jsx') || filePath.endsWith('Services.jsx')) {
      content = content.replace(/import Header from "\.\/Header"/g, "import Header from '../../components/layout/Header'");
      content = content.replace(/import Footer from "\.\/components\/Footer"/g, "import Footer from '../../components/layout/Footer'");
      content = content.replace(/import Header from '\.\/Header'/g, "import Header from '../../components/layout/Header'");
      content = content.replace(/import Footer from '\.\/components\/Footer'/g, "import Footer from '../../components/layout/Footer'");
    }
    
    // Apply global regexes
    replacements.forEach(r => {
      content = content.replace(r.regex, r.rep);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${filePath}`);
    }
  }
});

console.log('Restructure done.');
