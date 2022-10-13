import React, { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch'

function CommandUnit() {
    const readOnly = useRef();
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const { data, error } = useFetch(
        process.env.REACT_APP_COMMANDS_LIST
      );
    
    // if (loading) return <p> LOADING...</p>;
    if (error) console.log(error);
    var commandsList = [];
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (data[event.target.value]){
                setOutput(data[event.target.value])
            }else{
                for (const x in data) {
                    commandsList.push(x)
                }

                const op = `Command not found!\n\nList of available commands: \n` + commandsList.join('\t')
                setOutput(op)
            }
            
            readOnly.current.readOnly = true;
        }
      }

    return (
        <div className='command-unit'>
            <span className='purple'>root@PS:</span>~$&nbsp;
            <input 
                value={input} 
                ref={readOnly}
                onInput={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className='terminal-input'
            />
            <pre className='terminal-output'>{output}</pre>
        </div>
    )
}

export default CommandUnit