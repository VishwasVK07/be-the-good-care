import React, { useState } from 'react';

function VolunteerScreen() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const tags = [
    'Compassion', 'Respect', 'Communication', 'Teamwork',
    'Above & Beyond', 'Calming Presence', 'Problem Solver',
    'Reassurance', 'Positivity'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  if (submitted) {
    return (
      <div className="screen">
        <h2>Recognition sent!</h2>
        <p>Thank you for celebrating great care.</p>
        <button onClick={() => { setSubmitted(false); setSelectedTags([]); }}>
          Log another
        </button>
      </div>
    );
  }

  return (
    <div className="screen">
      <h2>Log recognition</h2>
      <p>Help us celebrate great care</p>

      <div className="form-group">
        <label>Staff member name</label>
        <input type="text" placeholder="Search by name..." />
      </div>

      <div className="form-group">
        <label>Department</label>
        <select>
          <option>-- Select department --</option>
          <option>Emergency</option>
          <option>ICU</option>
          <option>Oncology</option>
          <option>Palliative Care</option>
          <option>General Medicine</option>
        </select>
      </div>

      <div className="form-group">
        <label>What did they do well?</label>
        <div className="tag-grid">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={selectedTags.includes(tag) ? 'tag selected' : 'tag'}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Note (optional)</label>
        <input type="text" placeholder="e.g. She took extra time to explain everything..." />
      </div>

      <button className="submit-btn" onClick={() => setSubmitted(true)}>
        Send recognition
      </button>
    </div>
  );
}

export default VolunteerScreen;