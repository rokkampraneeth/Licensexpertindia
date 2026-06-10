import React, { useState, useEffect } from 'react';

const StatItem = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(end * progress));

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-item">
      <div className="counter">{count}{target === "99" ? "%" : "+"}</div>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          <StatItem target="5000" label="Clients Served" />
          <StatItem target="150" label="Service Experts" />
          <StatItem target="25" label="States Covered" />
          <StatItem target="99" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
