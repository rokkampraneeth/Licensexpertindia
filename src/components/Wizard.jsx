import React from 'react';

const Wizard = () => {
  return (
    <section className="wizard-section animate-fade-in-up is-visible">
      <div className="container">
        <div className="wizard-card">
          <div className="wizard-text">
            <h3>Need help choosing?</h3>
            <p>Our AI-powered eligibility wizard can help you identify exactly what your business needs.</p>
          </div>
          <button className="btn btn-primary" onClick={() => window.toggleChat()}>Start Wizard</button>
        </div>
      </div>
    </section>
  );
};

export default Wizard;
