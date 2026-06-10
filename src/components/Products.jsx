import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('reg');

  const productData = {
    reg: [
      {
        title: 'Shop Act Registration',
        desc: 'Mandatory license for any commercial establishment in India. Fast processing guaranteed.',
        link: '/services/license/shop-establishment.html',
        color: 'blue'
      },
      {
        title: 'Udyam Registration',
        desc: 'Register as an MSME to avail government benefits, subsidies, and credit schemes.',
        link: '/services/license/msme-registration.html',
        color: 'green'
      }
    ],
    tax: [
      {
        title: 'GST Return Filing',
        desc: 'Professional filing of GSTR-1, GSTR-3B, and annual returns to avoid penalties.',
        link: '/services/compliances/annual-returns.html',
        color: 'orange'
      }
    ],
    legal: [
      {
        title: 'Stock Audit',
        desc: 'Physical verification of inventory to ensure accuracy of stock records and identify discrepancies.',
        link: '#',
        color: 'purple'
      },
      {
        title: 'Company Valuation',
        desc: 'Get a valuation report from a registered valuer for funding, mergers, or regulatory compliance.',
        link: '#',
        color: 'orange'
      }
    ]
  };

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Essential Compliance Tools</h2>
        </div>
        <div className="product-tabs">
          <button 
            className={`product-tab ${activeTab === 'reg' ? 'active' : ''}`} 
            onClick={() => setActiveTab('reg')}
          >
            Registration
          </button>
          <button 
            className={`product-tab ${activeTab === 'tax' ? 'active' : ''}`} 
            onClick={() => setActiveTab('tax')}
          >
            Taxation
          </button>
          <button 
            className={`product-tab ${activeTab === 'legal' ? 'active' : ''}`} 
            onClick={() => setActiveTab('legal')}
          >
            Legal/Audit
          </button>
        </div>

        <div className="products-grid active-grid">
          {productData[activeTab].map((item, idx) => (
            <div className={`product-card border-${item.color}`} key={idx}>
              <div className={`product-icon bg-${item.color}-light`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="product-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <a href={item.link} className={`product-link text-${item.color}`}>
                {activeTab === 'reg' ? 'Apply Now' : activeTab === 'tax' ? 'Start Filing' : 'Request/Get Report'} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
