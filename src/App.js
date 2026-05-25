import React, { useState } from 'react';
import './App.css';
import VolunteerScreen from './screens/VolunteerScreen';
import FeedScreen from './screens/FeedScreen';
import StrengthsScreen from './screens/StrengthsScreen';

function App() {
  const [screen, setScreen] = useState('volunteer');

  return (
    <div className="app">
      {screen === 'volunteer' && <VolunteerScreen />}
      {screen === 'feed' && <FeedScreen />}
      {screen === 'strengths' && <StrengthsScreen />}

      <nav className="nav-bar">
        <button onClick={() => setScreen('volunteer')} className={screen === 'volunteer' ? 'active' : ''}>Log</button>
        <button onClick={() => setScreen('feed')} className={screen === 'feed' ? 'active' : ''}>Feed</button>
        <button onClick={() => setScreen('strengths')} className={screen === 'strengths' ? 'active' : ''}>Strengths</button>
      </nav>
    </div>
  );
}

export default App;