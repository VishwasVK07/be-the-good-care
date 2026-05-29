import React, { useState } from 'react';
import './App.css';
import VolunteerScreen from './screens/VolunteerScreen';
import FeedScreen from './screens/FeedScreen';
import StrengthsScreen from './screens/StrengthsScreen';
import EncouragementScreen from './screens/EncouragementScreen';
function App() {
  const [screen, setScreen] = useState('volunteer');

  return (
    <div className="app">
      {screen === 'volunteer' && <VolunteerScreen />}
      {screen === 'feed' && <FeedScreen />}
      {screen === 'strengths' && <StrengthsScreen />}
      {screen === 'encouragement' && <EncouragementScreen />}

      <nav className="nav-bar">
        <button onClick={() => setScreen('volunteer')} className={screen === 'volunteer' ? 'active' : ''}>Log</button>
        <button onClick={() => setScreen('feed')} className={screen === 'feed' ? 'active' : ''}>Feed</button>
        <button onClick={() => setScreen('strengths')} className={screen === 'strengths' ? 'active' : ''}>Strengths</button>
        <button onClick={() => setScreen('encouragement')} className={screen === 'encouragement' ? 'active' : ''}>Uplift</button>
      </nav>
    </div>
  );
}

export default App;
