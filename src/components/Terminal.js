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
            <div className='top-bar'>
                <p className='float-end d-block'>–&#09;✖</p>
            </div>
            <div className='terminal-content'>
                <p>
                    Welcome! <br/><br/>
                    Type <span className = 'purple'>help</span> to get the list of commands! <br/>
                    Type <span className = 'purple'>command_name --help</span> to know what a command does.
                </p>
                {unit.map((i) => i)}
            </div>
        </div>
    )
}

export default Terminal