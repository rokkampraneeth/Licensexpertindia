import React, { useState } from 'react';

const ConsultDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const experts = [
    { name: 'Talk to a Lawyer', msg: 'I want to talk to a Lawyer' },
    { name: 'Talk to a Chartered Accountant', msg: 'I want to talk to a Chartered Accountant' },
    { name: 'Talk to a Food Safety Mitra', msg: 'I want to talk to a Food Safety Mitra' },
    { name: 'Talk to a StartUp Expert', msg: 'I want to talk to a StartUp Expert' }
  ];

  const phone = "919876543210";

  return (
    <li className={`nav-item ${isOpen ? 'mobile-open' : ''}`}>
      <a href="#" className="btn btn-primary btn-consult" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
        Consult an Expert 
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
      <div className="dropdown dropdown-consult">
        <div className="dropdown-column">
          {experts.map((expert, index) => (
            <a 
              key={index}
              href={`https://wa.me/${phone}?text=${encodeURIComponent(expert.msg)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {expert.name}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ConsultDropdown;
