import React, { useState } from 'react';

function EncouragementScreen() {
  const [openItem, setOpenItem] = useState(null);

  const openWhenItems = [
    {
      title: 'Today was hard',
      message: 'Hard days are not wasted days. Every moment you stayed present, held a hand, or spoke gently, it mattered more than you know. You are allowed to feel tired. Rest and come back. We need you.'
    },
    {
      title: 'You feel unseen',
      message: 'The things you do quietly, the extra check-in, the careful explanation, the overall positive impact on patient\'s morale — those are seen. They are remembered. Here are people who wanted you to know that.'
    },
    {
      title: 'You need encouragement',
      message: 'You chose one of the hardest professions because you care. That choice matters every single day, even when it doesn\'t feel like it. You are making a difference, keep going.'
    },
    {
      title: 'You need a smile',
      message: 'A patient once said: "The nurse didn\'t just give me medicine. She gave me hope." That was probably you. Or someone just like you. Keep going.'
    },
  ];

  const toggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="screen">
      <h2>Daily encouragement</h2>
      <p>You're making a difference</p>

      <div className="encourage-card">
        <p className="encourage-quote">
          "You positively impacted 8 patients this week. That's 8 families who felt less afraid."
        </p>
        <div className="streak-chip">🔥 5-day compassion streak</div>
      </div>

      <div className="form-group" style={{ marginTop: '20px' }}>
        <label>Open when...</label>
        {openWhenItems.map((item, index) => (
          <div key={index}>
            <button
              className="open-when-btn"
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span>{openItem === index ? '▲' : '▼'}</span>
            </button>
            {openItem === index && (
              <div className="open-when-content">
                <p>{item.message}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EncouragementScreen;