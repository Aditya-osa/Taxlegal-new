const fs = require('fs');
const path = require('path');

const globalCssPath = path.join(__dirname, 'src', 'global.css');
const topbarCssPath = path.join(__dirname, 'src', 'components', 'layout', 'Topbar.css');
const navbarCssPath = path.join(__dirname, 'src', 'components', 'layout', 'Navbar.css');

let content = fs.readFileSync(globalCssPath, 'utf8');
const lines = content.split('\n');

const headerWrapperStart = 318 - 1;
const topUtilityBarStart = 327 - 1;
const navStart = 388 - 1;
const heroStart = 548 - 1;

// Topbar CSS: lines 327 to 387
const topbarCss = lines.slice(topUtilityBarStart, navStart).join('\n');

// Navbar CSS: lines 318 to 326 AND 388 to 547
const navbarCss = lines.slice(headerWrapperStart, topUtilityBarStart).join('\n') + '\n' + lines.slice(navStart, heroStart).join('\n');

fs.writeFileSync(topbarCssPath, topbarCss, 'utf8');
fs.writeFileSync(navbarCssPath, navbarCss, 'utf8');

// New global.css
const newGlobalCss = lines.slice(0, headerWrapperStart).join('\n') + '\n' + lines.slice(heroStart).join('\n');
fs.writeFileSync(globalCssPath, newGlobalCss, 'utf8');

console.log("Extraction done");
