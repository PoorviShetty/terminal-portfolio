import React from 'react'
import Terminal from './Terminal'
import Draggable from 'react-draggable';

function Window() {
  return (
    <div className='window'>       
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                    <Draggable>
                        <div><Terminal/></div>
                    </Draggable>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Window