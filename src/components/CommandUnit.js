import React, { useState, useRef } from 'react';


function CommandUnit() {
    const readOnly = useRef();
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value)
            setOutput(event.target.value)
            readOnly.current.readOnly = true;
        }
      }

    return (
        <div className='command-unit'>
            &gt; 
            <input 
                value={input} 
                ref={readOnly}
                onInput={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className='terminal-input'
            />
            <br/>
            <span>{output}</span>
        </div>
    )
}

export default CommandUnit