import React from 'react';
import './App.css';
import Window from './components/Window'
import Github from './images/github.png'
import Linkedin from './images/linkedin.png'
import Draggable from 'react-draggable';


function App() {
  return (
    <div className="App px-2">
      <Draggable>
        <div className='icon-div mt-2'>
          <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
            <img src={Github} alt="Github" className='icon' />
          </a>
        </div>
      </Draggable>
      <Draggable>
        <div className='icon-div'>
          <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Linkedin" className='icon p-1' />
          </a>
        </div>
      </Draggable>
      <Window />
    </div>
  );
}

export default App;
