import fs from 'fs';
const logos = [
    { src: 'C:\\Users\\PRANEETH\\.gemini\\antigravity\\brain\\96d9f68c-b4b7-4f26-a6fa-eb9c1b271bab\\license_xpert_india_logo_1777041394705.png', dest: 'e:\\Website\\LicenseXpertIndia\\public\\logo.png' },
    { src: 'C:\\Users\\PRANEETH\\.gemini\\antigravity\\brain\\96d9f68c-b4b7-4f26-a6fa-eb9c1b271bab\\license_xpert_india_logo_white_1777041422293.png', dest: 'e:\\Website\\LicenseXpertIndia\\public\\logo-white.png' }
];

logos.forEach(logo => {
    try {
        fs.copyFileSync(logo.src, logo.dest);
        console.log(`Logo copied successfully to ${logo.dest}`);
    } catch (err) {
        console.error(`Error copying logo to ${logo.dest}:`, err);
    }
});
