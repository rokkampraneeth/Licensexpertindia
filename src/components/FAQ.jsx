import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" 
          className="faq-icon" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "1. What's the purpose of LicenseXpertIndia?",
      a: "Our main aim is to reach the masses of society and provide them with the utmost legal aid through the means of technology. LicenseXpertIndia is a legal tech platform with its focus on solving all types of legal issues that the people face in the country in their daily lives."
    },
    {
      q: "2. What is the turn-around time for availing online advice?",
      a: "Our typical turnaround time for providing preliminary online advice is within 24 to 48 business hours after receiving your complete query and necessary documents."
    },
    {
      q: "3. How can we organize an advocate/client's case hearings?",
      a: "We provide a dedicated dashboard where clients and advocates can track case status, schedule meetings, and share required documentation securely online."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header animate-fade-in-up is-visible">
          <h2 style={{ color: '#0b1a30', fontSize: '2.5rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container animate-fade-in-up is-visible">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
