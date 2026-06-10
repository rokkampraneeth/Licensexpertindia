import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * generatePages.js - Production Static Site Generator
 * Generates 48+ SEO-optimized service pages for LicenseXpertIndia.
 */

const menuData = {
  startup: [
    ['Private Limited Registration', 'private-limited-company.html'],
    ['One Person Company Registration', 'opc.html'],
    ['Memorandum of Understanding', 'mou.html'],
    ['PF Registration', 'pf-registration.html'],
    ['Due Diligence', 'due-diligence.html'],
    ['Company Valuation Report', 'valuation-report.html'],
    ['Trademark', 'trademark-registration.html'],
    ['LLP Registration', 'llp.html'],
    ['Article of Association', 'aoa.html'],
    ['ESI Registration', 'esi-registration.html'],
    ['Patent Registration', 'patent-registration.html'],
    ['Company Conversion', 'company-conversion.html'],
    ['Shareholder Agreement', 'shareholder-agreement.html'],
    ['Digital Signature Certificate', 'digital-signature.html'],
    ['Startup India Certificate', 'startup-india-certificate.html']
  ],
  compliances: [
    ['Annual Return Filing', 'annual-returns.html'],
    ['PAN Registration', 'pan-registration.html'],
    ['ISO Registration', 'iso-certification.html'],
    ['Import Export Code', 'iec.html'],
    ['Book Keeping', 'book-keeping.html'],
    ['Proprietor Registration', 'proprietor-registration.html'],
    ['Stock Audit', 'stock-audit.html'],
    ['TAN Registration', 'tan-registration.html'],
    ['Pollution Control Certificate', 'pollution-control.html'],
    ['ROC Compliance', 'roc-compliance.html'],
    ['MSME Registration', 'msme-registration.html']
  ],
  agreement: [
    ['Rental Agreement', 'rental-agreement.html'],
    ['Partnership Agreement', 'partnership-deed.html'],
    ['Non-Disclosure Agreement', 'nda.html'],
    ['Franchise Agreement', 'franchise-agreement.html'],
    ['Founders Agreement', 'founders-agreement.html'],
    ['Drafting and Reviewing of Business Agreement', 'business-drafting.html'],
    ['Employment Agreement', 'employment-contract.html']
  ],
  license: [
    ['FSSAI Food License', 'fssai-license.html'],
    ['Shop & Establishment License', 'shop-establishment.html'],
    ['Trade License', 'trade-license.html'],
    ['Drug License', 'drug-license.html'],
    ['PSARA License', 'psara-license.html'],
    ['Water Testing', 'water-testing.html'],
    ['GeM Registration', 'gem-services.html']
  ],
  taxation: [
    ['GST Services', 'gst-advisory.html'],
    ['Income Tax Return', 'tax-planning.html'],
    ['TDS Filing', 'tds-return.html'],
    ['Property Tax', 'property-tax.html'],
    ['Professional Tax Filing', 'professional-tax.html'],
    ['Legal Transaction and Tax Advisory', 'tax-advisory.html']
  ],
  insurance: [
    ['Business Insurance', 'business-insurance.html'],
    ['Shopkeeper\'s Insurance Policy', 'shopkeeper-insurance.html'],
    ['Fire Insurance', 'fire-burglary.html']
  ]
};

const getPageData = (cat, tit) => {
  // Normalize category name for display
  const category = cat.charAt(0).toUpperCase() + cat.slice(1);
  
  let data = {
    heroH1: `Expert Services for<br>${tit}`,
    heroP: `Get professional assistance for your <b>${tit}</b>. We provide end-to-end guidance to ensure you are legally compliant with standard regulations through a fast, secure, and hassle-free online process.`,
    dashboardTitle: `${category} Dashboard`,
    grid1: `Apply For<br>${tit.split(' ')[0]}`,
    grid2: `Required<br>Documents`,
    grid3: `Eligibility<br>Criteria`,
    grid4: `Key<br>Benefits`,
    btnWide1: `File ${tit} Now`,
    btnWide2: `${tit} Guide & Process`,
    btnApply: `Get Started`,
    bannerImg: `https://picsum.photos/seed/${tit.replace(/\s+/g, '')}/600/300?blur=2`,
    metaDesc: `Professional ${tit} services in India. Expert-led registration, compliance, and documentation for ${category} requirements. Fast and secure process.`
  };

  // Specific overrides to match service.js logic
  if (cat === 'startup') {
    data.heroH1 = `Register Your<br>${tit}`;
    data.heroP = `Starting a new venture? Register your <b>${tit}</b> with LicenseXpertIndia today. Our experts handle the documentation, DSC, DIN, and ROC filings exclusively for you, so you can build your business completely stress-free.`;
    data.grid1 = `Incorporation<br>Process`;
    data.grid2 = `DSC / DIN<br>Registration`;
    data.grid3 = `Drafting<br>MOA & AOA`;
    data.grid4 = `ROC<br>Filing`;
    data.btnWide1 = `Start Incorporation Process`;
    data.btnWide2 = `Check Name Availability`;
    data.btnApply = `Register Now`;
  } else if (cat === 'compliances') {
    data.heroH1 = `Seamless<br>${tit}`;
    data.heroP = `File your <b>${tit}</b> securely and on time before the last filing date. LicenseXpertIndia ensures end-to-end statutory compliance, filing of returns, and replying to regulatory notices to keep your business penalty-free.`;
    data.grid1 = `Filing<br>Returns`;
    data.grid2 = `Compliance<br>Health Check`;
    data.grid3 = `Penalty<br>Protection`;
    data.grid4 = `Annual<br>Audit`;
    data.btnWide1 = `File ${tit} Today`;
    data.btnWide2 = `Late Fee & Penalty Calendar`;
  } else if (cat === 'agreement') {
    data.heroH1 = `Draft Your<br>${tit}`;
    data.heroP = `Get a legally robust <b>${tit}</b> drafted by verified senior lawyers. Whether it's on E-Stamp or physical stamp, we deliver error-free legal documentation for 250+ cities across India directly to your mailbox within working hours!`;
    data.grid1 = `Lawyer<br>Review`;
    data.grid2 = `E-Stamping<br>Service`;
    data.grid3 = `Custom<br>Clauses`;
    data.grid4 = `Physical<br>Delivery`;
    data.btnWide1 = `Draft ${tit} Now`;
    data.btnWide2 = `View Sample Templates`;
    data.btnApply = `Draft Now`;
  } else if (cat === 'license') {
    data.heroH1 = `Swift Approval for<br>${tit}`;
    data.heroP = `Acquiring a <b>${tit}</b> holds the key to lawful operations. It is a mandatory document authorizing your business to commence trade. Apply online with minimal paperwork and constant tracking via WhatsApp & Email.`;
    data.grid1 = `New<br>License`;
    data.grid2 = `License<br>Renewal`;
    data.grid3 = `Modification<br>Services`;
    data.grid4 = `Govt<br>Liaison`;
    data.btnWide1 = `Apply for ${tit}`;
    data.btnWide2 = `License Validity & Renewal`;
  }

  // Extremely specific overrides
  if (tit === 'Rental Agreement') {
    data.heroH1 = `Rental Agreement<br>On E-Stamp`;
    data.heroP = `Get Rental Agreement on E-Stamp for 250+ cities in India delivered to your mail box within 2 business hours! Fast, simple, and lawyer-approved.`;
    data.btnWide1 = `Draft Rental Agreement - ₹299`;
  } else if (tit === 'MSME/Udyam Registration') {
    data.heroH1 = `Online MSME<br>& Udyam Registration`;
    data.heroP = `In India, an MSME Udyam registration unlocks various government subsidies, lower interest rates, and tax exemptions. We simplify the entire online process.`;
    data.btnWide1 = `Apply For MSME Registration`;
  } else if (tit === 'GST Filing' || tit === 'GST Advisory') {
    data.heroH1 = `Goods & Services Tax<br>Filing Online`;
    data.heroP = `Get your GST filed, cancelled, or revoked with notices replied for your business starting at just ₹299/-. Connect our experts today to make the process simple.`;
    data.btnWide1 = `GST Returns & Filing Status`;
  } else if (tit === 'FSSAI Food License') {
    data.heroH1 = `FSSAI Food License<br>Registration`;
    data.heroP = `Get your FSSAI License registered, renewed or modified for your food business starting at just ₹199/-. Protect your customers and comply with FSSAI regulations.`;
    data.btnWide1 = `Apply for Food License - ₹199`;
  } else if (tit === 'Income Tax Return (ITR)') {
    data.heroH1 = `Income Tax Returns<br>E-Filing`;
    data.heroP = `Get your ITR E-Filed online by our tax experts before the last filing date at just ₹499/-. Maximize your refunds with 100% accurate compliance.`;
    data.btnWide1 = `E-File ITR Now - ₹499`;
  }

  return data;
};

const baseHtml = `<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Primary Tags -->
    <title>{{TITLE}} | LicenseXpertIndia | Expert Licensing Solutions</title>
    <meta name="description" content="{{META_DESC}}">
    <link rel="canonical" href="https://licensexpertindia.com/services/{{CATEGORY}}/{{FILENAME}}" />

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
    <!-- Design System & Dedicated Service Styles -->
    <link rel="stylesheet" href="/src/style.css">
    <link rel="stylesheet" href="/src/service.css">
  </head>
  <body>
    <header id="header">
      <div class="container">
        <nav>
          <a href="/" class="logo">License<span>Xpert</span>India</a>
          <ul class="nav-links" id="nav-links">
            <li class="nav-item">
              <a href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">Startup <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/startup/private-limited-company.html">Private Limited Registration</a>
                  <a href="/services/startup/opc.html">One Person Company Registration</a>
                  <a href="/services/startup/mou.html">Memorandum of Understanding</a>
                  <a href="/services/startup/pf-registration.html">PF Registration</a>
                  <a href="/services/startup/due-diligence.html">Due Diligence</a>
                  <a href="/services/startup/valuation-report.html">Company Valuation Report</a>
                  <a href="/services/startup/trademark-registration.html">Trademark</a>
                  <a href="/services/agreement/founders-agreement.html">Founders Agreement</a>
                  <a href="/services/startup/llp.html">LLP Registration</a>
                  <a href="/services/startup/aoa.html">Article of Association</a>
                  <a href="/services/startup/esi-registration.html">ESI Registration</a>
                  <a href="/services/startup/patent-registration.html">Patent Registration</a>
                  <a href="/services/startup/company-conversion.html">Company Conversion</a>
                  <a href="/services/startup/shareholder-agreement.html">Shareholder Agreement</a>
                  <a href="/services/license/digital-signature.html">Digital Signature Certificate</a>
                  <a href="/services/startup/startup-india-certificate.html">Startup India Certificate</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#">Compliances <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/compliances/annual-returns.html">Annual Return Filing</a>
                  <a href="/services/compliances/pan-registration.html">PAN Registration</a>
                  <a href="/services/license/iso-certification.html">ISO Registration</a>
                  <a href="/services/license/iec.html">Import Export Code</a>
                  <a href="/services/compliances/book-keeping.html">Book Keeping</a>
                  <a href="/services/compliances/proprietor-registration.html">Proprietor Registration</a>
                  <a href="/services/compliances/stock-audit.html">Stock Audit</a>
                  <a href="/services/compliances/tan-registration.html">TAN Registration</a>
                  <a href="/services/compliances/pollution-control.html">Pollution Control Certificate</a>
                  <a href="/services/compliances/roc-compliance.html">ROC Compliance</a>
                  <a href="/services/license/msme-registration.html">MSME Registration</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#">Agreement <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/agreement/rental-agreement.html">Rental Agreement</a>
                  <a href="/services/agreement/partnership-deed.html">Partnership Agreement</a>
                  <a href="/services/agreement/nda.html">Non-Disclosure Agreement</a>
                  <a href="/services/agreement/franchise-agreement.html">Franchise Agreement</a>
                  <a href="/services/agreement/business-drafting.html">Drafting and Reviewing of Business Agreement</a>
                  <a href="/services/agreement/employment-contract.html">Employment Agreement</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#">License <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/license/fssai-license.html">FSSAI Food License</a>
                  <a href="/services/license/shop-establishment.html">Shop & Establishment License</a>
                  <a href="/services/license/trade-license.html">Trade License</a>
                  <a href="/services/license/drug-license.html">Drug License</a>
                  <a href="/services/license/psara-license.html">PSARA License</a>
                  <a href="/services/license/water-testing.html">Water Testing</a>
                  <a href="/services/license/digital-signature.html">Digital Signature Certificate</a>
                  <a href="/services/license/gem-services.html">GeM Registration</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#">Taxation <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/taxation/gst-advisory.html">GST Services</a>
                  <a href="/services/taxation/tax-planning.html">Income Tax Return</a>
                  <a href="/services/taxation/tds-return.html">TDS Filing</a>
                  <a href="/services/taxation/property-tax.html">Property Tax</a>
                  <a href="/services/taxation/professional-tax.html">Professional Tax Filing</a>
                  <a href="/services/taxation/tax-advisory.html">Legal Transaction and Tax Advisory</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#">Insurance <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large">
                <div class="dropdown-grid-2col">
                  <a href="/services/insurance/business-insurance.html">Business Insurance</a>
                  <a href="/services/insurance/shopkeeper-insurance.html">Shopkeeper's Insurance Policy</a>
                  <a href="/services/insurance/fire-burglary.html">Fire Insurance</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="#" class="btn btn-primary btn-consult">
                Consult an Expert 
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div class="dropdown dropdown-consult">
                <div class="dropdown-column">
                  <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Lawyer" target="_blank">Talk to a Lawyer</a>
                  <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Chartered%20Accountant" target="_blank">Talk to a Chartered Accountant</a>
                  <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Food%20Safety%20Mitra" target="_blank">Talk to a Food Safety Mitra</a>
                  <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20StartUp%20Expert" target="_blank">Talk to a StartUp Expert</a>
                </div>
              </div>
            </li>
          </ul>
          
          <div style="display: flex; align-items: center; gap: 20px;">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" aria-label="Toggle dark mode" />
                <div class="slider round"></div>
              </label>
            </div>
            
            <div class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle mobile menu" aria-expanded="false" role="button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="page-content">
      <div class="split-layout">
        <div class="left-col animate-fade-in-up">
          <h1>{{HERO_H1}}</h1>
          <p>{{HERO_P}}</p>
          <div class="buttons-row">
            <a href="tel:+919876543210" class="btn-custom-outline">Talk To Our Expert</a>
            <a href="#" class="btn-custom-solid">{{BTN_APPLY}}</a>
          </div>
        </div>

        <div class="right-col animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="widget-card">
            <div class="card-top">
              <div>
                <span>Welcome</span>
                <h3>{{DASHBOARD_TITLE}}</h3>
              </div>
              <div class="user-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </div>

            <div class="banner" style="background-image: url('{{BANNER_IMG}}');">
              <div class="banner-overlay">
                <h2>{{TITLE}}</h2>
              </div>
            </div>

            <div class="card-grid">
              <div class="grid-item">
                <div class="item-icon icon-pink">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </div>
                <p>{{GRID_1}}</p>
              </div>
              <div class="grid-item">
                <div class="item-icon icon-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <p>{{GRID_2}}</p>
              </div>
              <div class="grid-item">
                <div class="item-icon icon-purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <p>{{GRID_3}}</p>
              </div>
              <div class="grid-item">
                <div class="item-icon icon-red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <p>{{GRID_4}}</p>
              </div>
            </div>

            <button class="btn-wide wide-primary">{{BTN_WIDE_1}}</button>
            <button class="btn-wide wide-secondary">
              <div class="circle-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
              {{BTN_WIDE_2}}
            </button>
          </div>
        </div>
      </div>
    </main>

    <div class="action-hub" id="action-hub">
      <div class="hub-menu">
        <a href="tel:+919876543210" class="hub-item call" data-label="Call Expert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.11-2.12a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="mailto:contact@licensexpertindia.com" class="hub-item email" data-label="Send Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
      <div class="hub-toggle" id="hub-toggle">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path><path d="M9 11h.01"></path><path d="M12 11h.01"></path><path d="M15 11h.01"></path></svg>
      </div>
    </div>

    <div data-testid="Footer" class="ft-wrapper ft-container" bis_skin_checked="1">
         <div class="ft-bg-dark ft-py-large" bis_skin_checked="1">
            <div class="ft-container-wrapper" bis_skin_checked="1">
               <div class="ft-flex ft-gap-medium ft-sm-flex-col" bis_skin_checked="1">
                  <div class=" ft-w-quarter ft-sm-w-full ft-md-w-two-thirds" bis_skin_checked="1">
                     <img src="/logo-white.png" alt="LicenseXpertIndia Logo" width="200" height="40" style="object-fit: contain;">
                     <div class="ft-sm-flex ft-md-gap-medium ft-sm-gap-medium" bis_skin_checked="1">
                        <div class="ft-sm-w-half" bis_skin_checked="1">
                           <div class="ft-mt-large" bis_skin_checked="1">
                              <div class="ft-secondary-heading" bis_skin_checked="1">Follow us on</div>
                              <div class="ft-flex ft-gap-small ft-sm-gap-tiny" bis_skin_checked="1">
                                 <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" width="24" height="24"></a>
                                 <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" width="24" height="24"></a>
                                 <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" width="24" height="24"></a>
                                 <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" width="24" height="24"></a>
                              </div>
                           </div>
                           <div class="ft-mt-large" bis_skin_checked="1">
                              <div class="ft-secondary-heading" bis_skin_checked="1">Have a query?</div>
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/contact" class="ft-link">Support</a></div>
                           </div>
                        </div>
                        <div class="ft-mt-large" bis_skin_checked="1">
                           <div class="ft-primary-heading false" bis_skin_checked="1">Quick Links</div>
                           <div class="ft-mt-medium" bis_skin_checked="1">
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/about" class="ft-link">About us</a></div>
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/contact" class="ft-link">Contact us</a></div>
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/blog" class="ft-link">Blogs</a></div>
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/refund-policy" class="ft-link">Refund Policy</a></div>
                              <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/privacy-policy" class="ft-link">Privacy Policy</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="ft-w-full" bis_skin_checked="1">
                     <div bis_skin_checked="1">
                        <div bis_skin_checked="1">
                           <div class="ft-primary-heading ft-border-bottom" bis_skin_checked="1">Startups</div>
                           <div class="ft-flex ft-flex-wrap ft-mb-large" bis_skin_checked="1">
                              <!-- COLUMN 1 -->
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/llp-registration.html" class="ft-link">LLP Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/opc.html" class="ft-link">Company Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/aoa.html" class="ft-link">Article of Association</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/private-limited-company.html" class="ft-link">Private Ltd. Registration</a></div>
                              </div>
                              <!-- COLUMN 4 -->
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/due-diligence.html" class="ft-link">Due Diligence</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/company-conversion.html" class="ft-link">Company Conversion</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/esi-registration.html" class="ft-link">ESI Compliance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/pf-registration.html" class="ft-link">PF Compliance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/valuation-report.html" class="ft-link">Company Valuation Report</a></div>
                              </div>
                              <!-- COLUMN 3 -->
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/trademark-registration.html" class="ft-link">Trademark</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/patent-registration.html" class="ft-link">Patent Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/shareholder-agreement.html" class="ft-link">Shareholder Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/startup-india-certificate.html" class="ft-link">StartUp India Certificate</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/mou.html" class="ft-link">Memorandum of Understanding</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/digital-signature.html" class="ft-link">Digital Signature Certificate</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/startup/opc.html" class="ft-link">One Person Company Registration</a></div>
                              </div>
                           </div>
                        </div>
                        <div bis_skin_checked="1">
                           <div class="ft-primary-heading ft-border-bottom" bis_skin_checked="1">Services</div>
                           <div class="ft-flex ft-flex-wrap ft-mb-large" bis_skin_checked="1">
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Consult an Expert</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="#" class="ft-link">Talk to a Lawyer</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="#" class="ft-link">Talk to a CA</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="#" class="ft-link">Talk to a Food Safety Mitra</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="#" class="ft-link">Talk to a StartUp Expert</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">License</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/fssai-license.html" class="ft-link">Food License</a></div> 
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/trade-license.html" class="ft-link">Trade License</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/shop-establishment.html" class="ft-link">Shop Establishment License</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/drug-license.html" class="ft-link">Drug License</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/gem-services.html" class="ft-link">GEM Services</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/water-testing.html" class="ft-link">Water Testing Report</a></div>
                              </div>
                              
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Taxation</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/gst-advisory.html" class="ft-link">GST Services</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/tax-planning.html" class="ft-link">Income Tax Services</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/tds-return.html" class="ft-link">TDS Filing</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/property-tax.html" class="ft-link">Property Tax Filing Assistance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/professional-tax.html" class="ft-link">Professional Tax Filing - Assistance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/taxation/tax-advisory.html" class="ft-link">Legal Transaction & Advisory</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Agreements</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/rental-agreement.html" class="ft-link">Rental Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/partnership-deed.html" class="ft-link">Partnership Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/nda.html" class="ft-link">Non Disclosure Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/franchise-agreement.html" class="ft-link">Franchise Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/business-drafting.html" class="ft-link">Drafting and Reviewing of Business Agreement</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/agreement/employment-contract.html" class="ft-link">Employment Agreement</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Insurance</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/insurance/business-insurance.html" class="ft-link">Business Insurance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/insurance/shopkeeper-insurance.html" class="ft-link">Shopkeeper's Insurance Policy</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/insurance/fire-burglary.html" class="ft-link">Fire Insurance</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Compliances</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/pollution-control.html" class="ft-link">Pollution Control Certificate</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/iec.html" class="ft-link">Import-Export Code</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/roc-compliance.html" class="ft-link">ROC Compliance</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/book-keeping.html" class="ft-link">Book Keeping</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/iso-certification.html" class="ft-link">ISO Registration</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-secondary-heading" bis_skin_checked="1">Compliances</div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/license/msme-registration.html" class="ft-link">MSME Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/annual-returns.html" class="ft-link">Annual Return Filing</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/proprietor-registration.html" class="ft-link">Proprietor Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/stock-audit.html" class="ft-link">Stock Audit</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/pan-registration.html" class="ft-link">PAN Registration</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/services/compliances/tan-registration.html" class="ft-link">TAN Registration</a></div>
                              </div>
                              
                           </div>
                        </div>
                        <div bis_skin_checked="1">
                           <div class="ft-primary-heading ft-border-bottom" bis_skin_checked="1">Tools</div>
                           <div class="ft-flex ft-flex-wrap ft-mb-large" bis_skin_checked="1">
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/swp.html" class="ft-link">SWP Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/emi.html" class="ft-link">EMI Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/mutual_fund.html" class="ft-link">Mutual Fund Calculator</a></div>
                                 
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/ppf.html" class="ft-link">PPF Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/fd.html" class="ft-link">FD Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/rd.html" class="ft-link">RD Calculator</a></div>
                                 
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/nps.html" class="ft-link">NPS Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/sip.html" class="ft-link">SIP Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/gst.html" class="ft-link">GST Calculator</a></div>
                              </div>
                              <div class="ft-w-three-twelfths ft-md-w-half ft-sm-w-half" bis_skin_checked="1">
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/si.html" class="ft-link">SI Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/ci.html" class="ft-link">CI Calculator</a></div>
                                 <div class="ft-mb-tiny" bis_skin_checked="1"><a href="/calculator/ssy.html" class="ft-link">SSY Calculator</a></div>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div bis_skin_checked="1">
                  <div bis_skin_checked="1">
                     <div class="ft-primary-heading ft-border-bottom" bis_skin_checked="1">Top Packages</div>
                     <div class="ft-flex ft-flex-wrap ft-gap-small-medium ft-mt-medium-large ft-mb-large" bis_skin_checked="1">
                        <a href="#" class="ft-button-link">
                           <div bis_skin_checked="1">Startup Package</div>
                        </a>
                        <a href="#" class="ft-button-link">
                           <div bis_skin_checked="1">MSME Premium Package</div>
                        </a>
                        <a href="#" class="ft-button-link">
                           <div bis_skin_checked="1">MSME Industrial Package </div>
                        </a>
                        <a href="#" class="ft-button-link">
                           <div bis_skin_checked="1">Custom Package</div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

    <script type="module">
      import { initTheme } from '/src/theme.js';
      initTheme('#checkbox');
      import '/src/main.js';
    </script>
  </body>
</html>`;

const outputDir = path.join(__dirname, 'services');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let totalCreated = 0;

for (const [category, items] of Object.entries(menuData)) {
  const categoryDir = path.join(outputDir, category);
  
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir);
  }

  for (const [title, filename] of items) {
    const data = getPageData(category, title);

    const html = baseHtml
      .replace(/{{TITLE}}/g, title)
      .replace(/{{META_DESC}}/g, data.metaDesc)
      .replace(/{{CATEGORY}}/g, category)
      .replace(/{{FILENAME}}/g, filename)
      .replace(/{{HERO_H1}}/g, data.heroH1)
      .replace(/{{HERO_P}}/g, data.heroP)
      .replace(/{{DASHBOARD_TITLE}}/g, data.dashboardTitle)
      .replace(/{{GRID_1}}/g, data.grid1)
      .replace(/{{GRID_2}}/g, data.grid2)
      .replace(/{{GRID_3}}/g, data.grid3)
      .replace(/{{GRID_4}}/g, data.grid4)
      .replace(/{{BTN_WIDE_1}}/g, data.btnWide1)
      .replace(/{{BTN_WIDE_2}}/g, data.btnWide2)
      .replace(/{{BTN_APPLY}}/g, data.btnApply)
      .replace(/{{BANNER_IMG}}/g, data.bannerImg);
    
    fs.writeFileSync(path.join(categoryDir, filename), html);
    totalCreated++;
  }
}

console.log(`Successfully generated \${totalCreated} SEO-optimized static service pages in /services/!`);
