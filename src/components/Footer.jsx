import React from 'react';

const Footer = () => {
  return (
    <div data-testid="Footer" className="ft-wrapper ft-container">
      <div className="ft-bg-dark ft-py-large">
        <div className="ft-container-wrapper">
          <div className="ft-flex ft-gap-medium ft-sm-flex-col">
            <div className=" ft-w-quarter ft-sm-w-full ft-md-w-two-thirds">
              <img src="/logo-white.png" alt="LicenseXpertIndia Logo" width="200" height="40" style={{ objectFit: 'contain' }} />
              <div className="ft-sm-flex ft-md-gap-medium ft-sm-gap-medium">
                <div className="ft-sm-w-half">
                  <div className="ft-mt-large">
                    <div className="ft-secondary-heading">Follow us on</div>
                    <div className="ft-flex ft-gap-small ft-sm-gap-tiny">
                      <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" width="24" height="24" /></a>
                      <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" width="24" height="24" /></a>
                      <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" width="24" height="24" /></a>
                      <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" width="24" height="24" /></a>
                    </div>
                  </div>
                  <div className="ft-mt-large">
                    <div className="ft-secondary-heading">Have a query?</div>
                    <div className="ft-mb-tiny"><a href="/contact" className="ft-link">Support</a></div>
                  </div>
                </div>
                <div className="ft-mt-large">
                  <div className="ft-primary-heading false">Quick Links</div>
                  <div className="ft-mt-medium">
                    <div className="ft-mb-tiny"><a href="/about" className="ft-link">About us</a></div>
                    <div className="ft-mb-tiny"><a href="/contact" className="ft-link">Contact us</a></div>
                    <div className="ft-mb-tiny"><a href="/blog" className="ft-link">Blogs</a></div>
                    <div className="ft-mb-tiny"><a href="/refund-policy" className="ft-link">Refund Policy</a></div>
                    <div className="ft-mb-tiny"><a href="/privacy-policy" className="ft-link">Privacy Policy</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ft-w-full">
              <div>
                <div>
                  <div className="ft-primary-heading ft-border-bottom">Startups</div>
                  <div className="ft-flex ft-flex-wrap ft-mb-large">
                    {/* COLUMN 1 */}
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-mb-tiny"><a href="/services/startup/llp.html" className="ft-link">LLP Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/opc.html" className="ft-link">Company Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/aoa.html" className="ft-link">Article of Association</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/private-limited-company.html" className="ft-link">Private Ltd. Registration</a></div>
                    </div>
                    {/* COLUMN 4 */}
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-mb-tiny"><a href="/services/startup/due-diligence.html" className="ft-link">Due Diligence</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/company-conversion.html" className="ft-link">Company Conversion</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/esi-registration.html" className="ft-link">ESI Compliance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/pf-registration.html" className="ft-link">PF Compliance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/valuation-report.html" className="ft-link">Company Valuation Report</a></div>
                    </div>
                    {/* COLUMN 3 */}
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-mb-tiny"><a href="/services/startup/trademark-registration.html" className="ft-link">Trademark</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/patent-registration.html" className="ft-link">Patent Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/shareholder-agreement.html" className="ft-link">Shareholder Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/startup-india-certificate.html" className="ft-link">StartUp India Certificate</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-mb-tiny"><a href="/services/startup/mou.html" className="ft-link">Memorandum of Understanding</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/digital-signature.html" className="ft-link">Digital Signature Certificate</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup/opc.html" className="ft-link">One Person Company Registration</a></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ft-primary-heading ft-border-bottom">Services</div>
                  <div className="ft-flex ft-flex-wrap ft-mb-large">
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Consult an Expert</div>
                      <div className="ft-mb-tiny"><a href="/services/talk-to-lawyer/" className="ft-link">Talk to a Lawyer</a></div>
                      <div className="ft-mb-tiny"><a href="/services/talk-to-ca/" className="ft-link">Talk to a CA</a></div>
                      <div className="ft-mb-tiny"><a href="/services/food-safety-mitra/" className="ft-link">Talk to a Food Safety Mitra</a></div>
                      <div className="ft-mb-tiny"><a href="/services/startup-expert/" className="ft-link">Talk to a StartUp Expert</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">License</div>
                      <div className="ft-mb-tiny"><a href="/services/license/fssai-license.html" className="ft-link">Food License</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/trade-license.html" className="ft-link">Trade License</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/shop-establishment.html" className="ft-link">Shop Establishment License</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/drug-license.html" className="ft-link">Drug License</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/gem-services.html" className="ft-link">GEM Services</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/water-testing.html" className="ft-link">Water Testing Report</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Taxation</div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/gst-advisory.html" className="ft-link">GST Services</a></div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/tax-planning.html" className="ft-link">Income Tax Services</a></div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/tds-return.html" className="ft-link">TDS Filing</a></div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/property-tax.html" className="ft-link">Property Tax Filing Assistance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/professional-tax.html" className="ft-link">Professional Tax Filing - Assistance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/taxation/tax-advisory.html" className="ft-link">Legal Transaction &amp; Advisory</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Agreements</div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/rental-agreement.html" className="ft-link">Rental Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/partnership-deed.html" className="ft-link">Partnership Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/nda.html" className="ft-link">Non Disclosure Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/franchise-agreement.html" className="ft-link">Franchise Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/business-drafting.html" className="ft-link">Drafting and Reviewing of Business Agreement</a></div>
                      <div className="ft-mb-tiny"><a href="/services/agreement/employment-contract.html" className="ft-link">Employment Agreement</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Insurance</div>
                      <div className="ft-mb-tiny"><a href="/services/insurance/business-insurance.html" className="ft-link">Business Insurance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/insurance/shopkeeper-insurance.html" className="ft-link">Shopkeeper's Insurance Policy</a></div>
                      <div className="ft-mb-tiny"><a href="/services/insurance/fire-burglary.html" className="ft-link">Fire Insurance</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Compliances</div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/pollution-control.html" className="ft-link">Pollution Control Certificate</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/iec.html" className="ft-link">Import-Export Code</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/roc-compliance.html" className="ft-link">ROC Compliance</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/book-keeping.html" className="ft-link">Book Keeping</a></div>
                      <div className="ft-mb-tiny"><a href="/services/license/iso-certification.html" className="ft-link">ISO Registration</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading">Compliances</div>
                      <div className="ft-mb-tiny"><a href="/services/license/msme-registration.html" className="ft-link">MSME Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/annual-returns.html" className="ft-link">Annual Return Filing</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/proprietor-registration.html" className="ft-link">Proprietor Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/stock-audit.html" className="ft-link">Stock Audit</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/pan-registration.html" className="ft-link">PAN Registration</a></div>
                      <div className="ft-mb-tiny"><a href="/services/compliances/tan-registration.html" className="ft-link">TAN Registration</a></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="ft-primary-heading ft-border-bottom">Tools</div>
                  <div className="ft-flex ft-flex-wrap ft-mb-large">
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading"></div>
                      <div className="ft-mb-tiny"><a href="/calculator/swp.html" className="ft-link">SWP Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/emi.html" className="ft-link">EMI Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/mutual_fund.html" className="ft-link">Mutual Fund Calculator</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading"></div>
                      <div className="ft-mb-tiny"><a href="/calculator/ppf.html" className="ft-link">PPF Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/fd.html" className="ft-link">FD Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/rd.html" className="ft-link">RD Calculator</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading"></div>
                      <div className="ft-mb-tiny"><a href="/calculator/nps.html" className="ft-link">NPS Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/sip.html" className="ft-link">SIP Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/gst.html" className="ft-link">GST Calculator</a></div>
                    </div>
                    <div className="ft-w-three-twelfths ft-md-w-half ft-sm-w-half">
                      <div className="ft-secondary-heading"></div>
                      <div className="ft-mb-tiny"><a href="/calculator/si.html" className="ft-link">SI Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/ci.html" className="ft-link">CI Calculator</a></div>
                      <div className="ft-mb-tiny"><a href="/calculator/ssy.html" className="ft-link">SSY Calculator</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="ft-primary-heading ft-border-bottom">Top Packages</div>
              <div className="ft-flex ft-flex-wrap ft-gap-small-medium ft-mt-medium-large ft-mb-large">
                <a href="#" className="ft-button-link">
                  <div>Startup Package</div>
                </a>
                <a href="#" className="ft-button-link">
                  <div>MSME Premium Package</div>
                </a>
                <a href="#" className="ft-button-link">
                  <div>MSME Industrial Package </div>
                </a>
                <a href="#" className="ft-button-link">
                  <div>Custom Package</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
