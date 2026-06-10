import React from 'react';

const Services = () => {
  const coreServices = [
    {
      title: 'Company Registration',
      desc: 'Setup your Private Limited, LLP, or One Person Company with complete legal documentation and ROC compliance.',
      link: '/services/startup/private-limited-company.html',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'Taxation & Filings',
      desc: 'Hassle-free GST registration, monthly filings, ITR, and TDS compliance managed by experienced tax professionals.',
      link: '/services/taxation/gst-advisory.html',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: 'Licensing & Permits',
      desc: 'Get your FSSAI, MSME, Trade, and Import-Export licenses quickly. We handle the paperwork, you get the permit.',
      link: '/services/license/fssai-license.html',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header animate-fade-in-up is-visible">
          <h2>Our Core Services</h2>
          <p>Comprehensive solutions tailored for every stage of your business journey.</p>
        </div>
        <div className="services-grid animate-fade-in-up is-visible">
          {coreServices.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="service-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
