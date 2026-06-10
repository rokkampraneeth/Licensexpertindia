import React, { useState, useEffect } from 'react';
import ConsultDropdown from './ConsultDropdown';

const Navbar = () => {
  const menuData = {
    startup: [
      { name: 'Private Limited Registration', path: '/services/startup/private-limited-company.html' },
      { name: 'One Person Company Registration', path: '/services/startup/opc.html' },
      { name: 'Memorandum of Understanding', path: '/services/startup/mou.html' },
      { name: 'PF Registration', path: '/services/startup/pf-registration.html' },
      { name: 'Due Diligence', path: '/services/startup/due-diligence.html' },
      { name: 'Company Valuation Report', path: '/services/startup/valuation-report.html' },
      { name: 'Trademark', path: '/services/startup/trademark-registration.html' },
      { name: 'LLP Registration', path: '/services/startup/llp.html' },
      { name: 'Article of Association', path: '/services/startup/aoa.html' },
      { name: 'ESI Registration', path: '/services/startup/esi-registration.html' },
      { name: 'Patent Registration', path: '/services/startup/patent-registration.html' },
      { name: 'Company Conversion', path: '/services/startup/company-conversion.html' },
      { name: 'Shareholder Agreement', path: '/services/startup/shareholder-agreement.html' },
      { name: 'Digital Signature Certificate', path: '/services/license/digital-signature.html' },
      { name: 'Startup India Certificate', path: '/services/startup/startup-india-certificate.html' }
    ],
    compliances: [
      { name: 'Annual Return Filing', path: '/services/compliances/annual-returns.html' },
      { name: 'PAN Registration', path: '/services/compliances/pan-registration.html' },
      { name: 'ISO Registration', path: '/services/license/iso-certification.html' },
      { name: 'Import Export Code', path: '/services/license/iec.html' },
      { name: 'Book Keeping', path: '/services/compliances/book-keeping.html' },
      { name: 'Proprietor Registration', path: '/services/compliances/proprietor-registration.html' },
      { name: 'Stock Audit', path: '/services/compliances/stock-audit.html' },
      { name: 'TAN Registration', path: '/services/compliances/tan-registration.html' },
      { name: 'Pollution Control Certificate', path: '/services/compliances/pollution-control.html' },
      { name: 'ROC Compliance', path: '/services/compliances/roc-compliance.html' },
      { name: 'MSME Registration', path: '/services/license/msme-registration.html' }
    ],
    agreement: [
      { name: 'Rental Agreement', path: '/services/agreement/rental-agreement.html' },
      { name: 'Partnership Agreement', path: '/services/agreement/partnership-deed.html' },
      { name: 'Non-Disclosure Agreement', path: '/services/agreement/nda.html' },
      { name: 'Franchise Agreement', path: '/services/agreement/franchise-agreement.html' },
      { name: 'Founders Agreement', path: '/services/agreement/founders-agreement.html' },
      { name: 'Drafting and Reviewing of Business Agreement', path: '/services/agreement/business-drafting.html' },
      { name: 'Employment Agreement', path: '/services/agreement/employment-contract.html' }
    ],
    license: [
      { name: 'FSSAI Food License', path: '/services/license/fssai-license.html' },
      { name: 'Shop & Establishment License', path: '/services/license/shop-establishment.html' },
      { name: 'Trade License', path: '/services/license/trade-license.html' },
      { name: 'Drug License', path: '/services/license/drug-license.html' },
      { name: 'PSARA License', path: '/services/license/psara-license.html' },
      { name: 'Water Testing', path: '/services/license/water-testing.html' },
      { name: 'Digital Signature Certificate', path: '/services/license/digital-signature.html' },
      { name: 'GeM Registration', path: '/services/license/gem-services.html' }
    ],
    taxation: [
      { name: 'GST Services', path: '/services/taxation/gst-advisory.html' },
      { name: 'Income Tax Return', path: '/services/taxation/tax-planning.html' },
      { name: 'TDS Filing', path: '/services/taxation/tds-return.html' },
      { name: 'Property Tax', path: '/services/taxation/property-tax.html' },
      { name: 'Professional Tax Filing', path: '/services/taxation/professional-tax.html' },
      { name: 'Legal Transaction and Tax Advisory', path: '/services/taxation/tax-advisory.html' }
    ],
    insurance: [
      { name: 'Business Insurance', path: '/services/insurance/business-insurance.html' },
      { name: 'Shopkeeper\'s Insurance Policy', path: '/services/insurance/shopkeeper-insurance.html' },
      { name: 'Fire Insurance', path: '/services/insurance/fire-burglary.html' }
    ]
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category, e) => {
    e.preventDefault();
    setActiveCategory(activeCategory === category ? null : category);
  };

  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <a href="/" className="logo">
            <img src="/logo-white.png" alt="LicenseXpertIndia" height="32" style={{ objectFit: 'contain' }} />
          </a>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="nav-links">
            <li className="nav-item"><a href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            
            {Object.keys(menuData).map((category) => (
              <li className={`nav-item ${activeCategory === category ? 'mobile-open' : ''}`} key={category}>
                <a href="#" onClick={(e) => toggleCategory(category, e)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)} 
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div className="dropdown dropdown-large">
                  <div className="dropdown-grid-2col">
                    {menuData[category].map((item, idx) => (
                      <a key={idx} href={item.path} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <ConsultDropdown />
            
            <li className="nav-item theme-nav-item" style={{ display: 'flex', alignItems: 'center', padding: '10px 15px' }}>
              <span style={{ marginRight: '15px', fontSize: '0.9rem', fontWeight: 600 }}>Theme</span>
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" aria-label="Toggle dark mode" checked={isDarkMode} onChange={toggleTheme} />
                  <div className="slider round"></div>
                </label>
              </div>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <div 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
              id="mobile-menu-btn" 
              aria-label="Toggle mobile menu" 
              aria-expanded={isMobileMenuOpen} 
              role="button"
              onClick={toggleMobileMenu}
            >
              <span></span><span></span><span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
