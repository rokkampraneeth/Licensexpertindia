const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// The magical regex to capture the folder and filename, and the target blank
// <a href="/pages/startup/private-limited-company.html" target="_blank">
html = html.replace(/<a href="\/pages\/[^\/]+\/([^\.]+)\.html" target="_blank">/g, '<a href="/service.html?id=$1">');

fs.writeFileSync(indexPath, html, 'utf-8');
console.log('Fixed index.html links successfully!');
