import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fade-in-up is-visible">
          <h1>Expert Solutions for <span>Business Compliance</span></h1>
          <p>From company registration to tax filing, we handle the complexities while you focus on growth. Premium legal and statutory support for modern entrepreneurs.</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Free Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
