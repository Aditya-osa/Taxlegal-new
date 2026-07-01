const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function refactorSpacing(filePath) {
  if (!filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace common section vertical paddings
  content = content.replace(/padding:\s*(80|90|100|60|70|96|72|120|50)px\s+0\s*;/g, 'padding: var(--section-py) 0;');
  
  // Replace triple values like padding: 100px 0 80px; -> padding: var(--section-py) 0;
  content = content.replace(/padding:\s*\d+px\s+0\s+\d+px\s*;/g, 'padding: var(--section-py) 0;');

  // Replace container horizontal padding
  content = content.replace(/padding:\s*0\s+(20|24|30|40)px\s*;/g, 'padding: 0 var(--container-px);');
  content = content.replace(/padding:\s*0\s+5%\s*;/g, 'padding: 0 var(--container-px);');

  // Replace compound like padding: 80px 5%;
  content = content.replace(/padding:\s*(80|90|100|60|70)px\s+(5%|20px)\s*;/g, 'padding: var(--section-py) var(--container-px);');

  // Replace card paddings
  content = content.replace(/padding:\s*40px\s+30px\s*;/g, 'padding: var(--card-padding);');
  content = content.replace(/padding:\s*30px\s+24px\s*;/g, 'padding: var(--card-padding);');
  content = content.replace(/padding:\s*24px\s+32px\s*;/g, 'padding: var(--card-padding);');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(__dirname, refactorSpacing);
console.log("Refactoring complete.");
