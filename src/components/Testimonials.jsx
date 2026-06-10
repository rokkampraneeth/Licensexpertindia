import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [current, setCurrent] = useState(1);
  const testimonials = [
    {
      initials: 'SS',
      name: 'Sakshi Soni',
      loc: '📍 Mohali, Punjab',
      text: 'LicenseXpertIndia helped me choose a property lawyer who understood my case and spent considerable time to clarify my doubts with constant updates through Whatsapp and email!'
    },
    {
      initials: 'RM',
      name: 'Rahul Mehta',
      loc: '📍 Ahmedabad, Gujarat',
      text: 'Needed GST registration and first few returns correctly. The team was very patient, explained everything in simple language, and made sure I came. Also helped with input tax credit which saved me quite a bit.',
      avatarBg: '#92e3a9'
    },
    {
      initials: 'AK',
      name: 'Anjali Kapoor',
      loc: '📍 Bangalore, Karnataka',
      text: 'The MSME registration process was so smooth. I was worried about the documents but their expert guided me step-by-step. Now I can apply for government tenders easily!',
      avatarBg: '#f68c2d'
    }
  ];

  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const getSlideClass = (idx) => {
    if (idx === current) return 'active';
    if (idx === (current - 1 + total) % total) return 'prev';
    if (idx === (current + 1) % total) return 'next';
    return '';
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header animate-fade-in-up is-visible">
          <h2 style={{ color: '#4b4bca' }}>What Our Clients Says</h2>
          <p>Don't just take our word for it—hear from businesses across India who trust us for their legal and financial needs.</p>
        </div>
        
        <div className="testimonial-slider-container">
          <div className="testimonial-track">
            {testimonials.map((t, idx) => (
              <div className={`testimonial-slide ${getSlideClass(idx)}`} key={idx}>
                <div className="testimonial-card">
                  <div className="quote-mark">“</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="client-info">
                    <div className="client-avatar" style={{ backgroundColor: t.avatarBg || '#f6c23e', color: '#fff' }}>
                      {t.initials}
                    </div>
                    <div className="client-details">
                      <h4>{t.name}</h4>
                      <span>{t.loc}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={() => setCurrent((current - 1 + total) % total)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slider-dots">
              <span>{current + 1}</span> / {total}
            </div>
            <button className="slider-btn" onClick={() => setCurrent((current + 1) % total)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
