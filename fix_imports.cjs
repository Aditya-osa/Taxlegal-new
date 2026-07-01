const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Home.jsx imports
    if (filePath.endsWith('Home.jsx') && filePath.includes('pages')) {
      content = content.replace(/import CareerSection from '\.\/CareerSection';/g, "import CareerSection from '../../components/HomePage/CareerSection';");
      content = content.replace(/import Footer from '\.\.\/Footer';/g, "import Footer from '../../components/layout/Footer';");
      content = content.replace(/import CalculatorCTASection from '\.\/CalculatorCTASection';/g, "import CalculatorCTASection from '../../components/HomePage/CalculatorCTASection';");
      // Double quotes support just in case
      content = content.replace(/from "\.\/CareerSection"/g, "from \"../../components/HomePage/CareerSection\"");
      content = content.replace(/from "\.\.\/Footer"/g, "from \"../../components/layout/Footer\"");
    }

    // AboutUs.jsx imports
    if (filePath.endsWith('AboutUs.jsx')) {
      content = content.replace(/from ["']\.\/components\/AboutPage\//g, "from \"../../components/AboutPage/");
    }

    // Other pages Header/Footer
    if (filePath.includes('pages')) {
      content = content.replace(/from ["']\.\.\/Header["']/g, "from \"../../components/layout/Header\"");
      content = content.replace(/from ["']\.\.\/components\/Footer["']/g, "from \"../../components/layout/Footer\"");
      // The original script might have left them as './Header' if I used single quotes vs double quotes
      content = content.replace(/from ["']\.\/Header["']/g, "from \"../../components/layout/Header\"");
      content = content.replace(/from ["']\.\/components\/Footer["']/g, "from \"../../components/layout/Footer\"");
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${filePath}`);
    }
  }
});
