import React from 'react';

function StrengthsScreen() {
  const strengths = [
    { name: 'Compassion', count: 14, max: 14 },
    { name: 'Communication', count: 10, max: 14 },
    { name: 'Reassurance', count: 9, max: 14 },
    { name: 'Teamwork', count: 7, max: 14 },
    { name: 'Above & Beyond', count: 5, max: 14 },
    { name: 'Positivity', count: 2, max: 14 },
  ];

  return (
    <div className="screen">
      <h2>Your strengths</h2>
      <p>Based on 47 recognitions</p>
      {strengths.map((s, i) => (
        <div key={i} className="strength-bar-wrap">
          <div className="strength-label">
            <span>{s.name}</span>
            <span>{s.count} recognitions</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${(s.count / s.max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StrengthsScreen;