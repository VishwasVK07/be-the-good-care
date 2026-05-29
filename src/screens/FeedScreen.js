import React from 'react';

function FeedScreen() {
  const recognitions = [
    { initials: 'MK', tag: 'Compassion', message: 'She stayed with my mom until she calmed down. We didn\'t feel alone.', dept: 'Palliative Care', time: '2h ago' },
    { initials: 'JT', tag: 'Above & Beyond', message: 'He remembered my dad\'s name every time he came in. It meant a lot.', dept: 'Emergency', time: 'Yesterday' },
    { initials: 'RL', tag: 'Communication', message: 'She explained the procedure step by step so I wasn\'t scared.', dept: 'ICU', time: '3 days ago' },
  ];

  return (
    <div className="screen">
      <h2>Your appreciation feed</h2>
      <p>Messages from the people you've helped</p>
      {recognitions.map((r, i) => (
        <div key={i} className="card">
          <div className="card-header">
            <div className="avatar">{r.initials}</div>
            <span className="tag selected">{r.tag}</span>
          </div>
          <p className="message">"{r.message}"</p>
          <p className="meta">{r.dept} · {r.time}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedScreen;

