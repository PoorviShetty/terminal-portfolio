import React, { useState } from 'react';
import CommandUnit from './CommandUnit';

function Terminal() {
    const [unit, setUnit] = useState([<CommandUnit key = {Math.random()} autoFocus />]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUnit(
                [...unit, <CommandUnit key = {Math.random()} autoFocus />]
              )
        }
      }
    return (
        <div className='terminal' onKeyDown={handleKeyDown}>
           {unit.map((i) => i)}
        </div>
    )
}

export default Terminal