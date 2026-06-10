/**
 * patchHeaders.js — Run with: node patchHeaders.js
 * Standardizes the nav header AND footer on every HTML file under /services/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Standard Header HTML ───────────────────────────────────────────
const STANDARD_HEADER = `<header id="header">
      <div class="container">
        <nav>
          <a href="/" class="logo">
            <img src="/logo.png" alt="LicenseXpertIndia" height="32" style="object-fit: contain;">
          </a>
          <ul class="nav-links" id="nav-links">
            <li class="nav-item"><a href="/">Home</a></li>
            <li class="nav-item">
              <a href="#">Startup <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
                <a href="/services/startup/private-limited-company.html">Private Limited Registration</a>
                <a href="/services/startup/opc.html">One Person Company Registration</a>
                <a href="/services/startup/mou.html">Memorandum of Understanding</a>
                <a href="/services/startup/pf-registration.html">PF Registration</a>
                <a href="/services/startup/due-diligence.html">Due Diligence</a>
                <a href="/services/startup/valuation-report.html">Company Valuation Report</a>
                <a href="/services/startup/trademark-registration.html">Trademark</a>
                <a href="/services/startup/llp.html">LLP Registration</a>
                <a href="/services/startup/aoa.html">Article of Association</a>
                <a href="/services/startup/esi-registration.html">ESI Registration</a>
                <a href="/services/startup/patent-registration.html">Patent Registration</a>
                <a href="/services/startup/company-conversion.html">Company Conversion</a>
                <a href="/services/startup/shareholder-agreement.html">Shareholder Agreement</a>
                <a href="/services/license/digital-signature.html">Digital Signature Certificate</a>
                <a href="/services/startup/startup-india-certificate.html">Startup India Certificate</a>
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#">Compliances <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
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
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#">Agreement <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
                <a href="/services/agreement/rental-agreement.html">Rental Agreement</a>
                <a href="/services/agreement/partnership-deed.html">Partnership Agreement</a>
                <a href="/services/agreement/nda.html">Non-Disclosure Agreement</a>
                <a href="/services/agreement/franchise-agreement.html">Franchise Agreement</a>
                <a href="/services/agreement/founders-agreement.html">Founders Agreement</a>
                <a href="/services/agreement/business-drafting.html">Drafting and Reviewing of Business Agreement</a>
                <a href="/services/agreement/employment-contract.html">Employment Agreement</a>
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#">License <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
                <a href="/services/license/fssai-license.html">FSSAI Food License</a>
                <a href="/services/license/shop-establishment.html">Shop &amp; Establishment License</a>
                <a href="/services/license/trade-license.html">Trade License</a>
                <a href="/services/license/drug-license.html">Drug License</a>
                <a href="/services/license/psara-license.html">PSARA License</a>
                <a href="/services/license/water-testing.html">Water Testing</a>
                <a href="/services/license/digital-signature.html">Digital Signature Certificate</a>
                <a href="/services/license/gem-services.html">GeM Registration</a>
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#">Taxation <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
                <a href="/services/taxation/gst-advisory.html">GST Services</a>
                <a href="/services/taxation/tax-planning.html">Income Tax Return</a>
                <a href="/services/taxation/tds-return.html">TDS Filing</a>
                <a href="/services/taxation/property-tax.html">Property Tax</a>
                <a href="/services/taxation/professional-tax.html">Professional Tax Filing</a>
                <a href="/services/taxation/tax-advisory.html">Legal Transaction and Tax Advisory</a>
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#">Insurance <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-large"><div class="dropdown-grid-2col">
                <a href="/services/insurance/business-insurance.html">Business Insurance</a>
                <a href="/services/insurance/shopkeeper-insurance.html">Shopkeeper's Insurance Policy</a>
                <a href="/services/insurance/fire-burglary.html">Fire Insurance</a>
              </div></div>
            </li>
            <li class="nav-item">
              <a href="#" class="btn btn-primary btn-consult">Consult an Expert <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
              <div class="dropdown dropdown-consult"><div class="dropdown-column">
                <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Lawyer" target="_blank">Talk to a Lawyer</a>
                <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Chartered%20Accountant" target="_blank">Talk to a Chartered Accountant</a>
                <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20Food%20Safety%20Mitra" target="_blank">Talk to a Food Safety Mitra</a>
                <a href="https://wa.me/919876543210?text=I%20want%20to%20talk%20to%20a%20StartUp%20Expert" target="_blank">Talk to a StartUp Expert</a>
              </div></div>
            </li>
          </ul>
          <div style="display: flex; align-items: center; gap: 16px; flex-shrink: 0;">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" aria-label="Toggle dark mode">
                <div class="slider round"></div>
              </label>
            </div>
            <div class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle mobile menu" role="button">
              <span></span><span></span><span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>`;

// ─── New Standard Footer HTML (from User Request) ────────────────
const STANDARD_FOOTER = `<div data-testid="Footer" class="ft-wrapper ft-container" bis_skin_checked="1">
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
                        <a href="#" class="ft-button-link"><div>Startup Package</div></a>
                        <a href="#" class="ft-button-link"><div>MSME Premium Package</div></a>
                        <a href="#" class="ft-button-link"><div>MSME Industrial Package</div></a>
                        <a href="#" class="ft-button-link"><div>Custom Package</div></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>`;

// Regex patterns
const HEADER_REGEX = /<header[^>]*>[\\s\\S]*?<\\/header>/;
// Match old footer (everything from possible CTA bar to </footer>)
const FOOTER_REGEX = /(?:<!-- CTA \\+ Stats Bar -->\\s*)?(?:<div[^>]*class="[^"]*footer-cta[^"]*"[\\s\\S]*?<\\/div>\\s*)?<footer[\\s\\S]*?<\\/footer>/;

// Also catch the new data-testid="Footer" structure if it's already there
// We match from the start of the footer div until the last closing div before the script
// Also catch the new data-testid="Footer" structure if it's already there
const NEW_FOOTER_REGEX = /<div data-testid="Footer"[\\s\\S]*?(?=\\s*<script type="module">|\\s*<\\/body>)/;

let patched = 0, skipped = 0;

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Patch header
  if (HEADER_REGEX.test(content)) {
    content = content.replace(HEADER_REGEX, STANDARD_HEADER);
    changed = true;
  }

  // Patch footer
  if (NEW_FOOTER_REGEX.test(content)) {
    content = content.replace(NEW_FOOTER_REGEX, STANDARD_FOOTER + '\\n');
    changed = true;
  } else if (FOOTER_REGEX.test(content)) {
    content = content.replace(FOOTER_REGEX, STANDARD_FOOTER);
    changed = true;
  }

  // Final cleanup of any stray duplicated CTA bars or comments
  content = content.replace(/(?:<!-- CTA \\+ Stats Bar -->\\s*){2,}/g, '<!-- CTA + Stats Bar -->\\n');

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(\`  ✓ \${path.basename(filePath)}\`);
    patched++;
  } else {
    console.log(\`  - SKIP: \${path.basename(filePath)}\`);
    skipped++;
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith('.html')) patchFile(full);
  }
}

console.log('='.repeat(60));
console.log('  LicenseXpertIndia — Update to IndiaAdvocacy Footer');
console.log('='.repeat(60) + '\\n');

walkDir(path.join(__dirname, 'services'));
walkDir(path.join(__dirname, 'calculator'));

console.log(\`\\n\${'='.repeat(60)}\`);
console.log(\`  ✅ Done! Patched: \${patched} | Skipped: \${skipped}\`);
console.log('='.repeat(60));
