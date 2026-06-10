/**
 * service.js - Dynamic Content Engine for Service Detail Pages
 * Extracted from service.html for better maintainability.
 */

import { initTheme } from './theme.js';

const menuMap = {
  'private-limited-company': { c: 'Startup', t: 'Private Limited Company' },
  'public-limited-company': { c: 'Startup', t: 'Public Limited Company' },
  'llp': { c: 'Startup', t: 'Limited Liability Partnership (LLP)' },
  'opc': { c: 'Startup', t: 'One Person Company (OPC)' },
  'section-8-company': { c: 'Startup', t: 'Section 8 Company (NGO)' },
  'nidhi-company': { c: 'Startup', t: 'Nidhi Company' },
  'producer-company': { c: 'Startup', t: 'Producer Company' },
  'indian-subsidiary': { c: 'Startup', t: 'Indian Subsidiary' },

  'roc-compliance': { c: 'Compliances', t: 'ROC Compliance' },
  'gst-filing': { c: 'Compliances', t: 'GST Filing' },
  'itr': { c: 'Compliances', t: 'Income Tax Return (ITR)' },
  'tds-return': { c: 'Compliances', t: 'TDS Return Filing' },
  'annual-returns': { c: 'Compliances', t: 'Annual Returns' },
  'dir-3-kyc': { c: 'Compliances', t: 'DIR-3 KYC' },
  'change-in-directors': { c: 'Compliances', t: 'Change in Directors' },
  'increase-in-authorized-capital': { c: 'Compliances', t: 'Increase in Authorized Capital' },

  'partnership-deed': { c: 'Agreement', t: 'Partnership Deed' },
  'rental-agreement': { c: 'Agreement', t: 'Rental Agreement' },
  'employment-contract': { c: 'Agreement', t: 'Employment Contract' },
  'founders-agreement': { c: 'Agreement', t: 'Founder’s Agreement' },
  'sla': { c: 'Agreement', t: 'Service Level Agreement (SLA)' },
  'nda': { c: 'Agreement', t: 'NDAs & Confidentiality' },
  'sales-purchase-agreement': { c: 'Agreement', t: 'Sales/Purchase Agreement' },
  'franchise-agreement': { c: 'Agreement', t: 'Franchise Agreement' },

  'fssai-license': { c: 'License', t: 'FSSAI Food License' },
  'shop-establishment': { c: 'License', t: 'Shop & Establishment License' },
  'trade-license': { c: 'License', t: 'Trade License' },
  'msme-registration': { c: 'License', t: 'MSME/Udyam Registration' },
  'iec': { c: 'License', t: 'Import Export Code (IEC)' },
  'iso-certification': { c: 'License', t: 'ISO Certification' },
  'drug-license': { c: 'License', t: 'Drug License' },
  'psara-license': { c: 'License', t: 'PSARA License' },

  'gst-advisory': { c: 'Taxation', t: 'GST Advisory' },
  'tax-planning': { c: 'Taxation', t: 'Income Tax Planning' },
  'direct-tax-litigation': { c: 'Taxation', t: 'Direct Tax Litigation' },
  'corporate-filings': { c: 'Taxation', t: 'Corporate Filings' },
  'tax-audit': { c: 'Taxation', t: 'Tax Audit' },
  'capital-gains': { c: 'Taxation', t: 'Capital Gains' },
  'professional-tax': { c: 'Taxation', t: 'Professional Tax' },
  'tax-appeals': { c: 'Taxation', t: 'Tax Appeals' },

  'business-insurance': { c: 'Insurance', t: 'Business Insurance' },
  'liability-insurance': { c: 'Insurance', t: 'Liability Insurance' },
  'professional-indemnity': { c: 'Insurance', t: 'Professional Indemnity' },
  'workers-comp': { c: 'Insurance', t: 'Workers Comp' },
  'fire-burglary': { c: 'Insurance', t: 'Fire & Burglary' },
  'marine-insurance': { c: 'Insurance', t: 'Marine Insurance' },
  'group-medical': { c: 'Insurance', t: 'Group Medical' },
  'keyman-insurance': { c: 'Insurance', t: 'Keyman Insurance' }
};

const getPageData = (cat, tit) => {
  let data = {
    heroH1: `Expert Services for<br>${tit}`,
    heroP: `Get professional assistance for your <b>${tit}</b>. We provide end-to-end guidance to ensure you are legally compliant with standard regulations through a fast, secure, and hassle-free online process.`,
    dashboardTitle: `${cat} Dashboard`,
    grid1: `Apply For<br>${tit.split(' ')[0]}`,
    grid2: `Required<br>Documents`,
    grid3: `Eligibility<br>Criteria`,
    grid4: `Key<br>Benefits`,
    btnWide1: `File ${tit} Now`,
    btnWide2: `${tit} Guide & Process`,
    btnApply: `Get Started`,
    bannerImg: `https://picsum.photos/seed/${tit.replace(/\s+/g, '')}/600/300?blur=2`
  };

  // Category-specific overrides
  if (cat === 'Startup') {
    data.heroH1 = `Register Your<br>${tit}`;
    data.heroP = `Starting a new venture? Register your <b>${tit}</b> with LicenseXpertIndia today. Our experts handle the documentation, DSC, DIN, and ROC filings exclusively for you, so you can build your business completely stress-free.`;
    data.grid1 = `Incorporation<br>Process`;
    data.grid2 = `DSC / DIN<br>Registration`;
    data.grid3 = `Drafting<br>MOA & AOA`;
    data.grid4 = `ROC<br>Filing`;
    data.btnWide1 = `Start Incorporation Process`;
    data.btnWide2 = `Check Name Availability`;
    data.btnApply = `Register Now`;
  } else if (cat === 'Compliances') {
    data.heroH1 = `Seamless<br>${tit}`;
    data.heroP = `File your <b>${tit}</b> securely and on time before the last filing date. LicenseXpertIndia ensures end-to-end statutory compliance, filing of returns, and replying to regulatory notices to keep your business penalty-free.`;
    data.grid1 = `Filing<br>Returns`;
    data.grid2 = `Compliance<br>Health Check`;
    data.grid3 = `Penalty<br>Protection`;
    data.grid4 = `Annual<br>Audit`;
    data.btnWide1 = `File ${tit} Today`;
    data.btnWide2 = `Late Fee & Penalty Calendar`;
  } else if (cat === 'Agreement') {
    data.heroH1 = `Draft Your<br>${tit}`;
    data.heroP = `Get a legally robust <b>${tit}</b> drafted by verified senior lawyers. Whether it's on E-Stamp or physical stamp, we deliver error-free legal documentation for 250+ cities across India directly to your mailbox within working hours!`;
    data.grid1 = `Lawyer<br>Review`;
    data.grid2 = `E-Stamping<br>Service`;
    data.grid3 = `Custom<br>Clauses`;
    data.grid4 = `Physical<br>Delivery`;
    data.btnWide1 = `Draft ${tit} Now`;
    data.btnWide2 = `View Sample Templates`;
    data.btnApply = `Draft Now`;
  } else if (cat === 'License') {
    data.heroH1 = `Swift Approval for<br>${tit}`;
    data.heroP = `Acquiring a <b>${tit}</b> holds the key to lawful operations. It is a mandatory document authorizing your business to commence trade. Apply online with minimal paperwork and constant tracking via WhatsApp & Email.`;
    data.grid1 = `New<br>License`;
    data.grid2 = `License<br>Renewal`;
    data.grid3 = `Modification<br>Services`;
    data.grid4 = `Govt<br>Liaison`;
    data.btnWide1 = `Apply for ${tit}`;
    data.btnWide2 = `License Validity & Renewal`;
  } else if (cat === 'Taxation') {
    data.heroH1 = `Expert Help on<br>${tit}`;
    data.heroP = `Simplify your tax burden. Get premium <b>${tit}</b> handled by our certified Chartered Accountants and Tax Experts. We focus on maximum tax savings, swift refunds, and meticulous return preparations.`;
    data.grid1 = `Tax<br>Filing`;
    data.grid2 = `Notice<br>Response`;
    data.grid3 = `Refund<br>Tracking`;
    data.grid4 = `Tax<br>Advisory`;
    data.btnWide1 = `Consult a Tax Expert`;
    data.btnWide2 = `List of Deductions Under IT Act`;
  } else if (cat === 'Insurance') {
    data.heroH1 = `Secure Your Future with<br>${tit}`;
    data.heroP = `Mitigate your risk with the best <b>${tit}</b> customized for your exact needs. Partnered with top insurers, we guarantee fast approvals and seamless claim assistance.`;
    data.grid1 = `Compare<br>Quotes`;
    data.grid2 = `Policy<br>Issuance`;
    data.grid3 = `Claim<br>Assistance`;
    data.grid4 = `Premium<br>Calculator`;
    data.btnWide1 = `Calculate Premium for ${tit}`;
    data.btnWide2 = `Insurance Coverage Details`;
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
  } else if (tit === 'Trade License') {
    data.heroH1 = `Apply for<br>Trade License`;
    data.heroP = `Trade license is a critical document which authorises you to commence business or trade in a particular locality. Ensure local compliance with zero hassle.`;
  }

  return data;
};

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggling logic
  initTheme('#checkbox');

  // Content Generation Logic
  const urlParams = new URLSearchParams(window.location.search);
  const pageId = urlParams.get('id') || 'private-limited-company';
  const mapping = menuMap[pageId] || { c: 'Services', t: 'Service Request' };
  
  const data = getPageData(mapping.c, mapping.t);

  // Update DOM
  document.title = `${mapping.t} | LicenseXpertIndia`;
  
  const el = (id) => document.getElementById(id);
  
  if (el('heroH1')) el('heroH1').innerHTML = data.heroH1;
  if (el('heroP')) el('heroP').innerHTML = data.heroP;
  if (el('dashboardTitle')) el('dashboardTitle').innerHTML = data.dashboardTitle;
  if (el('bannerTitle')) el('bannerTitle').innerHTML = mapping.t;
  if (el('bannerImg')) el('bannerImg').style.backgroundImage = `url('${data.bannerImg}')`;
  if (el('grid1')) el('grid1').innerHTML = data.grid1;
  if (el('grid2')) el('grid2').innerHTML = data.grid2;
  if (el('grid3')) el('grid3').innerHTML = data.grid3;
  if (el('grid4')) el('grid4').innerHTML = data.grid4;
  if (el('btnWide1')) el('btnWide1').innerHTML = data.btnWide1;
  if (el('btnWide2')) el('btnWide2').innerHTML = data.btnWide2;
  if (el('btnApply')) el('btnApply').innerHTML = data.btnApply;
});
