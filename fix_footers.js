import fs from 'fs';
import path from 'path';

// Read the latest Footer.jsx
let footerCode = fs.readFileSync('src/components/Footer.jsx', 'utf8');

// Extract just the HTML part
let htmlCode = footerCode.match(/return \(\s*([\s\S]*?)\s*\);\s*};/)[1];

// Convert React JSX to plain HTML
htmlCode = htmlCode
  .replace(/className=/g, 'class=')
  .replace(/\{\/\*.*?\*\/\}/g, '')
  .replace(/style=\{\{(.*?)\}\}/g, 'style=\"$1\"')
  .replace(/objectFit: 'contain'/g, 'object-fit: contain');

const STANDARD_FOOTER = `    <!-- Standardized Footer -->
    ${htmlCode}`;

// Universal regex to match old and new footers in HTML files
const UNIVERSAL_FOOTER_REGEX = /(?:<!-- CTA \+ Stats Bar -->\s*)?(?:<div[^>]*class=\"[^\"]*footer-cta[^\"]*\"[\s\S]*?<\/div>\s*)?(?:<(?:footer|div)[^>]*data-testid=\"Footer\"[\s\S]*?(?=\s*<script type=\"module\">|\s*<\/body>)|(?:<!-- CTA \+ Stats Bar -->\s*)?(?:<div[^>]*class=\"[^\"]*footer-cta[^\"]*\"[\s\S]*?<\/div>\s*)?<footer[\s\S]*?(?=\s*<script type=\"module\">|\s*<\/body>))/;

let patchedCount = 0;

function walkAndReplace(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndReplace(full);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      
      if (UNIVERSAL_FOOTER_REGEX.test(content)) {
        content = content.replace(UNIVERSAL_FOOTER_REGEX, STANDARD_FOOTER + '\n');
        
        // Clean up any stray duplicate CTA bars
        content = content.replace(/(?:<!-- CTA \+ Stats Bar -->\s*){2,}/g, '<!-- CTA + Stats Bar -->\n');

        fs.writeFileSync(full, content, 'utf8');
        console.log(`✅ Patched: ${full}`);
        patchedCount++;
      } else {
        console.log(`⚠️ Skipped (no match): ${full}`);
      }
    }
  }
}

console.log('Replacing all static page footers with the React home page footer...');
walkAndReplace('calculator');
walkAndReplace('services');

console.log(`\n🎉 Success! Updated the footer in ${patchedCount} files to exactly match the home page.`);
