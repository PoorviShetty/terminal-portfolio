import React from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <div className="App">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
