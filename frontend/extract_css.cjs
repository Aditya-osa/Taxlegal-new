const fs = require('fs');
const path = require('path');

const globalCssPath = path.join(__dirname, 'src', 'global.css');
const topbarCssPath = path.join(__dirname, 'src', 'components', 'layout', 'Topbar.css');
const navbarCssPath = path.join(__dirname, 'src', 'components', 'layout', 'Navbar.css');

let content = fs.readFileSync(globalCssPath, 'utf8');

// The CSS starts with `/* ===== topbar ===== */` and ends before `/* ===== nav ===== */`
const topbarStart = content.indexOf('/* ===== topbar ===== */');
const navStart = content.indexOf('/* ===== nav ===== */');

// The Nav CSS ends before `/* ===== hero ===== */`
const heroStart = content.indexOf('/* ===== hero ===== */');

if (topbarStart !== -1 && navStart !== -1 && heroStart !== -1) {
  const topbarCss = content.substring(topbarStart, navStart).trim();
  const navbarCss = content.substring(navStart, heroStart).trim();
  
  fs.writeFileSync(topbarCssPath, topbarCss, 'utf8');
  fs.writeFileSync(navbarCssPath, navbarCss, 'utf8');
  
  // Remove them from global.css
  const newGlobalCss = content.substring(0, topbarStart) + content.substring(heroStart);
  fs.writeFileSync(globalCssPath, newGlobalCss, 'utf8');
  
  console.log("Successfully split CSS");
} else {
  console.log("Could not find standard comment markers. Need manual extraction.");
}
